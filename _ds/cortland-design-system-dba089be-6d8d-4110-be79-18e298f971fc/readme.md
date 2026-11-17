# Cortland Design System

A design system for **Cortland** — a vertically integrated multifamily real estate company that
develops, designs, builds, owns and manages apartment communities in the US and UK. Cortland's own
framing: *"How do we create a life of everyday delight for our residents? That's the question we
ask — and answer — every day."*

This system covers two things at once:

1. **The Cortland master brand** — the corporate identity used across investor, associate, resident
   and consumer materials (Brand Guidelines v2.2).
2. **The Leasing HUB Center of Excellence (COE)** — an internal Talent Development sub-identity
   with its own navy / gold / light-blue palette and a filled-triangle accent shape, used for
   training and reference material aimed at leasing associates.

## Brand architecture

Cortland is a master brand with sub-brands and endorsed brands:

| Tier | Brands |
| --- | --- |
| Master brand | **Cortland** |
| B2C sub-brands (master as driver) | Cortland *(Location)* communities, **Attiva by Cortland** (55+ active living), **Elevate by Cortland** (resident well-being program) |
| B2B endorsed brands | **Cortland Build**, **Cortland Design**, **Cortland Consult** (UK), **Anthem Management** (UK) |
| Internal / Talent Development | **The Leasing HUB** and the other Centers of Excellence |

Each sub-brand keeps Cortland navy as the dominant color and changes only the accent color. All
sub-brand accents are tokenized in `tokens/colors.css`.

### The Centers of Excellence

The Talent Development team color-codes all learning material by COE so learners can tell at a
glance which part of the business a piece of content belongs to. From the *COE Code Reference Key*
(June 2026):

| COE | Color | Token |
| --- | --- | --- |
| The Leasing Hub | navy `#033D7E` | `--coe-leasing-hub` |
| Screening & Applications | green `#A9C23F` | `--coe-screening` |
| Community Relations | raspberry `#C6007E` | `--coe-community-relations` |
| Resident Services | teal `#0092BD` | `--coe-resident-services` |
| OneSite | orange `#ED7036` | `--coe-onesite` |
| Funnel | magenta `#F532F4` | `--coe-funnel` |

The Leasing HUB's own charter, verbatim from its branding sheet: *"Responsible for connecting with
each lead and creating appointments or online applications over the phone."*

## Sources this system was built from

Everything here is derived from three files the user supplied. No codebase, Figma file or live
product was available, so there is no product-code ground truth for UI components.

- `uploads/Cortland Visual Guidlines Version 2.2.pdf` — 70-page master brand guidelines (brand
  architecture, brand mark, color palettes for every sub-brand, typography, photography, video
  style, brand voice, brand usage). This is the primary source of truth.
- `uploads/The Leasing Hub COE Branding.pdf` — single-sheet Leasing HUB COE identity: main color,
  two secondary accents, TT Norms specimen, "Leasing Hub / @HUB" lockups, and the accent shape
  ("Organic Filled Triangle").
- `uploads/COE Code Reference Key.png` — the Talent Development color-coding key, and the only
  source in the set that contains a rasterized Cortland brand mark. `assets/cortland-logo-*.png`
  and `assets/cortland-icon*.png` were cropped out of it programmatically.
- Cortland's internal Leasing HUB dashboard convention (navy `#033D7D` / gold `#F2BC02` / light blue
  `#73B5FF`, Poppins + Inter fallback, triangle bullet glyphs) is also reflected here, so pages
  built from this system match the dashboards already in circulation.

---

## CONTENT FUNDAMENTALS

**Vibe.** Aspirational but grounded. Cortland writes like a confident host: it has thought of
everything and would rather show it than announce it. Marketing copy leans warm and human; internal
Talent Development copy leans clear and instructional. Nothing is jokey, nothing is breathless.

**Tone words, from the guidelines.** Aspirational, Inspirational, Determined, Competent,
Courageous, Visionary, Self-Expressive. Behavior emphases: Quality, Efficiency, Superiority.

**The three brand-promise behaviors** structure most long-form copy:

- **We create** — "At Cortland, you'll know we've thought of everything." Be creative and
  thoughtful; use a clever, cheerful tone when appropriate.
- **We appreciate** — "At Cortland, you'll never question how important you are to us." Be genuine
  and attentive. Provide a solution without being overly apologetic. Simple, sincere language;
  confident yet understated.
- **We go beyond** — "At Cortland, we never settle." Inspire toward a greater idea; use storytelling
  to share the approach and the benefits that matter to the audience.

**Person.** Externally, *we* for Cortland and *you* for the reader — "you'll know we've thought of
everything." Never *the company* or *the customer*. Internally (training, reference material), the
audience is *associates*, and copy is written about the role rather than at the person:
"Responsible for connecting with each lead and creating appointments or online applications over
the phone."

