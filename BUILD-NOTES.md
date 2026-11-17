# Build Notes — Interactive Residential Lease Explainer

Built against BUILD INSTRUCTION v2. Everything below reports results rather than asserting them.

---

## 1. Answers to §1 — confirm before building

### 1.1 Higher-resolution source — **the premise was wrong, in your favour**

The nine pages you attached are **not** 868 × 1400. They are already high-resolution renders:

| Page | Native size | DPI |
|---|---|---|
| 1 | 2584 × 4256 | 304 |
| 2–8 | 1700 × 2800 | 200 |
| 9 | 1318 × 2170 | 155 |

That is at or above the 200 DPI target §1.1 asked for, so **no vector PDF is needed** and no
2× upscale-before-editing was performed. All nine pages were normalised to a single
**1700 × 2800 @ 200 DPI** geometry (page 1 downsampled from 304 DPI with Lanczos, page 9
upsampled from 155 DPI — page 9 is the sparsest page, so this costs little).

Effective native-pixel ratio when zoomed: at a 1440 × 900 desktop the fitted sheet renders
417 × 686 CSS px, which is 0.245 of native. At the working zoom range of 1.6×–2.4× that is
**0.39×–0.59× of native pixels** — i.e. the 8 pt two-column body text is being downsampled, not
upsampled, at every zoom level the app uses. Zoomed legibility is **not** capped by the source.
Sampled crops were checked visually at 2× and the body text is crisp.

### 1.2 Zoom reference frame — implemented as specified

Zoom is a multiple of the fit-to-page scale. `js/app.js` computes

```
zoom = clamp(0.55 * viewerHeight / (focusRect.height/100 * renderedPageHeight), 1.6, 2.4)
```

with a per-hotspot `zoom` override (every hotspot carries one, taken from your content map,
and it is clamped to the same 1.6–2.4 window). Verified: all 49 hotspots resolve inside the
window; measured values run 1.60×–2.20×.

### 1.3 The WIL / lease conflict on lease assignment — **not reconciled**

The panel for **Replacements and Subletting (¶31)** renders the lease text. `WIL_w.docx`'s
"no further obligations" definition is *not* presented as the operative rule. The hotspot carries
`contentFlag: "conflict"` and a visible flag callout in the panel stating the discrepancy and that
it needs your decision. Listed in §5 below.

### 1.4 Sanitization method — pixel edits baked in, OCR-verified

As specified. No front-end masking anywhere. Full detail in §3.

### 1.5 NAA form licensing

The `© 2025, National Apartment Association, Inc.` line, the `Georgia/National Apartment
Association Official Form, July 2025` name and the `Page N of 9` marks are **intact and
unaltered on all nine pages** — no edit region came within 2,000 px of any footer. Verified by
OCR (§3).

> **For your legal review before any external or public deployment:** reproducing all nine pages
> of a copyrighted NAA form inside a distributed web application is a licensing question separate
> from privacy. Please confirm the scope of use with legal. Built for internal use. No legal
> opinion offered here.

### 1.6 Delivery format — both produced

* `index.html` + `css/` + `js/` + `assets/` — the primary deliverable.
* `index-standalone.html` — 1.63 MB, images and page text inlined, opens straight off disk with
  no server. Verified end to end offline: all nine images decode, all hotspots work, the
  text-alternative dialog works.

---

## 2. Corrections to your content map

Four things in the map did not survive contact with the document. All are improvements, not
omissions.

1. **`I3500` is resolved.** You confirmed it refers to point 29 on page 5 — ¶29 **When We May
   Enter**. Hotspot 4.3 (Release of Resident) therefore has **no** `contentFlag`, and the
   reference is noted on hotspot 5.5 instead. Your map's flag count of 6 drops to **5**.

2. **`needsContent` count is 16, not 18.** Counting the map's own entries (1.5, 2.1, 2.2, 2.3,
   3.1, 3.2, 3.4, 3.5, 4.4, 4.5, 5.1, 6.5, 7.3, 7.4, 8.6, 9.2) gives 16. The map's totals table
   said 18; the arithmetic was off by two. Nothing was dropped.

