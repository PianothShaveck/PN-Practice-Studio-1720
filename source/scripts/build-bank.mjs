import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>JSON.parse(readFileSync(path.join(root,'content',name),'utf8'));
const questions=[],sources={};
for(const group of ['a','b','c','d']){
 const items=read(`${group}/questions.json`),refs=read(`${group}/sources.json`);
 questions.push(...items);Object.assign(sources,refs);
}
const patches=read('legacy-patches.json');
const metadata=read('review-metadata.json');
if(questions.length!==1600)throw Error(`Expected 1600 expansion questions, received ${questions.length}`);
if(new Set(questions.map(q=>q.id)).size!==questions.length)throw Error('Duplicate expansion IDs');
const groups={};for(const q of questions)groups[q.cat]=(groups[q.cat]||0)+1;
if(Object.keys(groups).length!==8||Object.values(groups).some(n=>n!==200))throw Error('Expected 200 new items per category');
for(const q of questions){
 if(!q.stem||!q.learningObjective||!q.subtopic||q.why.length!==q.options.length)throw Error(`Incomplete item: ${q.id}`);
 if(!q.refs.length||q.refs.some(id=>!sources[id]))throw Error(`Missing source: ${q.id}`);
 if(q.answer.some(i=>!Number.isInteger(i)||i<0||i>=q.options.length))throw Error(`Invalid answer: ${q.id}`);
}
const hash=createHash('sha256').update(JSON.stringify({questions,patches,sources})).digest('hex');
writeFileSync(path.join(root,'dist/expansion.js'),[
 '// Generated from content/ by scripts/build-bank.mjs. Stable IDs preserve learner history.',
 `export const EXPANSION_QUESTIONS=${JSON.stringify(questions)};`,
 `export const EXPANSION_SOURCES=${JSON.stringify(sources)};`,
 `export const LEGACY_CHANGES=${JSON.stringify(patches)};`,
 `export const BANK_REVIEW=${JSON.stringify({...metadata,contentHash:hash})};`,''
].join('\n'));
console.log(JSON.stringify({expansion:questions.length,perCategory:groups,hash}));
