from pathlib import Path
import re, zipfile
root = Path(__file__).parent
out = root / 'portable'
out.mkdir(exist_ok=True)
html = (root/'dist/index.html').read_text()
css = (root/'dist/style.css').read_text()
css = re.sub(r'^@import[^\n]*\n', '', css)
js = '\n'.join(re.sub(r'^export (?:\{[^\n]*\};\n)?', '', re.sub(r'^import .*;\n', '', (root/'dist'/name).read_text(), flags=re.M), flags=re.M) for name in ['expansion.js', 'data.js', 'calculations.js', 'engine.js', 'app.js'])
# Protect the HTML script boundary if future authored content includes it.
js = js.replace('</script', '<\\/script')
html = html.replace('<link rel="stylesheet" href="./style.css">', '<style>'+css+'</style>')
html = html.replace('<script type="module" src="./app.js"></script>', '<script type="module">'+js+'</script>')
(out/'index.html').write_text(html)
(out/'.nojekyll').write_text('')
(out/'START-HERE.txt').write_text('PN PRACTICE STUDIO\n\nOpen index.html in a current browser. No installation or internet connection is required for the portable app itself. Source links need internet access.\n\nTo use on a phone, upload index.html to GitHub Pages or another static host. For GitHub Pages: create a repository, upload index.html and .nojekyll, then Settings > Pages > Deploy from a branch > main > / (root) > Save.\n\nProgress stays in this browser on this device. Use Your setup > Export backup before moving to another device or host.\n\nThe app contains 1,720 original AI-authored scenarios and 5 separate calculation templates. Independent AI review does not replace qualified clinical review; consult the included review coverage and limitations. Use it as additional practice alongside official exam resources and approved course material. It is not a complete or validated exam preparation product.\n\nSee README.md for details, sources and testing limits.\n')
(out/'README.md').write_text((root/'README.md').read_text())
archive=root.parent/'PN-Practice-Studio.zip'
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED) as z:
    for p in out.iterdir(): z.write(p,p.name)
    for name in ['dist/index.html','dist/style.css','dist/expansion.js','dist/data.js','dist/calculations.js','dist/engine.js','dist/app.js','tests.mjs','bank-tests.mjs','package.json','make-portable.py']:
        z.write(root/name,'source/'+name)
    z.write(root/'README.md','source/README.md')
    for p in (root/'scripts').rglob('*'):
        if p.is_file(): z.write(p,'source/'+str(p.relative_to(root)))
    for p in (root/'content').rglob('*'):
        if p.is_file() and '__pycache__' not in str(p): z.write(p,'source/'+str(p.relative_to(root)))
print(str(archive))
print(f'Standalone HTML: {len(html.encode()):,} bytes')