3. **Hotspot 6.5 was retitled** from "Holdover and Mitigation" to **"Holdover, Other Remedies,
   and Mitigation"**, because the right column of page 6 also carries *Other Remedies* and
   *Remedies Cumulative* between them, and the rectangle has to cover the whole block.

4. **The schema gained a `rects` array** (see §4). Your original `hotspot: {x,y,width,height}`
   assumed one rectangle per term. In this two-column form, 13 of the 49 provisions run from the
   foot of one column into the head of the next — ¶4, ¶8, ¶19+20, ¶24, ¶27, ¶31, ¶33, ¶46, ¶49,
   ¶54 and others. A single bounding box for those would have highlighted a large block of
   unrelated lease text, which breaks priority #3. Each hotspot now carries one or more rects;
   all are highlighted, and the largest is what the viewer zooms to.

Everything else in the map is built as written: 9 pages, **49 hotspots**, 62 rectangles, the same
titles, the same field content, the same page categories.

---

## 3. Sanitization — pipeline and verification results

**Method.** Every real value was located by OCR word-boxes plus ruled-line detection, painted out
in the paper colour, and the fictional value redrawn in **FreeMono Bold at 28 px** — matched to the
original typewriter fill by measuring its advance width (16.8 px/char) and ascender height (18 px)
against the source. Ruled lines under each field were detected and restored exactly, only where a
rule genuinely existed. Blank fields listed in §2 of your brief were filled with the same technique.

**What changed, by page.**

| Page | Edits | What |
|---|---|---|
| 1 | 25 | Lease date; owner LLC; street, city, ZIP; bank name and address; plus the blanks: resident names, occupant, unit no., term dates, deposit, monthly rent, prorated rent and its due date |
| 2 | 1 | ¶11 reletting charge blank filled |
| 3–8 | 0 | No identifying fill-ins on these pages |
| 9 | 13 | Both management name/address blocks, GREC licence, and the managing-agent block (name, address, city/ZIP, phone) |

Signature lines are **left blank** — no signatures or signature dates were fabricated.
Values deliberately left unchanged, per your brief: the 3-day guest limit, 60-day renewal notice,
2 apartment / 2 mailbox keys, the 3rd-day late trigger, the 10% late charge, the $50.00 returned-check
charge, the checked personal-liability-insurance box, and the typed Special Provision on page 2.

**Encoding.** Lossless WebP. Lossy WebP was rejected: at quality 90 the dense two-column text
came to 948 KB per page with visible ringing, while lossless is 88–220 KB and pixel-exact. Page 1
also got a mild tone quantisation (levels + 16-step, pure white preserved) because it came from a
304 DPI source whose anti-aliasing noise compressed badly — 611 KB → 220 KB with no loss of
legibility. All metadata stripped; verified no `EXIF`, `XMP` or `ICCP` chunk exists in any shipped
file. Original `page_uuid` filenames discarded.

### §4.7 OCR sweep — result: **PASS, zero original identifying strings survive**

Every shipped `.webp` was re-OCR'd and searched. All 13 string families absent from all 9 assets:

```
pass  community name (Calibre Creek)     pass  management ZIP (30326)
pass  street address                     pass  phone (770 642-1661)
pass  city (Roswell)                     pass  GREC license (64766)
pass  ZIP (30076)                        pass  bank name (JP Morgan Chase)
pass  owner LLC                          pass  bank address (Indianapolis / 46204)
pass  management co (Cortland)           pass  original lease date (July 9)
pass  management street (3424 Peachtree)
```

The fictional replacements were confirmed *present* and consistent — `Oakridge` on pages 1 and 9,
`Marietta` on 1 and 9, `30060` on 1 and 9, `30328` on 1 and 9, `Meridian` / `Willow Bend` /
`555-0134` / `000000` on 9, and the resident, deposit, rent and date values on page 1. One dataset,
used everywhere.

### §9.2 NAA footer — result: **PASS on all nine pages**

`national apartment association`, `2025`, `Georgia` and `Page N of 9` all detected on every page.

---

## 4. Architecture

