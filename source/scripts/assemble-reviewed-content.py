"""Release gate: consume independently reviewed author files and exact-item ledgers.
Usage: python scripts/assemble-reviewed-content.py /absolute/bank-expansion
This checks provenance/coverage, not clinical correctness.
"""
import json, hashlib, shutil, sys
from pathlib import Path
from collections import Counter
root=Path(__file__).resolve().parents[1]
work=Path(sys.argv[1]).resolve()
dest=root/'content'
def read(p): return json.loads(p.read_text())
def write(p,v):
    p.parent.mkdir(parents=True,exist_ok=True)
    p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
def digest(q):
    return hashlib.sha256(json.dumps(q,sort_keys=True,ensure_ascii=False).encode()).hexdigest()

rows={}
for p in sorted((work/'reviews').rglob('*.json')):
    data=read(p)
    entries=data.get('items',[]) if isinstance(data,dict) else data if isinstance(data,list) else []
    date=data.get('reviewedAt','') if isinstance(data,dict) else ''
    for entry in entries:
        if not isinstance(entry,dict) or not entry.get('reviewedItemSha256'): continue
        key=(entry['id'],entry['reviewedItemSha256'])
        if key not in rows or date>=rows[key]['reviewedAt']:
            rows[key]={**entry,'reviewedAt':date,'report':str(p.relative_to(work)),'reviewerTask':data.get('reviewerTask') if isinstance(data,dict) else None}

groups={g:read(work/'authoring'/g/'questions.json') for g in 'abcd'}
extra=work/'authoring/b-extra'
if (extra/'questions.json').exists(): groups['b']+=read(extra/'questions.json')
legacy=read(work/'reviews/legacy-revised.json')
assert len(legacy)==120,'Expected120 legacy IDs'
for g,qs in groups.items(): assert len(qs)==400,f'{g}: expected400, found{len(qs)}'
allq=legacy+sum(groups.values(),[])
tasks={'a':'author_management_safety','b':'author_pharm_adaptation','c':'author_risk_basic','d':'author_health_psych'}
owners={q['id']:'/root/'+tasks[g] for g,qs in groups.items() for q in qs}
owners.update({q['id']:'/root' for q in legacy})
if (extra/'questions.json').exists(): owners.update({q['id']:'/root' for q in read(extra/'questions.json')})
pending=[];coverage=[]
for q in allq:
    h=digest(q);row=rows.get((q['id'],h))
    if not row or row.get('status')!='pass' or not row.get('reviewerTask') or row['reviewerTask']==owners[q['id']]:
        reason='no matching current review' if not row else row['status'] if row.get('status')!='pass' else 'missing reviewer identity' if not row.get('reviewerTask') else 'reviewer is also author'
        pending.append({'id':q['id'],'sha256':h,'status':reason})
    else:
        coverage.append({'id':q['id'],'sha256':h,'status':'pass','authorTask':owners[q['id']],'reviewerTask':row['reviewerTask'],'reviewedAt':row['reviewedAt'],'report':row['report'],'assessment':row.get('assessment','')})
write(work/'reviews/release-gate.json',{'total':len(allq),'matchingPasses':len(coverage),'pending':pending})
if pending:
    print(json.dumps({'matchingPasses':len(coverage),'pending':len(pending),'firstPending':[p['id'] for p in pending[:15]]}))
    raise SystemExit('Unresolved or stale content review: see reviews/release-gate.json')

byid={r['id']:r for r in coverage}
def annotated(q):
    r=byid[q['id']]
    return {**q,'review':{'status':'independent-ai-screened','contentSha256':r['sha256'],'reviewerTask':r['reviewerTask'],'report':r['report'],'qualifiedClinicalValidation':False}}
legacy_sources=read(work/'reviews/legacy-key.json')['sources']
for g,qs in groups.items():
    sources=read(work/'authoring'/g/'sources.json')
    if g=='b' and (extra/'sources.json').exists(): sources.update(read(extra/'sources.json'))
    for q in qs:
        for ref in q['refs']:
            if ref not in sources:
                assert ref in legacy_sources,f'Unknown reference {ref} in{q["id"]}'
                sources[ref]=legacy_sources[ref]
    write(dest/g/'questions.json',[annotated(q) for q in qs])
    write(dest/g/'sources.json',sources)
    for name in ['source-audit.json','source-checks-final.json','author-notes.md']:
        p=work/'authoring'/g/name
        if p.exists(): shutil.copy2(p,dest/g/name)
if extra.exists():
    (dest/'b-extra').mkdir(parents=True,exist_ok=True)
    for name in ['sources.json','source-audit.json','author-notes.md']:
        p=extra/name
        if p.exists(): shutil.copy2(p,dest/'b-extra'/name)
original={q['id']:q for q in read(work/'reviews/legacy-key.json')['questions']}
patches={}
for q in legacy:
    updated=annotated(q)
    patches[q['id']]={key:value for key,value in updated.items() if original[q['id']].get(key)!=value}
write(dest/'legacy-patches.json',patches)
write(dest/'review-coverage.json',{'bankVersion':'2026-10-01.2','count':len(allq),'method':'Per-item current-content hash matched to an independent AI review. This is not external clinical or psychometric validation.','items':coverage})
write(dest/'review-metadata.json',{'version':'2026-10-01.2','date':'2026-10-01','count':len(allq),'newItems':1600,'legacyItems':120,'independentAiScreened':len(coverage),'qualifiedClinicalValidation':False,'reviewScope':'Every item screened for answer defensibility, educational usefulness and wording. Source checks are targeted and documented; not every claim independently source-verified.','perCategory':dict(Counter(q['cat'] for q in allq))})
for p in (work/'reviews').rglob('*'):
    if p.is_file() and p.suffix in ['.json','.md'] and '__pycache__' not in str(p):
        target=dest/'review-records'/p.relative_to(work/'reviews');target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,target)
shutil.copy2(work/'AUTHORING-BRIEF.md',dest/'AUTHORING-BRIEF.md')
print(json.dumps({'releaseReady':True,'count':len(allq),'matchingReviewedItems':len(coverage)}))
