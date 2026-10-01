import {calculationCase} from './calculations.js';
import {CATEGORIES,QUESTIONS,SOURCES} from './data.js';
export const VERSION=1;
export const today=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
export function datePlus(day,n){const d=new Date(day+'T12:00:00');d.setDate(d.getDate()+n);return today(d);}
export function freshState(){return {version:VERSION,settings:{province:'',examDate:'',goal:12},history:[],reviews:{},bookmarks:[],excluded:[],notes:{},daily:{},session:null};}
export function hash(s){let h=2166136261;for(const c of String(s)){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;}
export function rng(seed){let a=hash(seed);return ()=>{a+=0x6D2B79F5;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return ((t^t>>>14)>>>0)/4294967296;};}
export function shuffle(items,random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function permuteQuestion(q,seed){if(q.type==='numeric')return q;const order=shuffle(q.options.map((_,i)=>i),rng(seed+q.id));return {...q,options:order.map(i=>q.options[i]),why:order.map(i=>q.why[i]),answer:order.map((v,i)=>q.answer.includes(v)?i:-1).filter(i=>i>=0)};}
export function blueprint(settings){return (settings.examDate||today())>='2027-01-01'?'2027':'2022';}
export function categoryName(cat,settings){return cat.id==='safety'&&blueprint(settings)==='2027'?'Safety & Infection Prevention and Control':cat.name;}
export function questionText(q){
 const parts=[q.stem];
 if(q.exhibit)parts.push('Client record:\n'+q.exhibit.map(row=>row.join(' | ')).join('\n'));
 if(q.type==='numeric')parts.push(`Required answer unit: ${q.unit}.`);
 else parts.push(q.type==='multiple'?'Select all that apply.':'Select the single best answer.',q.options.map((o,i)=>`${String.fromCharCode(65+i)}) ${o}`).join('\n'));
 return parts.join('\n\n');
}
export function reviewContext(settings){
 const province=settings.province==='ON'?'Ontario, Canada (RPN)':settings.province==='BC'?'British Columbia, Canada (LPN)':'Canada (Ontario RPN or British Columbia LPN; province not selected)';
 return `Original REx-PN study question. Context: ${province}. ${blueprint(settings)} exam-plan context. This is educational practice, not a real patient consultation.`;
}
export function googleReviewUrl(q,settings){
 // No answer key, learner response or personal note is sent in the search.
 return 'https://www.google.com/search?q='+encodeURIComponent(`${reviewContext(settings)}\n\n${questionText(q)}\n\nWhich answer is best supported? Explain and cite reliable sources. Identify ambiguity or missing information.`);
}
export function reviewPrompt(q,settings){
 const instructions='Review this AI-authored practice question critically. Solve it yourself before comparing with the proposed answer below. Do not assume the supplied key or rationale is correct. Check whether the scenario has enough information and whether more than one answer is defensible. Check all options, relevant calculations and units. Use current primary clinical guidance and the applicable Canadian regulator for scope/legal issues; distinguish local policy from general practice. Provide direct source links supporting your conclusion. If you cannot verify a claim or access a source, say so rather than inventing support. Finish with a supported answer, any ambiguity or error found, and a corrected version if needed. Agreement with an AI answer alone is not validation.';
 const key=q.type==='numeric'?`${q.answer} ${q.unit}\nWorked solution: ${q.solution}`:q.answer.map(i=>`${String.fromCharCode(65+i)}) ${q.options[i]}`).join('\n');
 const rationale=q.type==='numeric'?'':q.options.map((o,i)=>`${String.fromCharCode(65+i)}) ${o}\nProposed explanation: ${q.why[i]}`).join('\n\n');
 const refs=q.refs.map(id=>SOURCES[id]).filter(Boolean);
 return `${instructions}\n\n${reviewContext(settings)}\nQuestion ID: ${q.id}\n\nQUESTION\n${questionText(q)}\n\nPROPOSED ANSWER — TO BE CHECKED\n${key}\n\n${rationale?`PROPOSED OPTION RATIONALES\n${rationale}\n\n`:''}PROPOSED TAKEAWAY\n${q.takeaway}\n\nFURTHER-READING LINKS PROVIDED BY THE APP (NOT PROOF OF VALIDATION)\n${refs.map(s=>`${s.name}: ${s.url}`).join('\n')}`;
}
export function calculation(seed,index=0){
 const kind=((index%5)+5)%5;
 return {id:`calc-${hash(seed+':'+index)}`,cat:'pharmacology',type:'numeric',...calculationCase(rng(seed+':'+index),kind)};
}
export function grade(q,response){
 if(q.type==='numeric'){const text=String(response).trim().replace(',','.');if(!/^\d+(\.\d+)?$/.test(text))return {points:0,exact:false};const exact=Math.abs(Number(text)-q.answer)<1e-8;return {points:exact?1:0,exact};}
 const chosen=[...new Set(Array.isArray(response)?response:[])];const hits=chosen.filter(i=>q.answer.includes(i)).length;const misses=chosen.length-hits;const exact=hits===q.answer.length&&misses===0;
 return {points:q.type==='multiple'?Math.max(0,hits-misses)/q.answer.length:exact?1:0,exact};
}
export function dueQuestions(state,day=today()){return QUESTIONS.filter(q=>!state.excluded.includes(q.id)&&state.reviews[q.id]?.due<=day);}
export function seenIds(state){return new Set(state.history.map(h=>h.id));}
export function selectQuestions(state,{mode='daily',count=12,cat='all',day=today(),seed=day}={}){
 const random=rng(seed);let candidates=QUESTIONS.filter(q=>!state.excluded.includes(q.id)&&(cat==='all'||q.cat===cat));
 if(mode==='review')candidates=candidates.filter(q=>state.reviews[q.id]?.due<=day);
 if(mode==='bookmarks')candidates=candidates.filter(q=>state.bookmarks.includes(q.id));
 if(mode==='mistakes')candidates=candidates.filter(q=>{const r=state.reviews[q.id];return r&&!r.exact;});
 if(mode==='calculations')return Array.from({length:count},(_,i)=>calculation(seed,i));
 const seen=seenIds(state),last={};
 if(mode==='daily')candidates=candidates.filter(q=>!seen.has(q.id));for(const h of state.history)last[h.id]=h.at;
 const pool=shuffle(candidates,random);const selected=[];
 // Daily sessions contain only unseen authored scenarios. Arithmetic drills live in their own lab.
 const calcCount=0;
 const wanted=Math.min(count-calcCount,candidates.length);
 while(selected.length<wanted){
  const remaining=pool.filter(q=>!selected.some(s=>s.id===q.id));if(!remaining.length)break;
  let eligible=remaining;
  if(!['review','mistakes','bookmarks'].includes(mode)){const unseen=remaining.filter(q=>!seen.has(q.id));if(unseen.length)eligible=unseen;}
  const counts=Object.fromEntries(CATEGORIES.map(c=>[c.id,selected.filter(q=>q.cat===c.id).length+(c.id==='pharmacology'?calcCount:0)]));
  eligible.sort((a,b)=>{const ca=CATEGORIES.find(c=>c.id===a.cat),cb=CATEGORIES.find(c=>c.id===b.cat);const da=ca.weight*(selected.length+calcCount+1)/100-counts[a.cat],db=cb.weight*(selected.length+calcCount+1)/100-counts[b.cat];return db-da || (last[a.id]||0)-(last[b.id]||0);});selected.push(eligible[0]);
 }
 for(let i=0;i<calcCount;i++)selected.push(calculation(seed,i+hash(seed)%5));
 return shuffle(selected,random).map(q=>permuteQuestion(q,seed));
}
export function recordAnswer(state,q,response,{confidence='unsure',sessionId,mode='mixed',now=Date.now()}={}){
 const result=grade(q,response);const day=today(new Date(now));
 const entry={id:q.id,cat:q.cat,points:result.points,exact:result.exact,response,at:now,day,confidence,sessionId,mode};state.history.push(entry);
 if(q.type!=='numeric'){
  const previous=state.reviews[q.id];const success=result.exact?Math.min((previous?.success||0)+1,5):0;
  const interval=!result.exact||confidence==='unsure'?1:[1,3,7,14,30][Math.max(0,success-1)];
  state.reviews[q.id]={due:datePlus(day,interval),success,exact:result.exact,points:result.points};
 }
 return entry;
}
export function pruneDaily(state,day=today()){for(const key of Object.keys(state.daily))if(key<datePlus(day,-7))delete state.daily[key];}
export function stats(state){const total=state.history.length,exact=state.history.filter(h=>h.exact).length;return {total,exact,accuracy:total?Math.round(exact/total*100):null,seen:seenIds(state).size};}
export function streak(state,day=today()){const days=new Set(state.history.map(h=>h.day));let cursor=days.has(day)?day:datePlus(day,-1),count=0;while(days.has(cursor)){count++;cursor=datePlus(cursor,-1);}return count;}
export function validateBackup(data){
 if(!data||data.version!==VERSION||!Array.isArray(data.history)||data.history.length>100000||!data.settings)throw Error('This is not a supported PN Practice Studio backup.');
 const clean=freshState();const ids=new Set(QUESTIONS.map(q=>q.id));const cats=new Set(CATEGORIES.map(c=>c.id));
 const dateValid=s=>typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&Number.isFinite(Date.parse(s+'T12:00:00'));
 const s=data.settings;clean.settings={province:['','ON','BC'].includes(s.province)?s.province:'',examDate:dateValid(s.examDate)?s.examDate:'',goal:[8,12,20,30,50].includes(s.goal)?s.goal:12};
 for(const h of data.history){if(!h||typeof h.id!=='string'||(!ids.has(h.id)&&!/^calc-\d+$/.test(h.id))||!cats.has(h.cat)||!Number.isFinite(h.at)||!dateValid(h.day)||typeof h.exact!=='boolean'||!Number.isFinite(h.points)||h.points<0||h.points>1)throw Error('The backup contains invalid practice history.');clean.history.push({...h,reason:typeof h.reason==='string'?h.reason.slice(0,80):''});}
 for(const [id,r] of Object.entries(data.reviews||{})){if(ids.has(id)&&r&&dateValid(r.due)&&Number.isInteger(r.success)&&r.success>=0&&r.success<=5&&typeof r.exact==='boolean')clean.reviews[id]={due:r.due,success:r.success,exact:r.exact,points:Number(r.points)||0};}
 for(const key of ['bookmarks','excluded'])clean[key]=[...new Set((Array.isArray(data[key])?data[key]:[]).filter(id=>ids.has(id)))];
 for(const [id,note]of Object.entries(data.notes||{})){if(ids.has(id)&&typeof note==='string')clean.notes[id]=note.slice(0,3000);}
 // Sessions and daily snapshots are intentionally reconstructed, never trusted from uploaded JSON.
 return clean;
}