```
index.html              markup and screens only
index-standalone.html   generated — single-file preview build
build-standalone.py     regenerates the above from the multi-file project
css/styles.css
js/lease-data.js        ALL content: 9 pages, 49 hotspots, fiction map, intro cards, summary
js/app.js               ALL behaviour; contains no lease copy
assets/lease-page-NN-sanitized.webp
assets/text/lease-page-NN.txt        verbatim text alternative, one per page
```

Adding a page or a term means editing `js/lease-data.js` only. Per-hotspot schema:

```js
{
  id, paragraphRef, title,
  leaseLanguage,                      // verbatim only, never paraphrased
  meaning, definitionTitle, definition, definition2Title, definition2,
  whyItMatters, example, importantToKnow,
  crossRef: [{ page, hotspot, label }],
  source,                             // provenance, for auditing
  needsContent: false,
  contentFlag: null,                  // "conflict" | "ambiguous" | null
  flagNote,                           // shown in the panel when contentFlag is set
  rects: [{ x, y, width, height }],   // percentages of the 1700x2800 original
  zoom: 1.8
}
```

Unused fields are omitted rather than padded. Coordinates were measured against the sanitized
renders, not estimated — the brief's provisional column geometry was not carried into production
data.

**Interaction**, as specified in §5: transform-based zoom on an inner wrapper; translation clamped
so a page edge is never pulled inside the viewer; 120 ms hover intent; locked selection outranks
hover and a hover preview never clears a lock; 280 ms `cubic-bezier(0.4, 0, 0.2, 1)` on transform
only. Hotspots at rest are a 1 px hairline underline; on hover/focus/selection they take an 11%
multiply tint, a 2 px outline and a 4 px left edge marker — three cues, so nothing is carried by
colour alone. Unrelated hotspot *indicators* fade to 40%; **no scrim is ever laid over the
document.**

---

## 5. Flagged items — for your decision before launch

These are surfaced, not harmonised. Each appears in its panel with a visible flag callout.

| # | Where | The conflict |
|---|---|---|
| 1 | **6.2 Replacements and Subletting (¶31)** — `conflict` | `WIL_w.docx` says the original resident has "no further obligations" after a transfer. ¶31(3) and *Procedures for Replacement* both say the departing resident remains liable for the rest of the original term even if a new lease is signed. **Panel renders the lease text.** |
| 2 | **8.3 Move-Out Inspection (¶49)** — `ambiguous` | WIL: "three (3) days" after move-out, and a *Service Manager* takes pictures. ¶49: "within 3 business days", no role named. |
| 3 | **8.5 Deposit Return (¶51)** — `ambiguous` | WIL ties the 30 days to the move-out date. ¶49 and ¶51 tie it to when the owner obtains possession or accepts surrender. |
| 4 | **7.5 Move-Out Notice (¶46)** — `ambiguous` | WIL defines "notice to vacate" as resident-to-landlord only. The lease also uses it landlord-to-resident (¶33, ¶42). |
| 5 | **6.4 Default by Resident and Eviction (¶33)** — `ambiguous` | WIL calls eviction the process that "terminates the lease early". ¶33 says possession rights end while liability for future rent continues. |

**Resolved:** `I3500` — you confirmed it is point 29 on page 5 (¶29 When We May Enter). Noted on
hotspot 5.5; hotspot 4.3 is no longer flagged.

## 6. Terms awaiting your copy — 16 `needsContent` hotspots

Each renders its verbatim lease language plus a neutral restatement of what the paragraph covers,
under a visible **"Explanation pending — draft"** state. Nothing was invented.

p1 ¶5 Keys · p2 ¶7cont Utility restrictions, ¶8 Insurance, ¶9 Locks · p3 ¶13cont Property left
behind, ¶14 First month's rent, ¶16 Delay of occupancy, ¶17 Additional rent · p4 ¶24 Military
transfer, ¶25 Resident safety · p5 ¶25cont Crime or emergency · p6 ¶33 Holdover and mitigation ·
p7 ¶42 Obligation to vacate, ¶44 Payments · p8 ¶51 Surrender and abandonment · p9 ¶54 Managing
agent licence

