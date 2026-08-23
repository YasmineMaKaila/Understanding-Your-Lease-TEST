# Understanding Your Lease — Interactive Lease Explainer

An interactive, plain-language walkthrough of a nine-page residential apartment lease. The actual
lease page stays on screen as the primary visual; educational explanations appear in a panel
**beside** the document, never on top of it.

Static site. No build step, no dependencies, no JavaScript libraries — plain HTML, CSS and ES modules.

---

## Quick start

```bash
# any static server works; ES modules and fetch() need http(s), not file://
python3 -m http.server 8000
# then open http://localhost:8000
```

Double-clicking `index.html` will **not** work — ES modules and `fetch()` are blocked on `file://`.
You need a server, however trivial.

### Single-file preview build

`build-standalone.py` folds the CSS, the JavaScript, all nine page images and all nine text
transcripts into one self-contained `index-standalone.html` (~1.6 MB) that **does** open straight off
disk by double-clicking — handy for emailing a preview to someone who can't run a server.

```bash
python3 build-standalone.py     # writes index-standalone.html
```

That file is **git-ignored on purpose.** It is a build artifact: base64 data URLs don't diff, so
committing it would add a fresh ~1.6 MB blob to history on every content change. Generate it when
you need it. Never hand-edit it — edit `js/lease-data.js` and rebuild, or your changes are
overwritten.

## Publishing on GitHub Pages

`index.html` is at the repository root, so Pages works with no configuration:

1. Push this repository to GitHub.
2. **Settings → Pages → Build and deployment**
3. Source: **Deploy from a branch** · Branch: `main` · Folder: **`/ (root)`**
4. Save. The site publishes at `https://<user>.github.io/<repo>/`.

A `.nojekyll` file is included so GitHub serves the files as-is rather than running them through
Jekyll.

> Before publishing anywhere public, please read **Licensing and scope of use** below.

---

## Repository layout

```
index.html                  markup and screens only
build-standalone.py         generates index-standalone.html (git-ignored build artifact)
BUILD-NOTES.md              how it was built, verification results, open questions
css/
  styles.css
js/
  lease-data.js             ALL content: 9 pages, 49 terms, fiction map, intro cards, summary
  app.js                    ALL behaviour; contains no lease copy
assets/
  lease-page-01-sanitized.webp  …  lease-page-09-sanitized.webp
  text/
    lease-page-01.txt        …  lease-page-09.txt   (accessible text alternatives)
```

Content and presentation are fully separated. **To add or change a page or a term, edit
`js/lease-data.js` only** — the interface renders from that data.

### Hotspot schema

```js
{
  id, paragraphRef, title,
  leaseLanguage,                      // verbatim only, never paraphrased
  meaning, definitionTitle, definition, definition2Title, definition2,
  whyItMatters, example, importantToKnow,
  crossRef: [{ page, hotspot, label }],
  source,                             // provenance, for auditing
  needsContent: false,                // true → renders an "explanation pending" state
  contentFlag: null,                  // "conflict" | "ambiguous" | null
  flagNote,                           // shown in the panel when contentFlag is set
  rects: [{ x, y, width, height }],   // percentages of the 1700 × 2800 original image
  zoom: 1.8                           // multiple of fit-to-page, clamped to 1.6–2.4
}
```

Coordinates are percentages of the original image, never screen pixels, so hotspots track the page
as it scales. A term may carry **more than one rect**: in this two-column form, 13 of the 49
provisions run from the foot of one column into the head of the next. Every rect is highlighted;
the largest is what the viewer zooms and pans to.

`js/app.js` contains no lease copy at all, so content changes never require touching application
logic. If you keep a single-file preview around, re-run `python3 build-standalone.py` after editing
the data so the two don't drift.

---

## Features

- One lease page at a time, ~65 / 35 document-to-explanation on desktop, ~55 / 45 on tablet,
  stacked screenshot → explanation → navigation on mobile.
- Hover to preview a provision, click to lock it. A locked selection outranks hover; a hover
  preview never clears a lock. **View Full Page** resets the zoom and keeps the explanation.
- Guided mode: Previous Term · *Term X of Y* · Next Term.
- Page navigation, a Lease Sections menu, a progress indicator, and next-page image preloading.
- Fully keyboard accessible. Hotspots are real `<button>`s with `aria-pressed`, accessible names
  like *"Monthly Rent — lease explanation, paragraph 6"*, a 3 px focus ring, and a `aria-live`
  explanation panel. Every page ships a verbatim text alternative behind a **Read this page as
  text** control.
- Respects `prefers-reduced-motion`: zoom and pan apply instantly, hover-driven movement is
  suppressed entirely, and highlights remain.
- No explanation, tooltip, popup or scrim is ever drawn over the lease text.

---

## Privacy

**Every name, address, company, phone number, licence number, bank, date and dollar amount in these
pages is fictional.** The fictional values are **baked into the page image pixels** — the original
information was painted out and replaced before encoding. Nothing is masked, blurred or covered in
the browser, and no original identifying information exists in any file in this repository.

The fictional dataset is one consistent set, used everywhere it occurs:

| | |
|---|---|
| Resident | Jordan Parker (co-resident Alex Rivera, occupant Maya Parker) |
| Community | Oakridge Apartments, 4120 Willow Bend Parkway, Marietta, GA 30060, unit 214 |
| Owner | Oakridge Residential Partners, LLC |
| Management | Meridian Residential Management LLC, 2400 Sterling Park Drive, Suite 450, Atlanta, GA 30328, (770) 555-0134 |
| Term | September 10, 2026 – September 30, 2027 |
| Rent / deposit | $1,675.00 / $500.00 |

Signature lines are intentionally left blank. Image metadata has been stripped. The full
sanitization method and the OCR verification results are in [`BUILD-NOTES.md`](BUILD-NOTES.md).

## Licensing and scope of use

The document reproduced here is the **Georgia / National Apartment Association Official Form,
July 2025**. The `© 2025, National Apartment Association, Inc.` notice, the form name and the page
marks are preserved unaltered on all nine pages.

**Reproducing all nine pages of a copyrighted NAA form in a distributed web application is a
licensing question separate from privacy.** Confirm the scope of use with your legal team before any
external or public deployment. This repository is set up for internal use, and `index.html` carries
`<meta name="robots" content="noindex, nofollow">`.

## Educational disclaimer

This guide is intended to help explain lease terminology. It does not replace the lease itself or
legal advice. If there is a difference between this guide and the lease, the lease controls.

---

## Status

49 of 49 terms are mapped and wired. **16 carry `needsContent: true`** — they show the verbatim
lease language plus a neutral restatement under a visible *"Explanation pending"* state, awaiting
approved plain-language copy. **5 carry a `contentFlag`** where the supplied educational material
and the lease text disagree; each is surfaced in the panel rather than silently reconciled. Both
lists, with the specific conflicts, are in [`BUILD-NOTES.md`](BUILD-NOTES.md).