**Casing.** Three registers, used consistently:

- **ALL CAPS, loosely letterspaced** — the wordmark, section eyebrows, navigation labels, video
  lower thirds, callouts. Headlines set in TT Norms Bold are all caps.
- **Sentence case** — body copy, subheads, card titles, longer instructional text.
- **Title Case** — proper nouns and program names only: The Leasing Hub, Screening & Applications,
  Attiva by Cortland, Cortland Build.

Note the brand's own inconsistency between "The Leasing Hub" (branding sheet, reference key) and
"The Leasing HUB" (internal dashboards). Match whichever the surrounding artifact uses; don't mix
them on one page.

**Sentence shape.** Short declaratives, often in threes: "We think differently. We create,
appreciate, and go beyond." Em dashes are used sparingly for a turn of thought. Lists of core
values are imperative and end with periods: *Love what you do, and let it show. Do the right thing
for the right reason. Listen, with your heart and your mind. Grow together, and play as a team.
Have the courage to be better.*

**Fixed phrases to use verbatim, never paraphrase.**

- Brand promise: *A life of everyday delight*
- Tagline (internal): *Creating Value for a Better Life*
- Mission: *To create superior living spaces and experiences designed to inspire our residents,
  associates, and investors to live a better life focused on what matters most to them.*
- Credo: *We believe in a better life where hospitality is always a given, each detail is worth a
  second thought, and every moment is a new opportunity to go beyond expectations.*

**Prohibitions written into the guidelines.** No content that defames Cortland or presents false or
negative information. Training material for external audiences carries a risk disclaimer. Video
titles never contain the words "video" or "video series". Email signatures carry no logos, quotes,
images or non-Cortland links.

**Emoji: no.** Emoji appear nowhere in any Cortland source material — not in the guidelines, not in
the Leasing HUB sheet, not in the Talent Development reference key. Don't introduce them.

---

## VISUAL FOUNDATIONS

**Color.** Navy `#002D72` is the dominant color and does most of the work; green `#A9C23F` is the
single primary accent. The guidelines describe the intent directly: *"High contrast, reverse colors
offer a strong visual impact… Dark blue brings stability, focus, and excellence. Bright green
injects innovation and creativity."* Extended palette colors (teal, pale blue, yellow, raspberry,
stone, taupe) add "vibrancy and sophistication" but never take over a layout — treat them as
one accent per piece, not a rainbow. The Leasing HUB shifts to its own navy `#033D7D` with gold
`#F2BC02` and light blue `#73B5FF`; teal, raspberry and green then appear only as small decorative
touches. Cortland is a high-contrast, mostly-white brand: white page, navy type, one accent.

**Type.** TT Norms throughout — geometric, open, "distinctly modern, elegant, and architectural."
Headlines are TT Norms Bold in all caps; Medium and Regular carry subheads and body. Loose kerning
is a deliberate signature ("provides sense of spaciousness") — the wordmark and eyebrows run at
`0.28–0.34em` tracking. Josefin Slab is the accent face, used for contrast in small doses and never
as the main font. Alternate Gothic No. 2 is available for headlines in tight horizontal spaces
only. Arial is the email face (9pt regular/bold, 1.15 line spacing, 11pt bold for the company title
line).

**Layout.** Generous white space, wide margins, content aligned to a simple column grid. Print and
learning material is organized by **horizontal navy rules** (`2px`, `--border-rule`) that separate
bands of content — this, not boxes or shadows, is the primary structuring device. Reference sheets
put a title block top-left, a supporting statement top-right, then rules dividing rows of items,
then a footer line with a caption on the left and the brand mark bottom-right. That footer/brand-mark
position is effectively fixed. Video work uses 90% action-safe / 80% title-safe margins.

**Backgrounds.** Predominantly flat white. Secondary options, in order of frequency: a flat navy
panel with white type; a pale tint wash (`--brand-sky` / `--gray-100`); a full-bleed photograph.
There are no gradients in the brand system, no repeating patterns, no textures, no grain, and no
hand-drawn illustration style. The one decorative element is the Leasing HUB **organic filled
triangle** used as an accent mark, active-tab indicator, bullet glyph and small divider flourish —
intentional and sparse, never scattered as page-wide decoration.

**Photography.** Natural, smart, aspirational; authentic, optimistic, vibrant. Naturally lit, warm
but true-to-life color, never heavily graded — the video specs are explicit that "overly stylized
LUT and/or color manipulation" is wrong and footage should be Rec. 709 / sRGB with true-to-life skin
tones. Three shot types are required: people (candid portraits), place/lifestyle (relatable everyday
scenarios), detail (unusual perspectives on everyday objects, ideally with a human element).
Community photography covers interiors, shared spaces and amenities: modern, clean, real spaces in
natural light. Explicitly forbidden: ambiguous stock imagery, cold or staged shots, contrived or
over-photoshopped scenes, insincere-looking people. No black-and-white treatment, no cool color
casts, no grain.