Two need a decision as well as copy: **¶8 Insurance** — confirm whether the *incurable breach*
language should be surfaced to residents; **¶16 Delay of Occupancy** — the two different
termination windows (3 days / 7 days) need careful plain-language handling.

Note also that **¶12 (Reimbursement)** and **¶18 (Disclosure Rights)** have no hotspot, because your
map did not include them. Say the word and they are two data entries.

---

## 7. §9 verification checklist — results

| # | Check | Result |
|---|---|---|
| 1 | OCR sweep of shipped assets | **PASS** — 0 of 13 original identifying string families present |
| 2 | NAA footer intact, all nine pages | **PASS** |
| 3 | Nothing overlaps lease text at any zoom or breakpoint | **PASS** — swept all 49 hotspots at their zoom; no element outside the viewer intersects the document area; tint measured at 0.11 alpha, `mix-blend-mode: multiply` |
| 4 | Every hotspot resolves to the correct explanation | **PASS** — 49/49, each with exactly one `aria-pressed="true"`, and all 62 rects highlighted together |
| 5 | Keyboard-only walkthrough | **PASS** — Enter on Start moves focus to the page heading; hotspots reachable by Tab; Space selects and sets `aria-pressed`; 3 px focus ring never suppressed; Next Term walks 1→7 and stops; page change moves focus to the heading and announces *"Page 2 of 9. Insurance & Special Terms…"* |
| 6 | Reduced motion | **PASS** — transition duration 0 s; hover highlights with **no** page movement; click still zooms, instantly |
| 7 | Breakpoints 1440 / 1024 / 768 / 390 | **PASS** — 65/35 at 1440 (890.5 px / 479.5 px), 55/45 at 1024 (533.5 / 436.5), stacked below 860; whole sheet fits the viewer at every width; minimum effective tap target **44 px** on coarse pointers with percentage geometry preserved |
| 8 | Payload | see below |

Also verified: hover/lock precedence, View Full Page (resets zoom, keeps the explanation),
cross-reference navigation across pages, the text-alternative dialog, and zero console or page
errors across a full nine-page sweep.

**One defect found and fixed during verification:** on mobile the page-navigation bar was
`position: sticky` and floated on top of the lease image — a direct violation of the central
principle. It is now static, and the mobile stack is ordered screenshot → explanation → navigation.

### Payload

| | Size |
|---|---|
| Page images, 9 total | **1,099 KB** (88.1–219.6 KB each; all under the 400 KB target) |
| Text alternatives, 9 total | 76 KB |
| HTML + CSS + JS | 140 KB |
| **First paint** (shell + page 1) | **360 KB** |
| Full project | 1,315 KB |
| Standalone single file | 1.63 MB |

The next page image is preloaded on every page change. No JavaScript libraries — native
HTML/CSS/JS throughout.

---

## 8. Accessibility

* Every page ships a verbatim text alternative reachable from a persistent **"Read this page as
  text"** control — a hard requirement, not an enhancement. **Caveat worth your attention:** these
  transcriptions are produced by OCR of the sanitized images, in correct reading order
  (left column, then right). They will contain recognition errors. Each file says so at the top and
  states that the lease image is the source document. If you have access to the original text layer,
  dropping it into `assets/text/` would be a straight upgrade — the app just reads those files.
* Hotspots are real `<button>` elements in a labelled group, `aria-pressed` reflects lock state, and
  accessible names read *"Monthly Rent — lease explanation, paragraph 6"*. Column-spanning
  provisions add *"This provision continues in 2 parts of the page"*; the continuation fragment is
  clickable but is not a second tab stop.
* The panel is `aria-live="polite"` and `aria-labelledby` the active hotspot title. Focus does not
  jump to the panel on selection.
* Focus ring: 3 px `#9a3412` — **7.31:1** against paper white and **6.12:1** against the selection
  tint, both well over the 3:1 requirement, and deliberately a different hue from the selection
  colour so the two signals never read as the same thing.
* All interface text measured at **4.5:1 or better** (21 samples, range 4.64:1 – 17.11:1).
* State and meaning are never carried by colour alone.

