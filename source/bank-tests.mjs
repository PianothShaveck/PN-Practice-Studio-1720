import assert from 'node:assert/strict';
import {QUESTIONS,SOURCES,BANK_REVIEW} from './dist/data.js';
import {freshState,selectQuestions,recordAnswer,datePlus,validateBackup,pruneDaily,calculation} from './dist/engine.js';
assert.equal(QUESTIONS.length,1720,'Expansion must reach agreed volume');
const legacy=QUESTIONS.filter(q=>!q.id.startsWith('x-'));
assert.equal(legacy.length,120,'Preserve every legacy ID');
for(const q of QUESTIONS){assert(q.refs.every(id=>SOURCES[id]?.url?.startsWith('https://')),`Missing reference ${q.id}`);}
const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
assert.equal(new Set(QUESTIONS.map(q=>normalize(q.stem)+'|'+q.options.map(normalize).sort().join('|'))).size,QUESTIONS.length,'No identical questions disguised by option shuffling');
const state=freshState();const seen=new Set();let total=0;
const started=performance.now();
for(let day=0;day<58;day++){
 const date=datePlus('2026-10-01',day),qs=selectQuestions(state,{mode:'daily',count:30,day:date,seed:date});
 assert(qs.length<=30);
 for(const q of qs){
  assert.notEqual(q.type,'numeric','Arithmetic variants cannot inflate authored daily volume');
  assert(!seen.has(q.id),`Repeated daily scenario ${q.id}`);seen.add(q.id);total++;
  recordAnswer(state,q,q.answer,{mode:'daily',confidence:'sure',now:new Date(date+'T12:00:00').getTime()});
 }
}
assert.equal(total,1720);assert.equal(selectQuestions(state,{mode:'daily'}).length,0);
assert(selectQuestions(state,{mode:'review',day:'2027-01-01'}).length>0,'Review remains available after unseen pool is exhausted');
for(const goal of [8,12,20,30,50]){state.settings.goal=goal;assert.equal(validateBackup(state).settings.goal,goal);}
const historyCount=state.history.length;
state.daily={'2026-09-01':{questions:['old']},'2026-10-01':{questions:['current']}};
pruneDaily(state,'2026-10-01');assert.deepEqual(Object.keys(state.daily),['2026-10-01']);assert.equal(state.history.length,historyCount);
for(let i=0;i<100;i++){const q=calculation('safety-case-'+i,i);assert(!q.stem.includes('fictional'));assert(!q.title.includes('Tablet'));assert(q.stem.includes('number only')||q.stem.includes('number;'));}
console.log(`Expanded bank checks passed: ${QUESTIONS.length} items; 58 daily sets without repeats in ${Math.round(performance.now()-started)} ms. Version ${BANK_REVIEW.version}`);