**Imagery over color.** When a photo carries text, use a bottom-up navy scrim
(`--overlay-scrim`) rather than a translucent capsule — the brand favors clean full-bleed images
with type in the clear space, and only uses a scrim when the image demands it.

**Cards.** Square-ish and quiet: white surface, `--radius-md` (8px) or `--radius-lg` (14px) for
larger panels, a 1px `--border-subtle` stone hairline *or* a single soft shadow — not both stacked
heavily. `--shadow-sm` / `--shadow-md` only; nothing dramatic. A `4px` navy or accent bar across the
**top** of a card is the accepted emphasis device (avoid the colored-left-border cliché). Radii stay
small because the brand mark and the architecture it depicts are geometric; pills
(`--radius-pill`) appear only on tags and status chips.

**Borders and rules.** 1px stone hairlines for containers and fields; 2px navy rules for section
division; 4px bars for accent emphasis. The brand mark's own stroke must never be removed.

**Shadows.** One soft ambient layer, navy-tinted rather than black (`0 2px 8px rgba(0,45,114,.10)`).
Inner shadows are used only on inputs, very lightly. Drop shadows on logos are explicitly
prohibited.

**Transparency and blur.** Used almost never. Tints are achieved with solid pale colors from the
palette, not with alpha over photography. There is no glass/blur idiom in this brand. The one
sanctioned use of alpha is the photo scrim and interaction tints (`--hover-tint`).

**Motion.** Calm, short, functional. Video direction calls for hard cuts, J-cuts, L-cuts, action
cuts, smooth zooms and left-to-right or top-to-bottom wipes, and explicitly avoids dissolves and
default software transitions. Translate that to UI as: 120–280ms fades and small position shifts,
`cubic-bezier(.4,0,.2,1)`. No bounce, no spring, no parallax, no long reveals. Animated intros in
internal video hold a maximum of 3 seconds.

**Hover states.** Solid buttons darken (navy → a deeper navy, green → `--brand-green-dark`); ghost
and text elements pick up a 6% navy tint (`--hover-tint`) and links shift from teal to navy. No
opacity-only hovers, no glows, no lifting cards on hover beyond a shadow step.

**Press states.** A near-imperceptible `scale(0.985)` plus one more step of color darkening. No
ripple.

**Focus.** A 2px teal outline at 2px offset, or `--shadow-focus` for filled controls. Focus is
always visible — internal training tools are used with keyboards all day.

**Disabled.** 45% opacity, no color change.

---

## ICONOGRAPHY

**There is no Cortland icon set.** Neither PDF defines icons, an icon font, or an SVG sprite, and no
codebase was provided. What the sources *do* contain:

- **The brand mark icon** — the green-ringed navy circle with the interrupted inner ring. Extracted
  to `assets/cortland-icon.png` / `assets/cortland-icon-alpha.png`. Per the guidelines it may be
  used on its own **only** for small circular applications under 1" in diameter or digital
  applications (favicons, avatars); it must never be used as part of another logo, and its stroke
  must never be removed.
- **The organic filled triangle** — the Leasing HUB accent shape. Used as a bullet glyph, an
  active-tab indicator and a small divider flourish. Implemented as CSS
  (`clip-path: var(--triangle-clip)`) in the `TriangleMark` component rather than as an asset,
  because the source sheet supplies it as a vector shape we could not export losslessly.
- **Filled color circles** — the Talent Development color-coding key uses large solid circles as its
  only "icon" system: one circle per COE, labeled underneath. `ColorDot` reproduces this.

**Substitution, flagged.** Where a UI genuinely needs functional icons (chevrons, close, search,
check), this system uses **Lucide** from CDN — a thin, geometric, 2px-stroke open-path set that
matches the brand mark's stroke logic and TT Norms' geometry. This is a substitution, not a Cortland
asset. Load it as:

```html
<script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
```

Keep stroke width at 2, size icons at 16/20/24px, and color them `currentColor` so they inherit
navy. **If Cortland has an approved icon library, replace this.**

**Emoji and unicode.** No emoji, ever. Unicode geometric characters (`▲`, `●`, `—`) appear in
learning material as bullets and dividers; prefer the `TriangleMark` component over a text glyph so
size and color stay controlled.

---

## Typography substitutions — action needed