---

## 9. Regenerating

```bash
python3 build-standalone.py      # rebuilds index-standalone.html from the project
```

Serve the multi-file build over HTTP (it uses ES modules and `fetch` for the text alternatives);
`index-standalone.html` needs no server.

---

# 10. Merge from Claude Design — what came back, what was fixed

The project was redesigned in Claude Design and returned as a handoff bundle. The bundle happened to
contain the original repo verbatim under `uploads/lease-explainer-github_1/`, which gave an exact
baseline to diff against rather than having to guess at intent.

## 10.1 What survived intact — verified, not assumed

| | Result |
|---|---|
| Hotspot geometry | **62 rects across 49 hotspots, byte-identical.** No rect moved, no zoom value changed |
| Sanitized page images | **All 9 identical** to the OCR-verified originals (md5) |
| Text alternatives | **All 9 identical** |
| Fictionalization map | **`FICTION` identical** — one dataset, still the single source of truth |
| Hotspot ids | None added, none removed |
| Repo plumbing | `.nojekyll`, `.gitignore`, `.gitattributes` all preserved |

So the sanitization work and the interaction model came through untouched. The privacy verification
in §3 still stands on the same bytes.

## 10.2 What the redesign added — kept

* **Cortland branding.** Navy `#002D72` / green `#A9C23F` palette, TT Norms webfonts, the footer
  logo, the Resident Experience badge and the page-nav mark.
* **Restructured intro** — the head and the three how-to steps become separate cards, with a single
  prominent `START →`.
* **A fifth screen: Key Terms to Know.** The two reference cards (the ten essential clauses and the
  four lease types) moved off the intro into their own screen reached from the summary. `INTRO_CARDS`
  became `KEY_TERMS` with a `groups` array; `js/app.js` was updated consistently.
* **Term pills** in the page navigation, a `panel--idle` resting state, and a page footer.
* **`¶` spelled out as “Paragraph”.** A genuine improvement — a pilcrow read aloud by a screen
  reader is noise, and the glyph does not survive every editing tool.

## 10.3 What was broken and has been fixed

**1. The three required intro notices had been deleted.** The privacy / fictionalization notice, the
educational disclaimer (*“does not replace the lease itself or legal advice… the lease controls”*)
and the NAA form notice were all removed from `index.html`, and `renderIntro()` — the function that
populated the privacy notice from `FICTION` — was deleted from `js/app.js`. `FICTION` was no longer
even imported. On a resident-facing guide to a legal document this is the most serious of the
regressions. **Restored** as a third intro card, with the privacy text still generated from
`FICTION` so the disclaimer can never drift out of step with the values actually baked into the
images. The `.notice` CSS had survived, so it styles correctly against the new design.

**2. A factual inversion in the utilities copy.** Page 2 read *“This restricts the landlord from
disconnecting utilities before the lease term ends.”* Paragraph 7 restricts the **resident** — *“You
must not allow utilities … to be disconnected for any reason.”* **Corrected**, keeping the plainer
voice of the rewrite.

**3. A dropped lease fact.** Page 1 *Utilities → Why it matters* had been replaced with *“All parties
need to be made known who is responsible for utilities”*, losing Paragraph 7's actual provision.
**Restored** alongside the new framing.

**4. The `¶` substitution was applied inconsistently.** 103 fields had the glyph simply deleted
rather than replaced, leaving bare numbers: every `paragraphRef` (`"¶6"` → `"6"`), every `source`
(`"Lease ¶6"` → `"Lease 6"`), and stragglers in prose and in the summary (*“capped by 11”*, *“from 26
… under 50”*, *“Lease 49 and 51 tie it”*, *“required under 27, 37 and 46”*). **Normalized** — 49
paragraphRefs, 48 sources, 2 prose fields and 2 summary items — to `Paragraph N` / `Paragraphs N & M`.
The `aria-label` builder was emitting *“paragraph Paragraph 6”* as a result; also fixed.

