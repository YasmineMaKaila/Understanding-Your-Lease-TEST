/* ===========================================================================
   app.js — Interactive Residential Lease Explainer
   Renders entirely from js/lease-data.js. No lease copy lives in this file.
   No library dependencies.
   =========================================================================== */

import { LEASE, KEY_TERMS, SUMMARY } from './lease-data.js';

/* ---------------------------------------------------------------- constants */
const ZOOM_MIN = 1.6;
const ZOOM_MAX = 2.4;
const FIT_FRACTION = 0.55;     // §5: target the clause at ~55% of viewer height
const HOVER_INTENT = 120;      // ms before a hover preview pans/zooms
const PAGE_W = 1700;           // source image geometry (all pages normalised)
const PAGE_H = 2800;

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const isTouch = window.matchMedia('(pointer: coarse)');

/* ------------------------------------------------------------------- state  */
const state = {
  view: 'intro',        // 'intro' | 'page' | 'summary' | 'keyterms'
  pageIndex: 0,
  lockedId: null,       // locked (clicked / guided) selection
  previewId: null,      // transient hover preview
  fullPage: false,      // View Full Page overrides zoom, keeps the explanation
};

const els = {};
let hoverTimer = null;
let cachedText = new Map();

/* =========================================================================
   helpers
   ========================================================================= */
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const page = () => LEASE[state.pageIndex];
const hotspots = () => page().hotspots;
const findHotspot = (id) => hotspots().find((h) => h.id === id) || null;
const activeId = () => state.previewId || state.lockedId;

/** union bounding box of a hotspot's rects, in image percentages */
function unionRect(h) {
  const x0 = Math.min(...h.rects.map((r) => r.x));
  const y0 = Math.min(...h.rects.map((r) => r.y));
  const x1 = Math.max(...h.rects.map((r) => r.x + r.width));
  const y1 = Math.max(...h.rects.map((r) => r.y + r.height));
  return { x: x0, y: y0, width: x1 - x0, height: y1 - y0 };
}

/** the rect the viewer zooms to: the largest one, so column-spanning
 *  provisions land on their substantive block rather than on empty margin */
function focusRect(h) {
  return h.rects.reduce((a, b) => (a.width * a.height >= b.width * b.height ? a : b));
}

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}

/** renders **bold** spans in supplied lease language, escaping everything else */
function richText(node, str) {
  node.textContent = '';
  str.split(/(\*\*[^*]+\*\*)/g).forEach((part) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) node.appendChild(el('b', null, part.slice(2, -2)));
    else if (part) node.appendChild(document.createTextNode(part));
  });
}

/* =========================================================================
   zoom + pan   (§5)
   ========================================================================= */
/** size the page box so the whole sheet always fits the workspace */
function fitDoc() {
  const v = els.viewer.getBoundingClientRect();
  if (!v.width || !v.height) return;
  const h = Math.min(v.height, (v.width * PAGE_H) / PAGE_W);
  els.doc.style.height = h.toFixed(2) + 'px';
  els.doc.style.width = ((h * PAGE_W) / PAGE_H).toFixed(2) + 'px';
}

function docMetrics() {
  const v = els.viewer.getBoundingClientRect();
  const d = els.doc.getBoundingClientRect();
  // the doc box is centred in the viewer; measure its untransformed size
  const w = els.doc.offsetWidth;
  const h = els.doc.offsetHeight;
  const dx = (v.width - w) / 2;
  const dy = (v.height - h) / 2;
  return { VW: v.width, VH: v.height, W: w, H: h, dx, dy, live: d };
}

function computeZoom(h) {
  const m = docMetrics();
  const r = focusRect(h);
  const clauseH = (r.height / 100) * m.H;
  const auto = clauseH > 0 ? (FIT_FRACTION * m.VH) / clauseH : ZOOM_MIN;
  const z = h.zoom != null ? h.zoom : auto;
  return clamp(z, ZOOM_MIN, ZOOM_MAX);
}

/** keep the page edges from pulling away from the viewer bounds */
function clampTranslate(t, contentSize, viewSize, offset) {
  if (contentSize <= viewSize) return -offset + (viewSize - contentSize) / 2;
  return clamp(t, -offset + viewSize - contentSize, -offset);
}

