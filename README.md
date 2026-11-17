# Understanding Your Lease — Interactive Lease Explainer

An interactive, plain-language walkthrough of a residential apartment lease. The actual lease page
stays on screen as the primary visual; educational explanations appear in a panel **beside** the
document, never on top of it.

**Two leases ship in this repository**, chosen from a picker on the intro screen and switchable at
any time from the masthead:

| | Form | Pages | Explained terms |
|---|---|---|---|
| **Georgia** | Georgia / National Apartment Association Official Form, July 2025 | 9 | 49 |
| **Texas** | TAA Official Statewide Form 25-A/B-1/B-2, revised October 2025 | 6 | 56 |

Deep links work: `?lease=ga` and `?lease=tx`.

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

`build-standalone.py` folds the CSS, the JavaScript, all fifteen page images across both leases,
all fifteen text transcripts, the logo, the icons and the TT Norms webfonts into one self-contained
`index-standalone.html` (~4.3 MB) that **does** open straight off disk by double-clicking — handy for
emailing a preview to someone who can't run a server. Nothing is fetched from the network.

Both lease data modules export the same four names, so the bundler renames them `GA_*` and `TX_*`
on the way in and rebinds them through the same registry `js/leases.js` uses when served.

```bash
python3 build-standalone.py     # writes index-standalone.html
```

That file is **git-ignored on purpose.** It is a build artifact: base64 data URLs don't diff, so
committing it would add a fresh ~1.6 MB blob to history on every content change. Generate it when
you need it. Never hand-edit it — edit the data module and rebuild, or your changes are
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
  styles.css                Cortland-branded; the only stylesheet loaded at runtime
js/
  leases.js                 the lease registry: ids, labels, form names, page/term counts
  lease-data.js             GEORGIA content: 9 pages, 49 terms, fiction map, key terms, summary
  lease-data-tx.js          TEXAS content:   6 pages, 56 terms, fiction map, key terms, summary
  app.js                    ALL behaviour; contains no lease copy
assets/
  ga/
    lease-page-01-sanitized.webp  …  lease-page-09-sanitized.webp
    text/ lease-page-01.txt  …  lease-page-09.txt   (accessible text alternatives)
  tx/
    lease-page-01-sanitized.webp  …  lease-page-06-sanitized.webp
    text/ lease-page-01.txt  …  lease-page-06.txt
  cortland-logo.png         footer mark
  resident-experience-icon.png / -green.png
  fonts/
    TTNorms-Light.otf  TTNorms-Medium.otf      ← see “Fonts and licensing”
_ds/cortland-design-system-…/
                            Cortland design-system reference: brand tokens (colours,
                            type, spacing, motion, shape), readme and manifest.
                            NOT loaded at runtime — the values it documents are already
                            resolved into css/styles.css. Keep it for reference when
                            extending the UI; deleting it changes nothing visually.
```

Content and presentation are fully separated. **To add or change a page or a term, edit that
lease's data module only** — the interface renders from that data. **To add a third lease**, add a
data module exporting `FICTION`, `KEY_TERMS`, `SUMMARY` and `LEASE`, then add one entry to
`js/leases.js`. `app.js` does not change.

Lease provisions are referred to as **“Paragraph 6”**, spelled out, rather than with a `¶` glyph —
in the panel badge, in prose, in `source` provenance and in screen-reader labels (*“Monthly Rent —
lease explanation, Paragraph 6”*). Keep that convention when adding content; a bare number reads
badly out loud and a pilcrow does not survive every editing tool.

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
- Five screens: intro (with the lease picker) → lease pages → summary → **Key Terms to Know**
  (lease vocabulary, reachable from the summary).
- Switching lease reloads the picker state, the privacy notice, the key terms, the summary, the
  sections menu and the document, and returns to page 1.
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

Two copyrighted forms are reproduced here:

* the **Georgia / National Apartment Association Official Form, July 2025** — the
  `© 2025, National Apartment Association, Inc.` notice, the form name and the page marks are
  preserved unaltered on all nine pages;
* the **TAA Official Statewide Form 25-A/B-1/B-2, revised October 2025** — the
  `©2025, Texas Apartment Association, Inc.` footer, the form designation and the page marks are
  preserved unaltered on all six pages, as is the TAA member logo on page 1.

**Reproducing either form in full in a distributed web application is a licensing question separate
from privacy.** Note also that Paragraph 28 of the TAA form concerns association membership.
Confirm the scope of use for both forms with your legal team before any external or public
deployment. This repository is set up for internal use, and `index.html` carries
`<meta name="robots" content="noindex, nofollow">`.

## Fonts and licensing

The interface is set in **TT Norms**, the Cortland brand face. Two weights were supplied — Light 300
and Medium 500 — and they are committed under `assets/fonts/`. Regular 400 and Bold 700 were not
supplied, so the stack falls back through Poppins to the system sans for those weights; body copy
currently renders in the system stack by design, with TT Norms carrying the headings and UI
furniture.

> **TT Norms is a commercial typeface.** Committing the `.otf` files redistributes them. That is
> normally fine inside a **private** repository covered by your licence, and a problem in a public
> one. If this repository is made public, remove `assets/fonts/`, delete the two `@font-face` rules
> at the top of `css/styles.css`, and the type falls back cleanly with no other changes needed.

## Educational disclaimer

This guide is intended to help explain lease terminology. It does not replace the lease itself or
legal advice. If there is a difference between this guide and the lease, the lease controls.

---

## Status

All 105 terms across both leases are mapped and wired.

| | Terms | `needsContent: true` | `contentFlag` |
|---|---|---|---|
| Georgia | 49 | 16 | 5 |
| Texas | 56 | 26 | 8 |

A `needsContent` hotspot shows the verbatim lease language plus a neutral restatement under a
visible *"Explanation pending"* state, awaiting approved plain-language copy. A `contentFlag` marks
a place where the supplied educational material and the lease text disagree, or — on Texas — a
provision whose consequence is large enough that it should not be characterised without approved
copy (`contentFlag: "priority"`). Each is surfaced in the panel rather than silently reconciled.
Both lists, with the specific conflicts, are in [`BUILD-NOTES.md`](BUILD-NOTES.md).

The two leases are approved separately. Georgia's content map is signed off; Texas's is recorded in
the project document *Texas (TAA) Lease — Content Map for Review*.