**5. Contrast regressions.** Seven genuine WCAG AA failures, from two hard-coded values:
`#8a8a8a` on white (3.45:1) for the page meta, category, page count, progress chip and footer
caption; and white on brand teal `#0092BD` (3.59:1) for the paragraph badge. Fixed by moving to
`#666666` — Cortland's own `--gray-500`, 5.74:1 — and to brand navy for the badge (12.98:1). The
teal is untouched where it is a border, a tint or the hotspot highlight; only text-on-white uses
were darkened (`.xref:hover` → `#00768f`, 5.27:1). `.sections__cat` went to `--accent-ink` (9.82:1).
**All 29 measured text styles now pass**, range 5.06:1 – 12.98:1.

*Note on method: an initial pass reported nine failures. Four were artifacts of the checker treating
a semi-transparent background as opaque. The checker was fixed to composite every translucent
ancestor down onto white before judging, and only the seven real failures were acted on — no CSS was
changed on the strength of a bad measurement.*

**6. Touch targets had shrunk to 39.6 px.** The redesign applied a uniform 0.9 scale to the
stylesheet, which caught the `min-height: 44px` in the coarse-pointer rule. **Restored to 44 px.**

**7. The selection tint had crept to 13% alpha.** Spec ceiling is 12%. **Set back to 12%.**

**8. Column proportions had drifted** to ~69/31 on desktop and ~65/35 on tablet. **Restored** to
64/36 and 54/46 — the brief's ~65/35 and ~55/45.

**9. `build-standalone.py` no longer produced a working preview.** It knew nothing about the logo,
the icons or the fonts, and once the CSS is inlined into the document its `../assets/…` font paths no
longer resolve. **Fixed** to inline the brand assets as data URLs too; the standalone is again fully
self-contained and fetches nothing from the network (verified offline over `file://`).

**10. Personal metadata in a brand asset.** `resident-experience-icon-green.png` carried Canva XMP
metadata containing an author name, a Canva doc / user / brand ID and a Facebook ID — which would
have been published with the repo. **All three brand PNGs were re-encoded with metadata stripped**
and capped at ~2× their rendered size: 344 KB → 90 KB. Verified: no `tEXt`/`iTXt`/`zTXt`/`eXIf`
chunk and no author string remains in any of them.

**11. Authoring cruft.** 12 `data-comment-anchor` attributes and one empty `<b aria-hidden="true">`
removed from `index.html`.

## 10.4 Repo hygiene

`uploads/` (~5.9 MB: 24 `draw-*.png` sketches, three mockups, an AdobeStock JPEG under its own
licence, and a second complete copy of this repo) and a `.thumbnail` file were removed. The TT Norms
fonts were duplicated in both `assets/fonts/` and `_ds/…/assets/fonts/`; the `_ds` copy was dropped
and its `tokens/fonts.css` repointed at the canonical pair, saving 285 KB.

## 10.5 Open questions from the merge

1. **Body typeface.** TT Norms carries the headings and UI; body copy still renders in the system
   stack because only Light 300 and Medium 500 were supplied. Worth deciding whether to license
   Regular 400 or accept the current split.
2. **`_ds/` is reference-only** — it is not loaded at runtime and its brand values are already
   resolved into `css/styles.css`. Keep it as documentation or delete it; nothing changes visually.
3. **The accent colour was not fully migrated.** Selection and hotspot highlighting still use the
   original teal `#17566d` / `#0092BD` family rather than Cortland navy or green. That is a defensible
   choice — the highlight has to read against a black-on-white legal document without competing with
   it, and green at ≤12% alpha over dense text is very weak — but it is a brand inconsistency, not an
   accident. Say the word and it can move to navy, and I will re-verify the tint and focus-ring
   contrast against the lease page if it does.
4. **Repo visibility** still determines whether `assets/fonts/` can ship. See README → Fonts and
   licensing.

---

# Addendum — adding the Texas (TAA) lease

Added 17 November 2026. Georgia is unchanged apart from asset paths (`assets/ga/…`) and the
multi-lease wiring.

## Source

TAA Official Statewide Form 25-A/B-1/B-2, revised October 2025. Six pages, legal size
(612 × 1008 pt), vector PDF with a complete text layer. Rendered at 200 DPI to 1700 × 2800 px —
the same geometry the Georgia pages use, so one coordinate system covers both leases.

