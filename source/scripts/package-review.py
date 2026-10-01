"""Package exported questions, blind blocks and traceable review records.
Run export-bank.mjs first. No learner progress is included.
"""
from pathlib import Path
import json, shutil, sys, zipfile

root=Path(__file__).resolve().parents[1]
out=Path(sys.argv[1]).resolve()
archive=Path(sys.argv[2]).resolve()
manifest=json.loads((out/'manifest.json').read_text())
coverage=json.loads((root/'content/review-coverage.json').read_text())
assert manifest['count']==coverage['count']==1720
records=out/'review-records'
records.mkdir(exist_ok=True)
for name in ['review-coverage.json','review-metadata.json']:
    shutil.copy2(root/'content'/name,records/name)
for item in coverage['items']:
    rel=Path(item['report']).relative_to('reviews')
    src=root/'content/review-records'/rel
    dest=records/rel
    dest.parent.mkdir(parents=True,exist_ok=True)
    shutil.copy2(src,dest)
for group in ['a','b','b-extra','c','d']:
    for name in ['source-audit.json','source-checks-final.json','author-notes.md']:
        src=root/'content'/group/name
        if src.exists():
            dest=records/'source-audits'/group/name
            dest.parent.mkdir(parents=True,exist_ok=True)
            shutil.copy2(src,dest)
for name in ['calculation-arithmetic-check.json','semantic-triage.json','similarity-final.json']:
    src=root/'content/review-records'/name
    if src.exists():shutil.copy2(src,records/name)
(out/'How-To-Review.txt').write_text(f'''PN PRACTICE STUDIO — PACCHETTO PER REVISIONE ESTERNA

Versione {manifest['version']}. {manifest['count']} quesiti originali in inglese.

1. Per un solo allegato: REx-PN-Complete-Bank.txt contiene tutti i quesiti,
   opzioni, chiavi, spiegazioni e collegamenti. Incolla External-Review-Prompt.txt.
2. Per un controllo meno influenzato dalle chiavi: invia prima un file
   blocks/block-NN-blind.txt. Fai registrare le risposte; poi invia il relativo
   block-NN-full.txt per confrontare chiavi e spiegazioni.
3. Ci sono {len(manifest['blocks'])} blocchi, normalmente da 50 quesiti. Il manifest
   elenca ogni ID. Pretendi un registro completo degli ID realmente controllati.
4. Conserva gli ID nelle correzioni: il JSON usa indici delle opzioni da 0.
   Le lettere del TXT seguono l'ordine canonico; l'app mescola le opzioni.
5. I cinque modelli di calcolo sono separati dal conteggio dei quesiti.
   Calculation-Templates.txt e calculations.js permettono di verificarli.

review-records/review-coverage.json collega ciascun quesito alla revisione
della sua precisa versione. I report distinguono autore e revisore; spiegano
anche limiti e verifiche mirate delle fonti. I report storici possono contenere
rilievi su altri ID: per lo stato finale usare la riga e l'hash della copertura.

Revisione incrociata AI non significa validazione clinica professionale,
approvazione del regolatore o prova dell'efficacia per superare l'esame.
L'accordo tra modelli non dimostra che un'affermazione medica sia corretta.
Un contesto ampio non garantisce la lettura attenta di tutto l'allegato.
Le fonti vanno aperte e confrontate con l'affermazione specifica.

Questo pacchetto non contiene progressi, risposte o note personali della studentessa.
''')
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED) as z:
    for p in sorted(out.rglob('*')):
        if p.is_file():z.write(p,p.relative_to(out))
print(json.dumps({'archive':str(archive),'questions':manifest['count'],'blocks':len(manifest['blocks']),'bytes':archive.stat().st_size}))