function applyTransform(h) {
  fitDoc();
  const m = docMetrics();
  if (!h || state.fullPage) {
    els.doc.style.transform = 'translate(0px, 0px) scale(1)';
    els.zoomState.textContent = 'Full page';
    return;
  }
  const z = computeZoom(h);
  const r = focusRect(h);
  const cx = ((r.x + r.width / 2) / 100) * m.W;
  const cy = ((r.y + r.height / 2) / 100) * m.H;
  const mx = m.VW / 2 - m.dx;      // viewer centre, in doc-local coordinates
  const my = m.VH / 2 - m.dy;
  let tx = mx - cx * z;
  let ty = my - cy * z;
  tx = clampTranslate(tx, m.W * z, m.VW, m.dx);
  ty = clampTranslate(ty, m.H * z, m.VH, m.dy);
  els.doc.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px) scale(${z.toFixed(3)})`;
  els.zoomState.textContent = `${z.toFixed(2)}× — ${h.paragraphRef || h.title}`;
}

/* =========================================================================
   selection
   ========================================================================= */
function setLocked(id, { moveFocus = false } = {}) {
  state.lockedId = id;
  state.previewId = null;
  state.fullPage = false;
  syncDocument();
  renderPanel();
  if (moveFocus && id) {
    const btn = els.hsLayer.querySelector(`[data-hs="${id}"][data-primary="1"]`);
    if (btn) btn.focus({ preventScroll: true });
  }
  if (isTouch.matches && id) revealPanel();
}

function setPreview(id) {
  if (reduceMotion.matches) {           // §5: no hover-driven movement
    state.previewId = id;
    syncDocument({ transform: false });
    renderPanel();
    return;
  }
  state.previewId = id;
  state.fullPage = false;
  syncDocument();
  renderPanel();
}

function clearPreview() {
  if (state.previewId == null) return;
  state.previewId = null;
  syncDocument();
  renderPanel();                        // falls back to the locked selection
}

function viewFullPage() {
  state.fullPage = true;
  state.previewId = null;
  syncDocument();                        // the explanation stays on screen
}

/** mobile: bring the explanation into view without a disorienting jump */
function revealPanel() {
  if (!isTouch.matches || window.innerWidth > 860) return;
  const top = els.panel.getBoundingClientRect().top + window.scrollY - 12;
  window.scrollTo({ top, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
}

/* =========================================================================
   document rendering
   ========================================================================= */
function buildDocument() {
  const p = page();
  els.docImg.src = p.image;
  els.docImg.alt =
    `Page ${p.page} of ${LEASE.length} of the sanitized lease — ${p.pageTitle}. ` +
    `The provisions on this page are available as focusable buttons, and the full page ` +
    `is available as text through the “Read this page as text” control.`;

  els.hsLayer.textContent = '';
  hotspots().forEach((h, i) => {
    h.rects.forEach((r, ri) => {
      const b = el('button', 'hs');
      b.type = 'button';
      b.dataset.hs = h.id;
      b.style.left = r.x + '%';
      b.style.top = r.y + '%';
      b.style.width = r.width + '%';
      b.style.height = r.height + '%';
      b.appendChild(el('span', 'hs__tint'));
      b.appendChild(el('span', 'hs__edge'));

      if (ri === 0) {
        b.dataset.primary = '1';
        const ref = h.paragraphRef ? `, paragraph ${String(h.paragraphRef).trim()}` : '';
        const partNote = h.rects.length > 1
          ? `. This provision continues in ${h.rects.length} parts of the page` : '';
        b.setAttribute('aria-label', `${h.title} — lease explanation${ref}${partNote}`);
        b.setAttribute('aria-pressed', 'false');
        b.setAttribute('aria-describedby', 'panel-live');
      } else {
        // continuation fragments: clickable, but not separate tab stops
        b.tabIndex = -1;
        b.setAttribute('aria-hidden', 'true');
      }
      els.hsLayer.appendChild(b);
    });
  });

  els.hsGroup.setAttribute(
    'aria-label',
    `Interactive provisions on page ${p.page}: ${hotspots().length} terms`
  );
  preloadNext();
}

function syncDocument({ transform = true } = {}) {
  const act = activeId();
  els.hsLayer.classList.toggle('is-narrowed', !!act);
  els.hsLayer.querySelectorAll('.hs').forEach((b) => {
    const on = b.dataset.hs === state.lockedId;
    const prev = b.dataset.hs === state.previewId;
    b.classList.toggle('is-active', on);
    b.classList.toggle('is-preview', prev && !on);
    if (b.dataset.primary === '1') b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  if (transform) applyTransform(act ? findHotspot(act) : null);
  syncGuided();
}

function preloadNext() {
  const nxt = LEASE[state.pageIndex + 1];
  if (!nxt) return;
  const img = new Image();
  img.decoding = 'async';
  img.src = nxt.image;
}

/* =========================================================================
   read aloud — browser speech synthesis only (window.speechSynthesis).
   No audio files are created, downloaded, or required. Nothing autoplays:
   speech only ever starts from a deliberate activation of a Read aloud button.
   Only the text that is already visible on screen is spoken.
   ========================================================================= */
const SPEECH_OK = 'speechSynthesis' in window
  && typeof window.SpeechSynthesisUtterance === 'function';

/* never spoken: controls, navigation, decoration, hidden text, provenance */
const SPEAK_SKIP = [
  'button', 'a[href]', 'nav', 'dialog', 'input', 'select', 'textarea',
  '[hidden]', '[aria-hidden="true"]', '.sr-only',
  '.speak', '.speak-wrap', '.speak-na', '.speak-msg',
  '.provenance', '.xrefs', '.badge-pending', '[data-speak-skip]',
].join(', ');

const SPEAK_BLOCK = new Set([
  'DIV', 'SECTION', 'ARTICLE', 'ASIDE', 'HEADER', 'FOOTER', 'FIGURE', 'FIGCAPTION',
  'P', 'BLOCKQUOTE', 'PRE', 'UL', 'OL', 'LI', 'DL', 'DT', 'DD',
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'TABLE', 'TR', 'TD', 'TH',
]);

const CHUNK_MAX = 300;          // engines truncate very long utterances
const speech = { host: null, btn: null, token: 0 };

const normSpace = (s) => s.replace(/\s+/g, ' ').trim();

function isShown(node) {
  const cs = window.getComputedStyle(node);
  return cs.display !== 'none' && cs.visibility !== 'hidden';
}

/** text of one element and its inline descendants, minus excluded parts */
function inlineText(node) {
  if (node.nodeType === 3) return node.textContent;
  if (node.nodeType !== 1) return '';
  if (node.matches(SPEAK_SKIP) || !isShown(node)) return '';
  let s = '';
  node.childNodes.forEach((c) => { s += inlineText(c); });
  return s;
}

/** the visible text blocks of a section, in reading order */
function speakBlocks(root, out = []) {
  if (!root || root.nodeType !== 1) return out;
  if (root.matches(SPEAK_SKIP) || !isShown(root)) return out;
  const nested = Array.from(root.children)
    .filter((c) => !c.matches(SPEAK_SKIP) && isShown(c) && SPEAK_BLOCK.has(c.tagName));
  if (!nested.length) {
    const t = normSpace(inlineText(root));
    if (t) out.push(t);
    return out;
  }
  root.childNodes.forEach((c) => {
    if (c.nodeType === 3) { const t = normSpace(c.textContent); if (t) out.push(t); }
    else if (c.nodeType === 1) speakBlocks(c, out);
  });
  return out;
}

/** one short utterance per sentence group — more reliable across engines */
function speakChunks(blocks) {
  const chunks = [];
  blocks.forEach((b) => {
    const text = /[.!?:;]$/.test(b) ? b : b + '.';
    if (text.length <= CHUNK_MAX) { chunks.push(text); return; }
    let buf = '';
    (text.match(/[^.!?]+[.!?]*\s*/g) || [text]).forEach((s) => {
      const next = (buf + ' ' + s).trim();
      if (next.length > CHUNK_MAX && buf) { chunks.push(buf.trim()); buf = s; }
      else buf = next;
    });
    if (buf.trim()) chunks.push(buf.trim());
  });
  return chunks;
}

function setSpeakBtn(btn, speaking) {
  if (!btn) return;
  const label = btn.dataset.speakLabel || 'this section';
  btn.classList.toggle('is-speaking', speaking);
  btn.setAttribute('aria-pressed', speaking ? 'true' : 'false');
  // the control is an image, so its state is carried by an accessible name,
  // a tooltip and a visible text label — never by colour alone
  btn.setAttribute('aria-label',
    speaking ? `Stop reading: ${label}` : `Read this section aloud: ${label}`);
  btn.title = speaking ? 'Stop reading' : 'Read this section aloud';
  const t = btn.querySelector('.speak__txt');
  if (t) t.textContent = 'Stop reading';
}

function speakMsg(btn, text) {
  if (!btn) return;
  let m = btn.parentNode?.querySelector(':scope > .speak-msg');
  if (!text) { m?.remove(); return; }
  if (!m) { m = el('p', 'speak-msg'); m.setAttribute('role', 'status'); btn.after(m); }
  m.textContent = text;
}

function stopSpeech({ notify = false } = {}) {
  const was = speech.btn;
  speech.token += 1;
  speech.host = null;
  speech.btn = null;
  if (SPEECH_OK) {
    try {
      const s = window.speechSynthesis;
      if (was || s.speaking || s.pending) s.cancel();   // never poke an idle engine
    } catch (e) { /* no-op */ }
  }
  setSpeakBtn(was, false);
  if (notify && was) announce('Stopped reading.');
}

/** stop if the section currently being read lives inside `container` */
function stopSpeechIn(container) {
  if (speech.host && container && container.contains(speech.host)) stopSpeech();
}

function startSpeech(host, btn, label, readSelector) {
  stopSpeech();
  if (!SPEECH_OK) return;
  // only the explanation sections are spoken: What This Means, Key Term(s),
  // Why It Matters, Example, Important to Know
  const targets = readSelector
    ? Array.from(host.querySelectorAll(readSelector))
    : [host];
  const blocks = [];
  targets.forEach((t) => speakBlocks(t, blocks));
  const chunks = speakChunks(blocks);
  if (!chunks.length) { speakMsg(btn, 'There is no readable text in this section.'); return; }

  const token = ++speech.token;
  speech.host = host;
  speech.btn = btn;
  setSpeakBtn(btn, true);
  speakMsg(btn, '');
  announce(`Reading ${label} aloud.`);

  const fail = () => {
    if (token !== speech.token) return;          // a newer request already took over
    stopSpeech();
    speakMsg(btn, 'Read aloud stopped before it finished. All of this text is shown on the page.');
  };

  try {
    chunks.forEach((text, i) => {
      const u = new window.SpeechSynthesisUtterance(text);
      u.lang = document.documentElement.lang || 'en-US';
      u.rate = 0.95;
      if (i === chunks.length - 1) {
        u.onend = () => {
          if (token !== speech.token) return;    // finished, or superseded
          stopSpeech();
          announce('Finished reading.');
        };
      }
      u.onerror = fail;
      window.speechSynthesis.speak(u);
    });
  } catch (e) {
    fail();
  }
}

/**
 * Give a section a visible "Read this section aloud" control.
 * host   — the element whose visible text will be read
 * label  — spoken/accessible name for the section
 * after  — optional child of host; the control is placed directly after it
 */
function attachSpeak(host, { label = 'this section', readSelector = null } = {}) {
  if (!host) return null;
  host.querySelectorAll(':scope > .speak-wrap').forEach((n) => n.remove());

  const wrap = el('div', 'speak-wrap');       // right-aligned, sits outside the
  host.appendChild(wrap);                     // lease language and above the copy

  if (!SPEECH_OK) {                           // clear, visible fallback
    wrap.appendChild(el('p', 'speak-na',
      'Read aloud is not available in this browser. All of this text is shown on the page.'));
    return null;
  }

  const btn = el('button', 'speak');
  btn.type = 'button';
  btn.dataset.speakLabel = label;
  btn.setAttribute('aria-pressed', 'false');
  btn.appendChild(el('span', 'speak__txt', 'Stop reading'));
  const img = el('span', 'speak__img');
  img.setAttribute('aria-hidden', 'true');
  btn.appendChild(img);
  setSpeakBtn(btn, false);                    // sets aria-label and tooltip
  // click covers mouse, touch, Enter and Space on a real <button>
  btn.addEventListener('click', () => {
    if (speech.btn === btn) stopSpeech({ notify: true });
    else startSpeech(host, btn, label, readSelector);
  });
  wrap.appendChild(btn);
  return btn;
}

/* =========================================================================
   explanation panel
   ========================================================================= */
function renderPanel() {
  stopSpeechIn(els.panelBody);          // the section being read is about to go
  const id = activeId();
  const p = els.panelBody;
  els.panel.classList.toggle('panel--idle', !id);
  p.textContent = '';

  if (!id) {
    const wrap = el('div', 'panel__empty');
    wrap.appendChild(el('div', 'panel__kicker', `Page ${page().page} · ${page().category}`));
    wrap.appendChild(el('h3', null, 'Explore This Page'));
    wrap.appendChild(el('p', null,
      'Hover, click, or use the Next Term control to learn what different parts of this lease mean.'));
    const ul = el('ul', 'panel__hintlist');
    [
      'Hover a highlighted provision to preview it. Click to keep it selected.',
      'Previous Term and Next Term walk through this page in order.',
      'View Full Page returns the document to its normal size.',
    ].forEach((t) => {
      const li = el('li');
      li.appendChild(el('span', 'dot'));
      li.appendChild(el('span', null, t));
      ul.appendChild(li);
    });
    wrap.appendChild(ul);
    p.appendChild(wrap);
    els.panelTitle.textContent = 'Explore This Page';
    return;
  }

  const h = findHotspot(id);
  const term = el('article', 'term');
  term.id = 'term-' + h.id;

  if (h.paragraphRef) term.appendChild(el('div', 'term__ref', h.paragraphRef));
  const head = el('h3', null, h.title);
  head.id = 'term-title-' + h.id;
  term.appendChild(head);
  els.panelBody.setAttribute('aria-labelledby', head.id);
  els.panelTitle.textContent = h.title;

  if (h.needsContent) {
    const rn = el('div', 'reviewnote');
    const lab = el('div', 'reviewnote__label');
    lab.appendChild(el('span', null, 'Explanation pending'));
    lab.appendChild(el('span', 'badge-pending', 'draft'));
    rn.appendChild(lab);
    rn.appendChild(el('p', null,
      'The wording below is a neutral restatement of what this paragraph covers, not an ' +
      'approved plain-language explanation. It is shown so the term is not missing from the ' +
      'walkthrough, and it is awaiting review.'));
    term.appendChild(rn);
  }

  /* lease language — clearly the document's words, not ours */
  if (h.leaseLanguage) {
    const box = el('div', 'leaselang');
    const lab = el('div', 'leaselang__label');
    lab.appendChild(el('span', null, 'Lease Language'));
    lab.appendChild(el('span', 'tag', 'exact wording'));
    box.appendChild(lab);
    const body = el('blockquote', 'leaselang__body is-clamped');
    richText(body, h.leaseLanguage);
    box.appendChild(body);
    const tog = el('button', 'leaselang__toggle', 'Show the full clause');
    tog.type = 'button';
    tog.addEventListener('click', () => {
      const clamped = body.classList.toggle('is-clamped');
      tog.textContent = clamped ? 'Show the full clause' : 'Show less';
    });
    box.appendChild(tog);
    term.appendChild(box);
  }

  /* read-aloud control — right side, below Lease Language, with a cushion
     before What This Means. Reads only the [data-speak-read] sections. */
  if (h.meaning || (h.definitionTitle && h.definition)
      || (h.definition2Title && h.definition2)
      || h.whyItMatters || h.example || h.importantToKnow) {
    attachSpeak(term, { label: h.title, readSelector: '[data-speak-read]' });
  }

  const block = (label, text) => {
    if (!text) return;
    const b = el('div', 'block');
    b.dataset.speakRead = '1';
    b.appendChild(el('div', 'block__label', label));
    b.appendChild(el('p', null, text));
    term.appendChild(b);
  };

  block('What This Means', h.meaning);

  const keyterm = (t, d) => {
    if (!t || !d) return;
    const k = el('div', 'keyterm');
    k.dataset.speakRead = '1';
    k.appendChild(el('div', 'keyterm__label', 'Key Term'));
    const dl = el('dl');
    dl.appendChild(el('dt', null, t));
    dl.appendChild(el('dd', null, d));
    k.appendChild(dl);
    term.appendChild(k);
  };
  keyterm(h.definitionTitle, h.definition);
  keyterm(h.definition2Title, h.definition2);

  block('Why It Matters', h.whyItMatters);
  block('Example', h.example);

  if (h.importantToKnow) {
    const c = el('div', 'callout');
    c.dataset.speakRead = '1';
    const lab = el('div', 'callout__label');
    lab.appendChild(el('span', null, 'Important to Know'));
    c.appendChild(lab);
    c.appendChild(el('p', null, h.importantToKnow));
    term.appendChild(c);
  }

  if (h.contentFlag && h.flagNote) {
    const c = el('div', 'callout');
    const lab = el('div', 'callout__label');
    lab.appendChild(el('span', null,
      h.contentFlag === 'conflict' ? 'Flagged — source conflict' : 'Flagged — needs confirmation'));
    c.appendChild(lab);
    c.appendChild(el('p', null, h.flagNote));
    term.appendChild(c);
  }

  if (h.crossRef && h.crossRef.length) {
    const x = el('div', 'xrefs');
    x.appendChild(el('div', 'xrefs__label', 'See also'));
    const ul = el('ul');
    h.crossRef.forEach((cr) => {
      const li = el('li');
      const b = el('button', 'xref', cr.label);
      b.type = 'button';
      b.addEventListener('click', () => gotoHotspot(cr.page, cr.hotspot));
      li.appendChild(b);
      ul.appendChild(li);
    });
    x.appendChild(ul);
    term.appendChild(x);
  }

  if (h.source) term.appendChild(el('div', 'provenance', 'Source: ' + h.source));

  p.appendChild(term);
}

/* =========================================================================
   guided mode
   ========================================================================= */
function currentTermIndex() {
  const id = state.lockedId;
  if (!id) return -1;
  return hotspots().findIndex((h) => h.id === id);
}

function stepTerm(delta) {
  const list = hotspots();
  let i = currentTermIndex();
  i = i < 0 ? (delta > 0 ? 0 : list.length - 1) : clamp(i + delta, 0, list.length - 1);
  setLocked(list[i].id, { moveFocus: true });
}

function syncGuided() {
  const list = hotspots();
  const i = currentTermIndex();
  els.termCount.textContent = i < 0
    ? `${list.length} terms on this page`
    : `Term ${i + 1} of ${list.length}`;
  els.prevTerm.disabled = i <= 0;
  els.nextTerm.disabled = i >= list.length - 1;
  if (els.prevTermPill) els.prevTermPill.disabled = i <= 0;
  if (els.nextTermPill) els.nextTermPill.disabled = i >= list.length - 1;
}

/* =========================================================================
   navigation
   ========================================================================= */
function showView(v) {
  stopSpeech();                         // never carry speech across a page change
  state.view = v;
  els.intro.hidden = v !== 'intro';
  els.leaseScreen.hidden = v !== 'page';
  els.summary.hidden = v !== 'summary';
  els.keyTerms.hidden = v !== 'keyterms';
  els.thanks.hidden = v !== 'thanks';
  els.progressChip.hidden = v !== 'page';
  updateProgress();
}

function goToPage(i, { focusHeading = true } = {}) {
  state.pageIndex = clamp(i, 0, LEASE.length - 1);
  state.lockedId = null;
  state.previewId = null;
  state.fullPage = false;
  showView('page');
  renderPageHead();
  buildDocument();
  syncDocument();
  renderPanel();
  closeSections();
  if (focusHeading) {
    els.pageHeading.focus({ preventScroll: false });
    announce(`Page ${page().page} of ${LEASE.length}. ${page().category}. ${page().pageTitle}.`);
  }
}

function gotoHotspot(pageNo, hotspotId) {
  const idx = LEASE.findIndex((p) => p.page === pageNo);
  if (idx < 0) return;
  if (idx !== state.pageIndex) goToPage(idx, { focusHeading: false });
  setLocked(hotspotId, { moveFocus: true });
  announce(`Moved to ${findHotspot(hotspotId)?.title} on page ${pageNo}.`);
}

function renderPageHead() {
  const p = page();
  els.pageCat.textContent = p.category;
  els.pageHeading.textContent = p.pageTitle;
  els.pageMeta.textContent =
    `Page ${p.page} of ${LEASE.length} · ${p.hotspots.length} explained terms`;
  els.pageCount.textContent = `Page ${p.page} of ${LEASE.length}`;
  els.prevPage.disabled = state.pageIndex === 0;
  els.nextPage.textContent = state.pageIndex === LEASE.length - 1 ? 'Finish →' : 'Next Page →';
  els.sectionsList.querySelectorAll('.sections__btn').forEach((b, i) => {
    b.setAttribute('aria-current', i === state.pageIndex ? 'true' : 'false');
  });
  updateProgress();
}

function updateProgress() {
  const done = state.view === 'summary' ? LEASE.length : state.pageIndex + 1;
  els.progressFill.style.width = (done / LEASE.length) * 100 + '%';
  els.progressText.textContent = `${done} of ${LEASE.length} pages`;
}

function announce(msg) { els.announcer.textContent = msg; }

/* ---- sections menu ---- */
function openSections() {
  els.sectionsList.hidden = false;
  els.sectionsBtn.setAttribute('aria-expanded', 'true');
  els.sectionsList.querySelector('.sections__btn')?.focus();
}
function closeSections({ refocus = false } = {}) {
  els.sectionsList.hidden = true;
  els.sectionsBtn.setAttribute('aria-expanded', 'false');
  if (refocus) els.sectionsBtn.focus();
}

/* =========================================================================
   text alternative
   ========================================================================= */
async function openText() {
  const p = page();
  els.textDlgTitle.textContent = `Page ${p.page} of ${LEASE.length} as text — ${p.pageTitle}`;
  els.textDlgBody.textContent = 'Loading…';
  if (!els.textDlg.open) els.textDlg.showModal();

  if (p.pageText) { els.textDlgBody.textContent = p.pageText; return; }
  if (cachedText.has(p.page)) { els.textDlgBody.textContent = cachedText.get(p.page); return; }
  try {
    const res = await fetch(p.pageTextUrl);
    if (!res.ok) throw new Error(res.status);
    const t = await res.text();
    cachedText.set(p.page, t);
    els.textDlgBody.textContent = t;
  } catch {
    els.textDlgBody.textContent =
      'The text version could not be loaded in this context. It is available at:\n\n' +
      p.pageTextUrl;
  }
}

/* =========================================================================
   static screens
   ========================================================================= */
function renderKeyTerms() {
  const host = els.keyTermsBody;
  host.textContent = '';
  KEY_TERMS.groups.forEach((group) => {
    const g = el('section', 'ktgroup' + (group.numbered ? ' precard--num' : ''));
    g.appendChild(el('h2', null, group.title));
    g.appendChild(el('p', 'precard__note', group.note));
    const list = el(group.numbered ? 'ol' : 'ul');
    group.items.forEach(([t, d]) => {
      const li = el('li');
      li.appendChild(el('b', null, t));
      li.appendChild(el('span', null, d));
      list.appendChild(li);
    });
    g.appendChild(list);
    host.appendChild(g);
  });
}

function renderSummary() {
  const host = els.summaryGrid;
  host.textContent = '';
  SUMMARY.forEach((cat) => {
    const c = el('section', 'sumcard');
    c.appendChild(el('h2', null, cat.title));
    const dl = el('dl');
    cat.items.forEach(([t, d]) => {
      dl.appendChild(el('dt', null, t));
      dl.appendChild(el('dd', null, d));
    });
    c.appendChild(dl);
    host.appendChild(c);
  });
}

function renderSections() {
  const host = els.sectionsList;
  host.textContent = '';
  LEASE.forEach((p, i) => {
    const li = el('li', 'sections__item');
    const b = el('button', 'sections__btn');
    b.type = 'button';
    b.appendChild(el('span', 'sections__n', String(p.page)));
    b.appendChild(el('span', 'sections__cat', p.category));
    b.appendChild(el('span', 'sections__title', p.pageTitle));
    b.appendChild(el('span', 'sections__count', `${p.hotspots.length} terms`));
    b.addEventListener('click', () => { goToPage(i); closeSections(); });
    li.appendChild(b);
    host.appendChild(li);
  });
}

/* =========================================================================
   wiring
   ========================================================================= */
function cache() {
  const ids = [
    'intro', 'leaseScreen', 'summary', 'viewer', 'doc', 'docImg', 'hsLayer', 'hsGroup',
    'panel', 'panelBody', 'panelTitle', 'pageCat', 'pageHeading', 'pageMeta', 'pageCount',
    'prevPage', 'nextPage', 'prevTerm', 'nextTerm', 'prevTermPill', 'nextTermPill', 'termCount', 'fullPageBtn',
    'sectionsBtn', 'sectionsList', 'progressChip', 'progressFill', 'progressText',
    'announcer', 'zoomState', 'textDlg', 'textDlgTitle', 'textDlgBody', 'textBtn',
    'startBtn', 'reviewBtn', 'reviewBtn2', 'summaryGrid', 'introBtn',
    'keyTerms', 'keyTermsBody', 'ktBtn', 'ktBackBtn',
    'thanks', 'thanksBack', 'thanksHome', 'thanksNext',
  ];
  ids.forEach((id) => { els[id] = document.getElementById(id); });
  els.hsGroup = els.hsLayer;      // the hotspot layer *is* the labelled group
}

function wireDocument() {
  els.hsLayer.addEventListener('pointerover', (e) => {
    const b = e.target.closest('.hs');
    if (!b || isTouch.matches) return;
    clearTimeout(hoverTimer);
    const id = b.dataset.hs;
    hoverTimer = setTimeout(() => setPreview(id), HOVER_INTENT);
  });

  els.hsLayer.addEventListener('pointerout', (e) => {
    const b = e.target.closest('.hs');
    if (!b || isTouch.matches) return;
    if (e.relatedTarget && e.relatedTarget.closest?.('.hs') === b) return;
    clearTimeout(hoverTimer);
    clearPreview();
  });

  els.viewer.addEventListener('pointerleave', () => {
    if (isTouch.matches) return;
    clearTimeout(hoverTimer);
    clearPreview();
  });

  els.hsLayer.addEventListener('click', (e) => {
    const b = e.target.closest('.hs');
    if (!b) return;
    clearTimeout(hoverTimer);
    const id = b.dataset.hs;
    setLocked(state.lockedId === id && !state.fullPage ? null : id);
  });

  // focus follows the same rules as hover, but never moves the page under
  // a keyboard user unless they select
  els.hsLayer.addEventListener('focusin', (e) => {
    const b = e.target.closest('.hs');
    if (!b || b.dataset.primary !== '1') return;
    if (b.dataset.hs !== state.lockedId) setPreview(b.dataset.hs);
  });
  els.hsLayer.addEventListener('focusout', (e) => {
    if (els.hsLayer.contains(e.relatedTarget)) return;
    clearPreview();
  });

  // Space must select, not scroll
  els.hsLayer.addEventListener('keydown', (e) => {
    const b = e.target.closest('.hs');
    if (!b) return;
    if (e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); b.click(); }
  });
}

function wireControls() {
  els.startBtn.addEventListener('click', () => goToPage(0));
  els.introBtn.addEventListener('click', () => { showView('intro'); els.introBtn.blur(); });
  els.reviewBtn.addEventListener('click', () => goToPage(0));
  els.reviewBtn2.addEventListener('click', () => {
    showView('thanks');
    els.thanks.querySelector('h1').focus({ preventScroll: false });
  });
  els.ktBtn.addEventListener('click', () => {
    showView('keyterms');
    els.keyTerms.querySelector('h1').focus({ preventScroll: false });
    announce('Key Terms to Know.');
  });
  els.thanksBack.addEventListener('click', () => {
    showView('keyterms');
    els.keyTerms.querySelector('h1').focus({ preventScroll: false });
  });
  els.thanksHome.addEventListener('click', () => {
    showView('intro');
  });
  els.ktBackBtn.addEventListener('click', () => {
    showView('summary');
    els.summary.querySelector('h1').focus({ preventScroll: false });
  });

  els.prevPage.addEventListener('click', () => goToPage(state.pageIndex - 1));
  els.nextPage.addEventListener('click', () => {
    if (state.pageIndex === LEASE.length - 1) {
      showView('summary');
      els.summary.querySelector('h1').focus({ preventScroll: false });
      announce('Summary. Review Lease Again returns to page 1.');
    } else goToPage(state.pageIndex + 1);
  });

  els.prevTerm.addEventListener('click', () => stepTerm(-1));
  els.nextTerm.addEventListener('click', () => stepTerm(1));
  if (els.prevTermPill) els.prevTermPill.addEventListener('click', () => stepTerm(-1));
  if (els.nextTermPill) els.nextTermPill.addEventListener('click', () => stepTerm(1));
  els.fullPageBtn.addEventListener('click', () => {
    viewFullPage();
    announce('Document returned to full page. The explanation stays on screen.');
  });
  els.textBtn.addEventListener('click', openText);
  els.textDlg.addEventListener('click', (e) => { if (e.target === els.textDlg) els.textDlg.close(); });

  els.sectionsBtn.addEventListener('click', () => {
    els.sectionsList.hidden ? openSections() : closeSections({ refocus: true });
  });
  document.addEventListener('click', (e) => {
    if (els.sectionsList.hidden) return;
    if (!e.target.closest('.sections')) closeSections();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') stopSpeech({ notify: true });
    if (e.key === 'Escape' && !els.sectionsList.hidden) { closeSections({ refocus: true }); return; }
    if (state.view !== 'page') return;
    if (e.target.closest('input, textarea, dialog')) return;
    if (e.key === 'Escape') { viewFullPage(); return; }
    if (e.altKey || e.metaKey || e.ctrlKey) return;
    if (e.key === 'ArrowRight' && e.shiftKey) { e.preventDefault(); goToPage(state.pageIndex + 1); }
    else if (e.key === 'ArrowLeft' && e.shiftKey) { e.preventDefault(); goToPage(state.pageIndex - 1); }
  });

  window.addEventListener('pagehide', () => stopSpeech());

  let rt = null;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => applyTransform(activeId() ? findHotspot(activeId()) : null), 120);
  });
  reduceMotion.addEventListener?.('change', () => syncDocument());
}

function init() {
  cache();
  renderSummary();
  renderKeyTerms();
  renderSections();
  wireDocument();
  wireControls();
  renderPageHead();
  showView('intro');
  fitDoc();
  new ResizeObserver(() => {
    fitDoc();
    applyTransform(activeId() ? findHotspot(activeId()) : null);
  }).observe(els.viewer);
  els.docImg.addEventListener('load', () => applyTransform(activeId() ? findHotspot(activeId()) : null));
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