## Sanitization

The form was **not blank.** Page 1 carried four identifying values for a live property. No other
page carried any.

| Field | Original | Fictional replacement |
|---|---|---|
| Owner | `TX Apt 8205 Towne Main Drive L.P.` | `Bluebonnet Commons Partners, L.P.` |
| Street address | `8205 Towne Main Drive` | `2500 Ridgeline Commons Drive` |
| City | `Plano` | `Frisco` |
| ZIP | `75024` | `75034` |

Method, as for Georgia: each region painted to white above the rule, then redrawn in
LiberationMono-Bold — metrically compatible with the form's embedded CourierNewPS-BoldMT — at
size 27 with a 16.675 px character pitch and the baseline 5 px above the rule, all three values
calibrated against the original ink (digit height 18 px, five-digit span 79 px). Pixel-baked:
nothing is masked in the browser.

Eleven teaching blanks were then filled with the same fictional dataset so the explanations have
concrete values to point at: residents, occupant, apartment number, both term dates, base rent,
prorated rent, deposit, reletting charge, early termination fee. The figures already printed on
the form — 60 days' notice, 10 % late fee, 3rd-day trigger, $75 returned payment, $100/$10 animal
violation, $6 pest control, $6 stormwater billing, $10 trash, $50 utility connection,
$300,000 insurance liability — are form-standard and were left as found.

Proration is deliberately teachable, as on Georgia: the term starts **October 10, 2026**, so the
first payment is **$1,092.96** — 22 days at $49.68 ($1,540.00 ÷ 31), self-consistent so a resident
can check the arithmetic.

## Privacy verification

Run against the PDF's own text layer (8,737 word boxes, all six pages), not OCR, so nothing
depended on recognition quality. **Zero hits** for Social Security numbers, phone/fax/mobile
numbers, email addresses, URLs, driver's licence or ID numbers, dates of birth, bank/routing/account
numbers, card-length digit runs, licence plates and VINs. Resident, occupant, guarantor,
emergency-contact and signature lines are all blank on the form as supplied.

Two numbers surfaced and are **not** identifying: `$300,000.00` is the Required Insurance Liability
limit (a policy term, and worth teaching), and "license" on page 4 is the verb in Paragraph 17
(*"rent, offer to rent or license"*).

Post-sanitization sweep: OCR of all **fifteen** shipped page images across both leases returns zero
hits for `8205`, `Towne`, `Plano`, `75024` and `TX Apt`, and the expected fictional values are
present. All fifteen WebP files carry a single `VP8L` chunk — no `EXIF`, `XMP` or `ICCP`.

The page-1 transcript is generated from the text layer with the same four substitutions applied,
plus an explicitly labelled *Completed fields on this page* block, so the accessible text matches
the shipped image rather than the original PDF.

## Hotspot geometry

Derived from the PDF text layer, not measured by eye.

1. All 85 paragraph markers (32 top-level, 53 sub-paragraphs) located by scanning each column in
   document order and accepting a number only when it is the next one in sequence, starts at the
   column indent, ends in a full stop and is followed by a capitalised word. That rejects
   cross-references such as "Par. 25" that happen to land at a column start — two of which the
   first, naïver pass had wrongly promoted to headings.
2. A hotspot spans from its first marker to the next marker in the same column, trimmed to the ink
   actually inside it, with a 9 px gap so neighbours never touch.
3. A paragraph whose span reaches the foot of the left column continues at the head of the right
   column and contributes a second rect. Paragraph 11.1 on page 3 and Paragraph 18 on page 4 are
   the two that do.
4. Page 1 is a form grid, not numbered paragraphs, so its nine rects were taken from the detected
   red cell borders (`x 100–1599`; dividers at y 860, 1014, 1084, 1417, 1657, 2012, 2361, 2481,
   2611, 2657; verticals at x 501–507, 920–922, 990–992).

Result: **56 hotspots, 63 rects, zero overlaps.** Every page was rendered with its rects drawn over
the image and checked by eye.