**TT Norms is installed** at two weights: `assets/fonts/TTNorms-Light.otf` (300) and
`assets/fonts/TTNorms-Medium.otf` (500), declared as `@font-face` in `tokens/fonts.css`. Regular
(400) and Bold (700) were not supplied — headlines are specified as TT Norms **Bold** in the
guidelines, so that weight matters most. Until it arrives, 400 and 700 fall back to Poppins, which
means **headlines are currently rendering in the stand-in, not the brand face.**

| Brand face | Role | Status here | Fidelity |
| --- | --- | --- | --- |
| TT Norms Light (300) | Video lower thirds, callouts | **Real font file installed** | Exact |
| TT Norms Medium (500) | Subheads, buttons, labels | **Real font file installed** | Exact |
| TT Norms Regular (400) | Body copy | **Poppins** | Missing — please send |
| TT Norms Bold (700) | All headlines | **Poppins** | Missing — please send |
| Alternate Gothic No. 2 | Condensed headlines | **Oswald** | Close condensed gothic. |
| Josefin Slab | Accent | **Josefin Slab** | Exact — this is the real face, available on Google Fonts. |
| Arial | Email | **Arial** | Exact. |
| — | Internal UI/body | **Inter** | Convention from existing internal tools, not a brand face. |

**Please send TT Norms Regular and Bold, plus Alternate Gothic No. 2.** `.otf` works (that's what the
supplied files are); `.woff2` is better for the web. They drop into `assets/fonts/` with one
`@font-face` rule each in `tokens/fonts.css` — no other change needed.

## Assets

Everything in `assets/` was copied or cropped out of the supplied files. Nothing was drawn or
generated.

| File | What it is | Source |
| --- | --- | --- |
| `cortland-logo-horizontal.png` | Full-color horizontal brand mark, white background | cropped from COE Code Reference Key |
| `cortland-logo-horizontal-alpha.png` | Same, transparent background | derived |
| `cortland-logo-horizontal-white.png` | Reverse (all-white) mark for navy/dark backgrounds | derived |
| `cortland-icon.png` / `cortland-icon-alpha.png` | Brand mark icon only | cropped |
| `photo-leasing-associates.png` | Leasing associates on headsets | The Leasing Hub COE Branding |
| `photo-team-collaboration.png` | Team gathered around a laptop | The Leasing Hub COE Branding |
| `photo-pair-laptop.png` | Two associates at a laptop, cut out on white | The Leasing Hub COE Branding |
| `photo-building-exterior.png` | Modern building exterior | The Leasing Hub COE Branding |
| `illustration-conversation.png` | Flat illustration, two people seated in conversation | The Leasing Hub COE Branding |

**Logo caveat:** the only mark available in the uploads was a small raster crop, so
`cortland-logo-*.png` is soft at large sizes and there is no stacked configuration, no grayscale
variant and no `.svg`. **Please supply the official vector logo suite** (preferred stacked, full-color
horizontal, grayscale, single-color) and these files should be replaced.

## Index

| Path | What's there |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import`s only. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`, `base.css` |
| `assets/` | Logos and photography, all extracted from the uploads |
| `guidelines/` | Foundation specimen cards (color, type, spacing, shape, motion, brand) |
| `components/core/` | `Button`, `IconButton`, `Card`, `Badge`, `Tag`, `SectionRule` |
| `components/forms/` | `Input`, `Select`, `Checkbox`, `Switch` |
| `components/navigation/` | `Tabs` |
| `components/feedback/` | `Callout`, `Accordion`, `Dialog`, `Tooltip` |
| `components/brand/` | `BrandLockup`, `TriangleMark`, `ColorDot` |
| `templates/hub-reference-page/` | Starting template: Leasing HUB reference page (navy masthead, rule-divided sections, triangle bullets, closing callout) |
| `templates/coe-one-pager/` | Starting template: printable Talent Development one-pager |
| `ui_kits/leasing_hub/` | The Leasing HUB reference dashboard — the internal surface this brand system is most used for |
| `ui_kits/learning_materials/` | Talent Development print/PDF one-pager (recreation of the COE Code Reference Key) |
| `SKILL.md` | Agent Skills entry point |

### Intentional additions

No source defined a component inventory, so the primitive set is a standard one sized to what
Cortland's internal reference material actually needs. Three components exist purely to carry brand
motifs the sources *do* define:

- **`BrandLockup`** — enforces the mark's clear-space and minimum-size rules from guidelines 2.5.
- **`TriangleMark`** — the Leasing HUB organic filled triangle, so the motif is one component
  instead of ad-hoc CSS.
- **`ColorDot`** — the labeled solid circle used by the Talent Development color-coding key.

Standard primitives that would normally appear in a system of this size but are **not** included,
because nothing in the sources implies them: Toast, Avatar, Breadcrumb, Pagination, Table, Slider,
DatePicker.
