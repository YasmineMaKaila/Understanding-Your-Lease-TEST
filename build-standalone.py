#!/usr/bin/env python3
"""
build-standalone.py — folds the multi-file project into one index-standalone.html
for immediate preview (opens straight off the file system, no server).

  * css/styles.css          -> inline <style>, with ../assets/… turned into data: URLs
  * assets/<lease>/*.webp   -> data: URLs on each page's `image`
  * assets/<lease>/text/*   -> inlined as `pageText` on each page
  * js/lease-data.js        -> inline, renamed GA_*
  * js/lease-data-tx.js     -> inline, renamed TX_*
  * js/leases.js            -> inline, its two imports replaced by the renamed consts
  * js/app.js               -> inline module (the import line is dropped)

Both lease data modules export the same four names, so each is renamed on the way in;
js/leases.js then binds them back together exactly as it does in the served project.

Run from the project root:  python3 build-standalone.py
"""
import base64, json, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
p = lambda *a: os.path.join(ROOT, *a)

html    = open(p('index.html'), encoding='utf-8').read()
css     = open(p('css', 'styles.css'), encoding='utf-8').read()
app_js  = open(p('js', 'app.js'), encoding='utf-8').read()
reg_js  = open(p('js', 'leases.js'), encoding='utf-8').read()

LEASE_MODULES = [('GA', 'lease-data.js'), ('TX', 'lease-data-tx.js')]
EXPORTS = ['FICTION', 'KEY_TERMS', 'SUMMARY', 'LEASE']

# ---- fold each lease's assets into its data model ---------------------------
pages_bytes = 0
modules = []
for prefix, fname in LEASE_MODULES:
    src = open(p('js', fname), encoding='utf-8').read()

    m = re.search(r'export const LEASE = (\[.*?\]);\n', src, re.S)
    if not m:
        sys.exit(f'could not find the LEASE export in js/{fname}')
    lease = json.loads(m.group(1))

    for pg in lease:
        raw = open(p(pg['image']), 'rb').read()
        pages_bytes += len(raw)
        pg['image'] = 'data:image/webp;base64,' + base64.b64encode(raw).decode('ascii')
        pg['pageText'] = open(p(pg['pageTextUrl']), encoding='utf-8').read()

    src = src[:m.start(1)] + json.dumps(lease, ensure_ascii=False) + src[m.end(1):]

    # export const FICTION = …  ->  const GA_FICTION = …
    for name in EXPORTS:
        src = re.sub(rf'^export const {name} = ', f'const {prefix}_{name} = ', src, flags=re.M)

    # js/lease-data.js carries a trailing `export default LEASE;`. Nothing imports it, and in
    # the single-module bundle that bare identifier collides with app.js's own `let LEASE`.
    src = re.sub(r'^export default .*?;\s*$', '', src, flags=re.M)
    modules.append(src)

# ---- rebind the registry ----------------------------------------------------
reg_js = re.sub(r"^import \* as (ga|tx) from '\./[^']+';\s*$", '', reg_js, flags=re.M)
reg_js = re.sub(r'^export (const|function) ', r'\1 ', reg_js, flags=re.M)
binding = ('const ga = { FICTION: GA_FICTION, KEY_TERMS: GA_KEY_TERMS, '
           'SUMMARY: GA_SUMMARY, LEASE: GA_LEASE };\n'
           'const tx = { FICTION: TX_FICTION, KEY_TERMS: TX_KEY_TERMS, '
           'SUMMARY: TX_SUMMARY, LEASE: TX_LEASE };\n')

# ---- inline the brand assets ------------------------------------------------
# The Cortland logo, the two Resident Experience icons and the TT Norms webfonts are
# referenced from index.html and from css/styles.css. Once the CSS is inlined into the
# document its "../assets/…" paths no longer resolve, so both sets are turned into
# data: URLs here. Without this the standalone preview loses the branding entirely.
MIME = {'.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
        '.webp': 'image/webp', '.svg': 'image/svg+xml',
        '.otf': 'font/otf', '.ttf': 'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2'}

def data_url(rel):
    ext = os.path.splitext(rel)[1].lower()
    raw = open(p(rel), 'rb').read()
    return len(raw), f'data:{MIME.get(ext, "application/octet-stream")};base64,' + \
                     base64.b64encode(raw).decode('ascii')

brand = 0
for ref in sorted(set(re.findall(r'url\("\.\./(assets/[^"]+)"\)', css))):
    n, url = data_url(ref)
    brand += n
    css = css.replace(f'url("../{ref}")', f'url("{url}")')

for ref in sorted(set(re.findall(r'(?:src|href)="(assets/(?!ga/|tx/)[^"]+)"', html))):
    n, url = data_url(ref)
    brand += n
    html = html.replace(f'"{ref}"', f'"{url}"')

# ---- stitch -----------------------------------------------------------------
app_js = re.sub(r"^import \{[^}]*\} from '\./leases\.js';\s*$", '', app_js, flags=re.M)

bundle = '\n'.join(modules) + '\n' + binding + reg_js + '\n' + app_js

html = html.replace('<link rel="stylesheet" href="css/styles.css">',
                    '<style>\n' + css + '\n</style>')
html = html.replace('<script type="module" src="js/app.js"></script>',
                    '<script type="module">\n' + bundle + '\n</script>')
html = html.replace('<title>Understanding Your Lease — Interactive Guide</title>',
                    '<title>Understanding Your Lease — Interactive Guide (standalone)</title>')

out = p('index-standalone.html')
open(out, 'w', encoding='utf-8').write(html)
print(f'wrote {os.path.relpath(out, ROOT)}  '
      f'({os.path.getsize(out)/1024/1024:.2f} MB; {pages_bytes/1024:.0f} KB of lease pages + '
      f'{brand/1024:.0f} KB of brand assets inlined)')