One correction to the reviewed content map: Paragraph 26 is a bare heading line with Paragraph 26.1
beginning on the line beneath it, so a separate hotspot for 26 would have been ~34 px tall. The two
are presented together as *Move-Out Procedures and Cleaning*. Page 6 therefore has 8 hotspots, not
9, and the lease has 56, not 57.

## Content

30 hotspots are backed by a supplied WIL glossary entry, used verbatim. 26 carry
`needsContent: true`. 8 carry a `contentFlag`.

Four are `contentFlag: "priority"` — provisions whose consequence is large enough that they should
not be characterised beyond what the paragraph says, without approved copy:

* **15.4 Your Remedies** — cites Texas Property Code §92.056, §92.0561 and §92.0563. The statute
  references are reproduced from the lease and are not paraphrased.
* **23.3 Acceleration of Rent**
* **28 TAA Membership**
* **31.1 Class Action Waiver**

**Paragraph 17 is a deliberate omission.** The WIL glossary entries for *Lease Assignment* and
*Sublease Agreement* describe a transfer route; Paragraph 17 states that you may not assign the
Lease or sublet the apartment. Attaching the WIL definitions here would tell a resident an option
exists that the Lease forbids, so Paragraph 17 carries `contentFlag: "conflict"` and awaits its own
Texas copy. The *Sublease* entry is also removed from the Texas key-terms glossary, with a note
saying why.

**FAS terminology.** The TAA form says *"itemized list of charges"* / *"itemized accounting."* The
panels lead with the lease's own words and name the Cortland term alongside, at Paragraphs 5.1 and
26.2 and in the move-out summary.

Two `contentFlag: "ambiguous"` entries repeat conflicts already flagged on Georgia: the scope of
the WIL *Eviction* entry against Paragraph 23.2, and the WIL *Move-out Inspection* timing (three
days, Service Manager) against Paragraph 26.2, which makes a joint inspection optional and sets no
timing. One is new: the WIL *Lien* entry is attached to Paragraph 27.2 pending confirmation that
this Lease creates a lien at all.

## Cross-lease note

Both leases carry the identical typed special provision — *"Landlord reserves the right to reject
any partial rent payment."* Georgia Paragraph 10, Texas Paragraph 32. The Texas hotspot carries a
`crossRef` to the Georgia one.

## Verification run

* Responsive: 1440, 1024, 820, 744, 390 and 360 px, both leases — the explanation panel never
  overlaps the document viewer, and no horizontal page scroll.
* **Bug found and fixed:** at ≤ 860 px the term pill (`.pagenav__pill--terms`) was drawn over the
  lease image. Making `.pagenav` `position: static` for mobile had left its two absolutely
  positioned children with no positioned ancestor, so they resolved against the viewport. The nav
  is now `position: relative` on mobile (relative is not sticky, so nothing floats) and both
  children are returned to normal flow. This affected the Georgia build as shipped.
* Keyboard: hotspots reachable by Tab with an accessible name, a 3 px focus ring plus a box-shadow,
  and Enter locking the selection.
* `prefers-reduced-motion`: document transition resolves to 0 s, no errors.
* Contrast: every new picker and switcher string measured with all translucent ancestors
  composited onto white — lowest is 4.56:1 against a 4.5 requirement. Selection is never signalled
  by colour alone (the selected card appends "— selected"; the selected switch appends a check).
* No console errors, no failed requests, in the served project or the standalone bundle.

## Standalone bundler

`build-standalone.py` now folds both leases. Two notes:

* The two data modules export the same four names, so each is renamed `GA_*` / `TX_*` on the way
  in and rebound through the registry.
* `js/lease-data.js` ends with a dead `export default LEASE;`. Nothing imports it, but in a single
  module scope that bare identifier collided with `app.js`'s own `let LEASE` and threw
  *"Cannot access 'LEASE' before initialization"*. The bundler strips it. The served project is
  unaffected.

## Still open

The five decisions were answered on 17 November. What remains is copy: **26 Texas
`needsContent` items plus 8 flags**, going to the writer as their own batch, separate from
Georgia's.
