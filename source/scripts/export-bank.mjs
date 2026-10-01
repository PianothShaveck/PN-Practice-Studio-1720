import {mkdirSync,writeFileSync,readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {QUESTIONS,CATEGORIES,SOURCES,BANK_REVIEW} from '../dist/data.js';
import {calculation} from '../dist/engine.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=path.resolve(process.argv[2]||path.join(root,'review-export'));
mkdirSync(out,{recursive:true});mkdirSync(path.join(out,'blocks'),{recursive:true});
const canonical=JSON.stringify({questions:QUESTIONS,sources:SOURCES});
const digest=createHash('sha256').update(canonical).digest('hex');
const letter=i=>String.fromCharCode(65+i);
const render=(q,key=true)=>[
 `=== ${q.id} | ${q.cat} | ${q.type} ===`,
 ...(key?[`Title: ${q.title}`,`Subtopic: ${q.subtopic||'See scenario'}`,
 `Learning objective: ${q.learningObjective||q.takeaway}`,
 `Reasoning skill: ${q.reasoningSkill||'Not retrospectively classified'}`,
 `Difficulty: ${q.difficulty||'Not calibrated'}`]:[]),
 `QUESTION: ${q.stem}`,
 ...(q.exhibit?['EXHIBIT:',...q.exhibit.map(row=>row.join(' | '))]:[]),
 q.type==='numeric'?`Answer unit: ${q.unit}`:q.type==='multiple'?'Select all that apply.':'Select the single best answer.',
 ...(q.options?q.options.map((o,i)=>`${letter(i)}. ${o}`):[]),
 ...(key?[
  `PROPOSED KEY: ${q.type==='numeric'?q.answer:q.answer.map(letter).join(', ')}`,
  ...(q.why?q.why.map((w,i)=>`Rationale ${letter(i)}: ${w}`):[`Worked solution: ${q.solution}`]),
  `Takeaway: ${q.takeaway}`,
  'REFERENCE LINKS (support must be checked; listing a link is not validation):',
  ...q.refs.map(id=>`${id}: ${SOURCES[id]?.name||'MISSING'} | ${SOURCES[id]?.url||'MISSING'}`),
  `Review metadata: ${JSON.stringify(q.review||{status:'See coverage ledger'})}`
 ]:[]),''
].join('\n');
const header=`PN PRACTICE STUDIO — COMPLETE REVIEW BANK\nVersion: ${BANK_REVIEW.version}\nDate: 2026-10-01\nAuthored questions: ${QUESTIONS.length}\nSHA-256 of canonical questions+sources JSON: ${digest}\n\nOriginal AI-authored educational questions, not released or recalled exam items. Independent AI review is fallible and is not clinical, regulatory or psychometric validation. Difficulty labels are author judgements, not measured difficulty. Reference links are not proof that each claim has been independently verified.\n\nThe main bank contains authored scenarios. Calculation templates and parameter variants are reported separately and do not increase the scenario count. Personal learner records are not included. Options are shown in canonical storage order for traceable patches; the app shuffles options for practice. Answer-letter frequency in this file is not the live presentation order.\n\nCOUNTS\n${CATEGORIES.map(c=>`${c.name}: ${QUESTIONS.filter(q=>q.cat===c.id).length}`).join('\n')}\n\n`;
writeFileSync(path.join(out,'REx-PN-Complete-Bank.txt'),header+QUESTIONS.map(q=>render(q)).join('\n'));
writeFileSync(path.join(out,'REx-PN-Complete-Bank.json'),JSON.stringify({metadata:{...BANK_REVIEW,count:QUESTIONS.length,sha256:digest},categories:CATEGORIES,sources:SOURCES,questions:QUESTIONS},null,2));
const manifest=[];
for(let i=0;i<QUESTIONS.length;i+=50){
 const qs=QUESTIONS.slice(i,i+50),n=String(i/50+1).padStart(2,'0');
 const meta=`BANK ${BANK_REVIEW.version} | BLOCK ${n} | ${qs.length} questions\nIDs: ${qs.map(q=>q.id).join(', ')}\n\n`;
 writeFileSync(path.join(out,'blocks',`block-${n}-full.txt`),meta+qs.map(q=>render(q)).join('\n'));
 writeFileSync(path.join(out,'blocks',`block-${n}-blind.txt`),meta+qs.map(q=>render(q,false)).join('\n'));
 manifest.push({block:n,count:qs.length,ids:qs.map(q=>q.id)});
}
writeFileSync(path.join(out,'manifest.json'),JSON.stringify({version:BANK_REVIEW.version,sha256:digest,count:QUESTIONS.length,blocks:manifest},null,2));
const samples=Array.from({length:5},(_,i)=>calculation('external-template-review',i));
writeFileSync(path.join(out,'Calculation-Templates.txt'),'FIVE CALCULATION TEMPLATES — separate from authored bank count\nReview the source file calculations.js as well as these representative samples.\n\n'+samples.map(q=>render(q)).join('\n'));
writeFileSync(path.join(out,'calculations.js'),readFileSync(path.join(root,'dist/calculations.js')));
const prompt=path.join(root,'content/External-Review-Prompt.txt');
if(existsSync(prompt))writeFileSync(path.join(out,'External-Review-Prompt.txt'),readFileSync(prompt));
console.log(JSON.stringify({output:out,count:QUESTIONS.length,blocks:manifest.length,sha256:digest}));
