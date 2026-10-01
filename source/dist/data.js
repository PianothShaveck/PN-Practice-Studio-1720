import {EXPANSION_QUESTIONS,EXPANSION_SOURCES,LEGACY_CHANGES,BANK_REVIEW} from './expansion.js';
export {BANK_REVIEW};
export const CATEGORIES = [
 {id:'management',name:'Management of Care',short:'Management',weight:21,color:'#205b4b',focus:'Priorities, consent, advocacy and safe teamwork',lesson:'Start with the client’s immediate need, then consider consent, competence, available support and your province’s standards. An employer’s request does not by itself establish authority or competence.'},
 {id:'safety',name:'Safety & Infection Control',short:'Safety',weight:13,color:'#44806d',focus:'Prevent harm and interrupt transmission',lesson:'Apply routine practices to every client. Add precautions based on the exposure and organism. Reassess fall risk when a client’s condition, medications or environment changes.'},
 {id:'health',name:'Health Promotion & Maintenance',short:'Health promotion',weight:9,color:'#977426',focus:'Prevention, development and client education',lesson:'Assess readiness, preferences and understanding before teaching. Use teach-back and a qualified interpreter where needed. Tailor prevention to life stage and local recommendations.'},
 {id:'psychosocial',name:'Psychosocial Integrity',short:'Psychosocial',weight:11,color:'#8671a1',focus:'Therapeutic communication and mental health',lesson:'Listen without judgment. Acknowledge emotion without confirming delusions. Ask directly about safety when indicated and respond urgently to immediate risk.'},
 {id:'basic',name:'Basic Care & Comfort',short:'Basic care',weight:9,color:'#b97b5f',focus:'Mobility, nutrition, elimination and comfort',lesson:'Individualize assistance, preserve independence and reassess the effect of care. Treat new swallowing difficulty, skin changes and uncontrolled pain as assessment needs.'},
 {id:'pharmacology',name:'Pharmacological & Parenteral Therapies',short:'Pharmacology',weight:17,color:'#4f7eaa',focus:'Safe medications, monitoring and calculations',lesson:'Connect each medication to its indication, required assessments and major harms. Clarify incomplete or unsafe orders. In calculations, carry the units and round only the final answer.'},
 {id:'risk',name:'Reduction of Risk Potential',short:'Risk reduction',weight:11,color:'#768846',focus:'Trends, investigations and early complications',lesson:'Compare current findings with baseline. One concerning change can outweigh several normal observations. Use the laboratory’s supplied reference range and escalate significant changes.'},
 {id:'adaptation',name:'Physiological Adaptation',short:'Physiological adaptation',weight:9,color:'#b56470',focus:'Recognize deterioration and act promptly',lesson:'Recognize immediate threats to airway, breathing and circulation, call for appropriate help and act within your competence and protocols. Do not postpone emergency care for routine documentation.'}
];
export const SOURCES = {
 plan:{name:'NCSBN · REx-PN test plans',url:'https://rexpn.com/test-plan.page',kind:'Official exam'},
 prepare:{name:'NCSBN · Exam preview & candidate tutorial',url:'https://rexpn.com/prepare.page',kind:'Official exam'},
 faq:{name:'NCSBN · REx-PN frequently asked questions',url:'https://rexpn.com/faqs.page',kind:'Official exam'},
 cno:{name:'CNO · Standards & guidelines (Ontario)',url:'https://www.cno.org/standards-learning/standards-guidelines?l=en-ca',kind:'Provincial regulator'},
 bc:{name:'BCCNM · LPN practice standards (British Columbia)',url:'https://www.bccnm.ca/LPN/PracticeStandards/Pages/Default.aspx',kind:'Provincial regulator'},
 bcmed:{name:'BCCNM · Medication standard',url:'https://www.bccnm.ca/LPN/PracticeStandards/Pages/medication.aspx',kind:'Provincial regulator'},
 cdc:{name:'CDC · Core infection prevention practices',url:'https://www.cdc.gov/infection-control/hcp/core-practices/',kind:'Clinical reference'},
 isolation:{name:'CDC · Isolation precautions',url:'https://www.cdc.gov/infection-control/hcp/isolation-precautions/summary-recommendations.html',kind:'Clinical reference'},
 glucose:{name:'Diabetes Canada · Hypoglycemia in adults',url:'https://guidelines.diabetes.ca/GuideLines/media/Docs/cpg/DC-SA-14_Hypoglycemia-in-Adults-JCJD_47_7.pdf',kind:'Canadian clinical guideline'},
 nursing:{name:'OpenStax · Clinical Nursing Skills',url:'https://openstax.org/details/books/clinical-nursing-skills',kind:'Open textbook · US context'},
 med:{name:'OpenStax · Medication administration',url:'https://openstax.org/books/clinical-nursing-skills/pages/12-introduction',kind:'Further reading'},
 assessment:{name:'OpenStax · Cardiovascular nursing assessment',url:'https://openstax.org/books/clinical-nursing-skills/pages/24-3-nursing-assessment',kind:'Further reading'}
};
export const QUESTIONS=[];
function q(cat,title,stem,options,answer,why,takeaway,refs=['nursing'],exhibit=null){
 const id=cat+'-'+String(QUESTIONS.filter(q=>q.cat===cat).length+1).padStart(2,'0');
 QUESTIONS.push({id,cat,title,stem,options,answer:Array.isArray(answer)?answer:[answer],why,takeaway,refs,type:Array.isArray(answer)?'multiple':'single',exhibit});
}
q('management','A change in priority','At the start of a shift, which client should the practical nurse assess first?',[
 'A client awaiting routine discharge teaching','A client with new stridor after neck surgery','A client requesting assistance with a scheduled bath','A client with chronic knee pain unchanged from yesterday'],1,[
 'Teaching can wait until an immediate threat is addressed.','New stridor suggests upper-airway obstruction. Assess immediately and activate appropriate emergency help.','Routine personal care is important but not the highest priority here.','Unchanged chronic pain needs care, but the new airway finding is more urgent.'],'New airway compromise takes priority over stable, routine needs.');
q('management','A client declines care','A capable adult declines a prescribed dressing change after the nurse explains its purpose. What is the best next action?',[
 'Ask a relative to overrule the refusal','Proceed because the treatment is prescribed','Explore the concern, respect the decision and communicate/document it','Ask the client to leave the service'],2,[
 'A relative does not automatically replace a capable adult’s decision.','An order does not remove the need for consent.','Clarify concerns without coercion, explain relevant consequences and communicate the informed refusal.','Withholding unrelated care would be inappropriate.'],'Consent is an ongoing conversation; a capable client may refuse.',['cno','bc']);
q('management','Safe assignment','Which task is the best candidate for assignment to a trained unregulated care provider, with clear instructions and supervision consistent with local policy?',[
 'Assess new chest pain','Help a stable client with an established bathing routine','Decide whether a PRN sedative is appropriate','Teach a newly diagnosed client to adjust insulin'],1,[
 'New symptoms require nursing assessment.','A predictable personal-care task may be assigned after checking competence and client needs.','Medication-related clinical judgment cannot simply be assigned as a routine task.','Initial teaching and dose adjustment require qualified assessment and instruction.'],'Match client predictability, task, worker competence and supervision.',['cno','bc']);
q('management','Need-to-know access','A nurse notices a neighbour’s name in the electronic client list but is not involved in their care. What is appropriate?',[
 'Open the chart only to check whether the neighbour is well','Read the chart but do not discuss it','Ask a colleague to open the chart','Do not access the record without a legitimate care-related purpose'],3,[
 'Personal concern is not a care-related reason to access a chart.','Unauthorized viewing itself breaches privacy.','Using another person does not make access legitimate.','Access is limited to an authorized purpose, not curiosity.'],'Confidentiality includes appropriate access, not just avoiding disclosure.',['cno','bc']);
q('management','An unfamiliar procedure','A nurse is asked to perform a procedure they have never been trained to do. The client is stable. What is the best response?',[
 'Explain the competence gap and arrange qualified support','Attempt it because a prescriber ordered it','Ask the client for instructions','Complete it and seek training afterward'],0,[
 'Recognize limits and arrange safe care, supervision or training.','An order does not establish the nurse’s competence.','Consent and client experience do not replace professional competence.','Training after an avoidable risk does not protect the client.'],'Authority, competence and the care context all matter.',['cno','bc']);
q('management','A clear handover','Which information belongs in a concise handover for a client with worsening shortness of breath? Select all that apply.',[
 'Current respiratory findings and vital-sign trends','Relevant history and interventions already given','An unrelated disagreement from the previous shift','The specific assessment or assistance being requested','The nurse’s unverified assumption that the client is exaggerating'],[0,1,3],[
 'Current findings communicate urgency.','Relevant background and the response to care support clinical decisions.','Unrelated disputes distract from the client’s need.','A clear request closes the communication loop.','Describe observable findings rather than unsupported labels.'],'Structure handover around situation, background, assessment and recommendation.');
q('management','An error in the record','A nurse discovers an incorrect entry in an electronic client record. What should the nurse do?',[
 'Delete the record so no one sees the error','Use the approved correction process that preserves the audit trail','Ask another nurse to sign a replacement entry','Leave it unchanged because corrections look suspicious'],1,[
 'Erasing the record can destroy accountability and clinical information.','A transparent correction preserves the original entry and identifies the change.','The person responsible should make the correction under policy.','Known inaccuracies should be corrected appropriately.'],'Correct transparently; never conceal or falsify documentation.',['cno','bc']);
q('management','Language and consent','A client with limited English needs an explanation of a non-urgent invasive procedure. What is the best approach?',[
 'Speak louder and ask for a signature','Use the client’s young child to interpret','Arrange a qualified interpreter and confirm understanding','Assume a nod indicates informed agreement'],2,[
 'Volume and a signature do not establish comprehension.','A child should not carry responsibility for complex medical interpretation.','Qualified interpretation supports accurate communication and meaningful consent.','A nod may reflect politeness or confusion rather than understanding.'],'Assess understanding, not just apparent agreement.',['cno','bc']);
q('management','A client safety concern','An unregulated care provider reports that a usually alert client is suddenly confused. What should the nurse do first?',[
 'Ask them to observe until the next shift','Document dementia in the care plan','Ask the family to confirm a diagnosis','Assess the client promptly and escalate concerning findings'],3,[
 'A sudden change may signal an acute problem and should not be deferred.','New confusion does not establish dementia.','Family history helps but does not replace prompt assessment.','Acute change requires assessment for causes such as hypoxia, infection or glucose disturbance.'],'Treat new confusion as a change in condition, not normal aging.');
q('management','Planning discharge','Which action best supports a safe transition home for a client with several medication changes?',[
 'Reconcile the medication list and ask the client to explain the plan back','Hand over all previous lists without discussion','Tell the client that the pharmacy will explain everything','Discuss only the newest medication'],0,[
 'Reconciliation and teach-back help identify discrepancies and misunderstandings.','Conflicting lists can cause duplication or omission.','Pharmacy support is valuable but does not replace nursing responsibilities.','Changes, discontinued medicines and the whole regimen need consideration.'],'A safe handover includes what changed, how to take it and whom to contact.');
q('management','Unsafe workload','A nurse believes an assignment exceeds their ability to provide safe care. Which actions are appropriate? Select all that apply.',[
 'Communicate specific risks promptly to the person responsible','Leave without arranging continuity of care','Request a revised assignment or additional qualified support','Follow the escalation process and document relevant communication','Accept silently because raising concerns is unprofessional'],[0,2,3],[
 'Specific concerns allow risks to be addressed.','Leaving without continuity may expose clients to harm.','Adjusting workload or support can restore safe care.','Use organizational escalation and accurate documentation.','Raising safety concerns is part of accountability.'],'Escalate clearly and help preserve continuity of care.',['cno','bc']);
q('management','Culturally safer care','A client says previous experiences of discrimination make hospital care frightening. Which response is most therapeutic?',[
 'Everyone here is treated exactly the same','Tell me what would help you feel safer while we plan your care','You should not think about the past','I know exactly what your community needs'],1,[
 'This can dismiss the client’s experience and barriers.','Invite the client’s perspective and collaborate on concrete needs.','Past harm can affect current trust and should not be dismissed.','Assumptions replace the individual’s voice.'],'Ask, listen and share decisions rather than making cultural assumptions.');

q('safety','Hand hygiene','After removing gloves used during personal care, what should the nurse do?',[
 'Put on clean gloves without cleaning the hands','Clean the hands using the method appropriate to the situation','Clean the hands only if the gloves tore','Use lotion instead of hand hygiene'],1,[
 'Gloves do not replace hand hygiene.','Hands may be contaminated during glove removal; clean them after removal.','Contamination is not limited to visible tears.','Lotion does not remove or inactivate pathogens.'],'Gloves are a barrier, not a substitute for hand hygiene.',['cdc']);
q('safety','Routine infection prevention','Which actions support infection prevention? Select all that apply.',[
 'Clean hands before an aseptic task','Reuse a syringe for a second client if the needle is changed','Select protective equipment for the anticipated exposure','Clean shared equipment between clients','Wear the same gloves from one client to the next'],[0,2,3],[
 'Hand hygiene helps protect susceptible sites.','Changing the needle does not make syringe reuse safe.','Exposure risk determines the required protection.','Shared equipment can transmit organisms.','Gloves must be changed and hands cleaned between clients.'],'Protect each client with consistent routine practices.',['cdc']);
q('safety','A sharps injury','A nurse sustains a used-needle puncture. After immediately washing the area, what is the priority?',[
 'Wait to see whether a fever develops','Finish the shift before reporting','Promptly report and access the occupational exposure protocol','Apply glue to seal the wound'],2,[
 'Time-sensitive assessment and prophylaxis may be needed before symptoms occur.','Delaying assessment can limit options.','Prompt evaluation establishes the exposure risk and time-sensitive management.','Sealing the puncture is not appropriate exposure management.'],'Treat occupational exposure as time-sensitive.');
q('safety','Preventing a fall','An older adult becomes dizzy on standing after a new antihypertensive dose. What should the nurse do first?',[
 'Encourage them to walk quickly to improve circulation','Assist them to sit or lie safely and assess','Leave to find the chart while they stand','Apply restraints for the remainder of the day'],1,[
 'Walking while dizzy increases injury risk.','Prevent the immediate fall, then assess symptoms and vital signs.','Stay with an unstable client or ensure immediate assistance.','Restraints are not a first-line response to postural dizziness.'],'Stabilize the client before investigating the cause.');
q('safety','Airborne precautions','A client is being assessed for infectious pulmonary tuberculosis. Which placement is most appropriate when available?',[
 'A shared room with another coughing client','An airborne infection isolation room with the door closed','Any room with a fan blowing into the hallway','A positive-pressure protective room'],1,[
 'Cohorting an undiagnosed client may expose others.','Airborne isolation and appropriate respiratory protection limit spread.','Blowing air outward may disperse infectious particles.','Positive-pressure protective rooms are not the appropriate airborne containment measure.'],'Match the precautions to the suspected route of transmission.',['isolation']);
q('safety','A sterile field','During sterile dressing setup, a nonsterile sleeve touches the centre of the sterile field. What should the nurse do?',[
 'Continue if the sleeve looks clean','Cover the area with a sterile towel and continue','Treat the field as contaminated and establish a new sterile field','Spray the field with alcohol'],2,[
 'Visible cleanliness is not sterility.','Covering contamination does not reliably restore a sterile field.','A breach requires replacement of the contaminated setup.','Alcohol cannot re-sterilize a prepared field.'],'If sterility is breached, replace rather than conceal.');
q('safety','Oxygen safety','Which instructions are appropriate for a client using oxygen at home? Select all that apply.',[
 'Keep oxygen away from smoking and open flames','Use petroleum jelly around the cannula','Secure cylinders as instructed by the supplier','Follow the prescribed flow and equipment instructions','Allow visitors to smoke if a window is open'],[0,2,3],[
 'Oxygen supports combustion and increases fire risk.','Use an approved compatible product instead.','Securing cylinders reduces tipping and injury risk.','Use the prescribed settings and safe equipment procedures.','An open window does not make smoking around oxygen safe.'],'Oxygen supports fire; protect the environment as well as the client.');
q('safety','Two identifiers','Before administering a medication, which approach best verifies the client’s identity?',[
 'Use the room number and diagnosis','Ask a visitor to identify the client','Compare two approved identifiers with the record and client identification','Recognize the client from yesterday'],2,[
 'Location and diagnosis are not reliable personal identifiers.','A visitor’s recognition is not the complete identification process.','Use the organization’s approved identifiers, such as name and date of birth.','Familiarity does not replace the identification check.'],'Verify identity each time required; do not rely on location or memory.');
q('safety','A clear walking route','Which change is most useful for a client at risk of falling during night-time toileting?',[
 'Place personal items across the room to encourage exercise','Keep the route lit and clear, with the call bell and walking aid accessible','Raise the bed to its highest position','Tell the client to avoid drinking all evening'],1,[
 'Reaching and unnecessary walking can increase risk.','Accessible assistance and a clear route reduce environmental hazards.','A high bed makes transfers less safe.','Routine fluid restriction may cause harm and does not solve the access problem.'],'Plan for the activity that is likely to happen, not only the bed space.');
q('safety','A damaged medication label','The label on a prepared syringe is unreadable. What is the safest action?',[
 'Identify the drug by its colour','Ask another nurse to guess','Use it if it came from the correct room','Do not administer it; obtain a correctly identified preparation'],3,[
 'Appearance cannot reliably identify a medication or concentration.','Consensus on a guess is still unsafe.','Location does not establish the contents.','The drug and dose must be verifiable before administration.'],'An unidentified preparation is not safe to administer.',['bcmed']);
q('safety','Medication storage','A nurse finds two look-alike medication packages stored together after a near miss. What is the best response?',[
 'Report the near miss and work with the team to reduce selection risk','Discard every medicine in the storage area','Keep it quiet because no dose reached a client','Rely only on remembering the packaging difference'],0,[
 'Near-miss reporting can lead to safer storage, labels and checks.','Indiscriminate disposal does not address the underlying process.','A near miss provides useful safety information.','Memory alone is a weak safeguard.'],'Use near misses to improve the system.');
q('safety','A contaminated device','A reusable blood-pressure cuff has been used for a client on additional precautions. What is the best action before use for another client?',[
 'Wipe it on a clean sheet','Follow the required cleaning/disinfection process and product contact time','Use it immediately if no soil is visible','Cover it with a glove'],1,[
 'A sheet does not disinfect equipment.','Use the approved process appropriate to the device and exposure.','Microbial contamination may be invisible.','An improvised cover does not replace proper reprocessing.'],'Correct product, correct process, correct contact time.',['cdc']);

q('health','Teach-back','Which request best checks a client’s understanding of a new inhaler?',[
 'Do you understand everything?','Please show me how you will use this inhaler at home','You have used inhalers before, right?','Can you sign to say that teaching was completed?'],1,[
 'A yes/no question can conceal misunderstanding.','Demonstration reveals actual technique and allows supportive correction.','Prior experience does not establish correct current technique.','A signature does not measure understanding.'],'Ask clients to demonstrate or explain in their own words.');
q('health','Readiness to learn','A client reports severe postoperative pain when the nurse begins discharge teaching. What is the best initial action?',[
 'Complete the teaching quickly before giving analgesia','Give a longer handout instead','Address the pain and reassess readiness to learn','Ask the client to memorize the handout overnight'],2,[
 'Severe pain can interfere with attention and learning.','A handout alone does not resolve the barrier.','Manage the immediate symptom so teaching can be effective.','Memorization is not a substitute for accessible teaching.'],'Address barriers before adding more information.');
q('health','Infant sleep','Which advice supports safer sleep for a healthy infant?',[
 'Place the infant on the abdomen with a pillow','Place the infant on the back on a firm, flat, separate sleep surface without loose bedding','Use a sofa so the caregiver can stay close','Add a weighted blanket to reduce waking'],1,[
 'Prone positioning and pillows increase sleep-related risks.','Back sleeping on a clear, firm, flat surface supports safer sleep.','Sofas are not safe infant sleep surfaces.','Weighted blankets are not recommended for infant sleep.'],'Use a clear, firm, flat sleep space and back positioning.');
q('health','Preventing neural tube defects','A client planning pregnancy asks why folic acid is discussed before conception. What is the best explanation?',[
 'It helps reduce neural tube defects during very early development','It guarantees that the baby will have no abnormalities','It replaces the need for a balanced diet','It is only helpful after the third trimester'],0,[
 'Neural tube development occurs early, often before pregnancy is recognized.','It reduces certain risks but cannot guarantee outcomes.','Supplementation supports rather than replaces nutrition.','Waiting until late pregnancy misses the key early period.'],'Timing matters: preventive care can begin before pregnancy.');
q('health','A vaccination concern','A parent is worried about recommended childhood vaccines. Which response best supports informed decision-making?',[
 'Refuse to discuss concerns','Ask what worries them and discuss benefits and risks using current local guidance','Promise that no adverse effects are possible','Tell them all online information is false'],1,[
 'Avoiding the concern weakens communication.','Understand the concern and offer accurate, relevant information.','No intervention is entirely free of possible adverse effects.','A dismissive generalization does not help evaluate evidence.'],'Explore the concern before providing targeted education.');
q('health','Diabetes foot care','Which statements indicate appropriate foot-care understanding? Select all that apply.',[
 'I will inspect my feet daily','I will walk barefoot outdoors to toughen my skin','I will check inside my shoes before wearing them','I will report a new blister or wound promptly','I will use a heating pad directly on numb feet'],[0,2,3],[
 'Daily inspection may reveal injuries when sensation is reduced.','Barefoot walking increases injury risk.','Small objects or rough areas may injure an insensate foot.','Early review can reduce complications.','Reduced sensation increases the risk of burns.'],'Loss of protective sensation calls for daily protection and inspection.');
q('health','Smoking cessation','A client says, “I want to quit smoking, but I have failed before.” Which response is best?',[
 'If you wanted it enough you would already have stopped','What helped before, and what made it difficult? We can plan support around that','There is no benefit after many years of smoking','Do not consider medication or support'],1,[
 'Blame discourages engagement.','Explore strengths and barriers, then discuss appropriate supports.','Stopping can benefit health even after prolonged smoking.','Evidence-based supports may help and should be discussed when appropriate.'],'Treat previous attempts as information for the next plan.');
q('health','Accessible education','A client has difficulty reading the discharge instructions. Which changes may help? Select all that apply.',[
 'Use plain language and short sections','Provide a dense page of medical abbreviations','Discuss the most important actions and use teach-back','Offer suitable pictures or demonstrations','Assume the client cannot participate in decisions'],[0,2,3],[
 'Clear language reduces avoidable complexity.','Abbreviations can make instructions harder to understand.','Prioritization and teach-back check usable understanding.','Visual and practical approaches can support learning.','Reading difficulty does not remove decision-making rights.'],'Adapt the explanation while preserving autonomy.');
q('health','An older adult’s hearing','An older adult with hearing difficulty is learning wound care. What should the nurse do?',[
 'Speak from behind while organizing supplies','Shout rapidly to finish the teaching','Reduce background noise, face the client and check preferred communication supports','Ask the family to make all decisions'],2,[
 'The client may need facial cues and clear sound.','Shouting and rushing can distort communication.','Optimize the environment and individual supports.','Hearing loss does not automatically remove capacity or autonomy.'],'Make communication accessible before judging comprehension.');
q('health','Hydration during illness','A caregiver asks about a child with diarrhea. Which finding requires prompt clinical assessment?',[
 'Normal play and usual urine output','Marked lethargy with very little urine','Asking for a favourite toy','A single loose stool with normal drinking'],1,[
 'These findings are relatively reassuring in this comparison.','Reduced urine and marked lethargy may indicate significant dehydration or illness.','Interest in play is not the most concerning finding listed.','One stool without other changes is less concerning than lethargy and low output.'],'Assess the whole child, including behaviour and urine output.');
q('health','A new breast change','An adult reports a new persistent breast lump. What is the most appropriate advice?',[
 'Ignore it if it is painless','Arrange timely clinical assessment rather than waiting for routine screening','Wait until it becomes larger','Assume that a recent normal screening test excludes a problem'],1,[
 'Painless changes still need evaluation.','New symptoms need diagnostic assessment, independently of a screening schedule.','Waiting for progression can delay care.','Screening does not rule out every later or missed abnormality.'],'Screening is for asymptomatic populations; new symptoms need assessment.');
q('health','Prenatal warning signs','A pregnant client reports a new severe headache, visual changes and upper abdominal pain. What is the most appropriate advice?',[
 'Wait for the next routine prenatal visit','Arrange urgent maternity assessment','Take extra vitamins and rest for several days','Restrict all fluids without assessment'],1,[
 'This combination can signal a serious pregnancy complication.','Urgent assessment is needed for possible pre-eclampsia or another acute problem.','Vitamins do not address these warning symptoms.','Unassessed fluid restriction is inappropriate.'],'Recognize warning symptoms and escalate without diagnosing from one symptom.');

q('psychosocial','Therapeutic silence','A client begins to cry after receiving difficult news. What is the best initial response?',[
 'Stay present and invite them to share what they are feeling','Tell them everything will be fine','Change the subject immediately','Explain that other people have worse problems'],0,[
 'Presence and an open invitation support expression without pressure.','Unsupported reassurance can dismiss uncertainty and emotion.','Changing the subject blocks expression.','Comparison minimizes the client’s experience.'],'Support expression before trying to solve the emotion.');
q('psychosocial','Assessing suicide risk','A client says, “There is no point in living.” What is the best response?',[
 'You do not really mean that','Ask directly about suicidal thoughts, intent, plan and access to means','Promise to keep everything secret','Leave them alone to reflect'],1,[
 'Dismissing the statement may miss a serious risk.','Direct assessment helps determine immediate safety needs and escalation.','Safety concerns cannot always remain confidential.','Isolation is inappropriate before assessing risk.'],'Ask directly and respond to risk with appropriate safety support.');
q('psychosocial','Responding to hallucinations','A client says a voice is ordering them to hurt someone. Which response is the priority?',[
 'Agree that the voice must be obeyed','Argue that hearing voices is impossible','Assess the command, intent and immediate risk, and seek appropriate help','Ignore it unless the client acts'],2,[
 'Do not validate harmful commands.','Arguing may increase distress and does not assess safety.','Potential commands to harm require prompt risk assessment and protective action.','Waiting for harm is unsafe.'],'Assess the content and safety implications without endorsing the hallucination.');
q('psychosocial','Acute panic','A client is acutely anxious, breathing rapidly and unable to follow long instructions. What is most helpful initially?',[
 'Give a detailed lecture about anxiety mechanisms','Stay with the client, use short calm statements and assess physical safety','Ask several staff to question the client at once','Insist that they make several decisions immediately'],1,[
 'Detailed explanations may overwhelm the client in the acute phase.','A calm presence and simple communication support safety and regulation.','Multiple simultaneous interactions can increase stimulation.','Reduce immediate demands while assessing and supporting the client.'],'Match the amount of information to the client’s current ability to process it.');
q('psychosocial','Supporting a grieving client','Which response is most appropriate to “I should be over this loss by now”?',[
 'Everyone finishes grieving within six months','You must stop talking about it','There is no single timetable. How is this affecting your daily life?','The best solution is to keep busy constantly'],2,[
 'Grief does not follow a fixed universal timetable.','Silencing the client blocks assessment and support.','Acknowledge variation and assess functioning, support and safety.','Activity may help some people but is not a universal solution.'],'Individualize support and assess impact rather than imposing a timetable.');
q('psychosocial','Responding to a delusion','A client says, “The television is sending secret instructions only to me.” Which response is best?',[
 'Yes, I can hear the instructions too','That is ridiculous','I do not receive those messages, but I can see this is distressing for you','Prove it by writing every message down'],2,[
 'This reinforces the delusional belief.','Ridicule damages trust.','State your reality while acknowledging the emotion.','This may deepen engagement with the delusion instead of addressing distress.'],'Validate the feeling, not the false belief.');
q('psychosocial','De-escalation','Which actions may help when a client is becoming verbally agitated but has not assaulted anyone? Select all that apply.',[
 'Use a calm tone and simple choices','Block the exit to force the client to listen','Maintain appropriate personal space','Reduce unnecessary stimulation and call for support as needed','Threaten punishment to gain compliance'],[0,2,3],[
 'Calm, clear choices can support a sense of control.','Blocking escape may escalate fear and risk.','Personal space helps reduce perceived threat.','A safer environment and timely support can prevent escalation.','Threats can intensify agitation.'],'De-escalation combines respect, space and safety planning.');
q('psychosocial','Alcohol withdrawal','A hospitalized client who abruptly stopped heavy alcohol use develops tremor, sweating and agitation. What should the nurse do?',[
 'Assume the client is simply uncooperative','Assess promptly and escalate for withdrawal management under protocol','Provide alcohol without an order','Delay assessment until hallucinations occur'],1,[
 'These symptoms can reflect a medical complication.','Withdrawal can progress to seizures or delirium and needs timely management.','Unordered alcohol is not an appropriate independent response.','Waiting for severe features may allow preventable deterioration.'],'Substance withdrawal can be an acute physiological emergency.');
q('psychosocial','Trauma-informed care','Which actions support trauma-informed care during a physical assessment? Select all that apply.',[
 'Explain each step and ask permission before touch','Tell the client to comply without questions','Offer reasonable choices and a way to pause','Protect privacy and ask about preferences','Require disclosure of past trauma before care'],[0,2,3],[
 'Predictability and permission support safety.','Coercive communication can recreate a loss of control.','Choice and a pause signal support autonomy.','Privacy and preferences help build trust.','Clients do not need to disclose trauma to receive respectful care.'],'Create safety and choice without requiring a trauma history.');
q('psychosocial','Dementia and distress','A client with dementia repeatedly asks to go home. What is a helpful response?',[
 'Argue until they remember where they live','Acknowledge the wish and explore comfort or familiar routines','Tell them they asked that question ten times','Restrain them immediately for asking'],1,[
 'Argument can increase distress without restoring memory.','Address the emotion and possible unmet needs.','Pointing out repetition may shame or frustrate the client.','Asking to go home does not itself justify restraints.'],'Look for the need behind the repeated request.');
q('psychosocial','Professional boundaries','A client offers the nurse an expensive personal gift in return for extra attention. What is the best response?',[
 'Accept privately so colleagues do not know','Accept if the client signs a consent form','Discuss the meaning respectfully and follow professional boundary and organizational guidance','Provide extra attention only after accepting'],2,[
 'Secrecy can signal a boundary concern.','A signature does not eliminate the power imbalance.','Maintain a therapeutic relationship without preferential treatment or exploitation.','Care should not be contingent on gifts.'],'Warmth and professional boundaries are compatible.',['cno','bc']);
q('psychosocial','Possible intimate-partner violence','A client’s partner answers every question and refuses to leave. The client seems fearful. What should the nurse arrange when safe?',[
 'A private conversation with the client using a safe, routine approach','A confrontation with the partner in front of the client','A promise that reporting is never required','An assumption that the client wants the relationship ended'],0,[
 'Privacy supports assessment, choice and safety planning.','Confrontation may increase danger.','Explain confidentiality and its applicable limits accurately.','Avoid imposing decisions; assess needs and support autonomy.'],'Create a safe opportunity to talk privately before making assumptions.');

q('basic','Swallowing difficulty','A client coughs repeatedly and develops a wet voice while drinking after a stroke. What should the nurse do first?',[
 'Encourage larger sips to finish quickly','Stop oral intake and seek assessment according to the swallowing protocol','Give thin liquid through a straw','Lay the client flat and continue feeding'],1,[
 'Larger volumes can increase aspiration risk.','Stop the exposure and obtain an appropriate swallowing assessment.','A straw and thin liquids are not automatically safe.','Supine feeding can increase aspiration risk.'],'New signs of swallowing difficulty require reassessment before more intake.');
q('basic','Pressure injury prevention','Which actions support pressure injury prevention for an immobile client? Select all that apply.',[
 'Inspect skin and reassess risk','Massage persistent redness over a bony prominence','Individualize repositioning and offload heels','Address moisture and nutritional needs','Assume a special mattress removes the need for assessment'],[0,2,3],[
 'Inspection detects changes and helps tailor the plan.','Massage can further injure vulnerable tissue.','Reducing prolonged pressure is a central preventive measure.','Moisture and nutrition affect skin integrity.','Support surfaces supplement, not replace, ongoing care.'],'Use an individualized bundle rather than relying on one device.');
q('basic','Supporting independence','A client can wash their face and upper body but needs help with the legs. What is the best approach?',[
 'Perform all care because it is faster','Encourage the client’s abilities and assist where needed','Leave the client to manage all washing alone','Tell the client not to try until fully recovered'],1,[
 'Doing everything can unnecessarily reduce independence.','Match assistance to ability and preferences.','Unsupported tasks may be unsafe or inaccessible.','Partial independence can be preserved during recovery.'],'Help enough to make care safe while preserving what the client can do.');
q('basic','Pain assessment','An alert client reports pain of 8/10 while appearing calm. What should guide the assessment?',[
 'Dismiss the rating because the client is not crying','Use the client’s report and assess location, character, function and associated findings','Use only heart rate to decide if pain is real','Wait for a family member to confirm the pain'],1,[
 'Behaviour varies and cannot exclude pain.','Self-report is central when the client can communicate; assess the broader context.','Vital signs alone do not measure pain reliably.','Family input does not replace the capable client’s report.'],'A calm appearance does not invalidate reported pain.');
q('basic','Evaluating comfort','After an ordered analgesic and repositioning, what is the most useful next step?',[
 'Assume the intervention worked','Reassess pain, function and adverse effects at an appropriate interval','Document success before reassessing','Avoid asking because it may remind the client of pain'],1,[
 'Effectiveness and harms require reassessment.','Evaluate both relief and safety, considering route and expected onset.','Document findings actually assessed.','Reassessment is necessary to adjust the care plan.'],'An intervention is incomplete until its effect is evaluated.');
q('basic','Preventing constipation','Which plan best supports bowel function in a stable client without fluid or dietary restrictions?',[
 'Increase immobility to conserve energy','Use regular toileting opportunities, suitable fluids, fibre and activity','Ignore the urge to defecate until bedtime','Use a laxative after every meal without an order or plan'],1,[
 'Immobility can contribute to constipation.','Multiple modifiable factors can support bowel regularity.','Suppressing the urge may worsen constipation.','Medication use should follow an assessed, appropriate plan.'],'Tailor bowel care to the person and any restrictions.');
q('basic','A urinary drainage system','Which actions help maintain a safely functioning indwelling urinary drainage system? Select all that apply.',[
 'Keep the bag below bladder level without resting it on the floor','Disconnect the tubing routinely to inspect it','Prevent dependent loops and kinks that obstruct flow','Maintain the closed system unless a clinical indication requires change','Raise the bag above the bladder during transfers'],[0,2,3],[
 'This supports drainage and reduces contamination risk.','Unnecessary disconnection increases contamination risk.','Unobstructed flow helps avoid urinary stasis.','Preserve the closed system under the care protocol.','Backflow can occur when the bag is raised.'],'Preserve closed, unobstructed dependent drainage.');
q('basic','A safe transfer','A client cannot bear weight reliably. What is the safest plan for moving them from bed to chair?',[
 'Have one nurse lift the client under the arms','Use the assessed transfer plan and appropriate lift with trained assistance','Ask the client to jump toward the chair','Let the strongest family member decide the method'],1,[
 'Manual lifting can injure both client and worker.','Match equipment and assistance to assessed ability and policy.','This creates a major fall risk.','Transfer safety requires assessment, training and appropriate equipment.'],'Choose transfer support from ability, not from staff strength.');
q('basic','Improving sleep','Which intervention is most appropriate for a stable inpatient reporting interrupted sleep?',[
 'Cluster suitable care activities and reduce avoidable noise and light','Wake the client hourly for nonessential conversation','Offer caffeine near bedtime','Use a sedative before assessing possible causes'],0,[
 'Reducing avoidable disruption supports rest while maintaining necessary monitoring.','Unnecessary waking worsens fragmentation.','Caffeine may impair sleep.','Assess discomfort, anxiety, environment and other contributors first.'],'Reduce modifiable disruptions without omitting necessary monitoring.');
q('basic','Oral care and aspiration risk','A dependent client with reduced alertness needs oral hygiene. What is most appropriate?',[
 'Pour a cup of water into the mouth','Use an assessed positioning and suction-assisted oral-care approach under protocol','Omit oral care entirely','Ask the client to gargle despite being unable to follow instructions'],1,[
 'Uncontrolled fluid can be aspirated.','Adapt oral care to airway protection and swallowing ability.','Poor oral hygiene carries its own risks.','Gargling requires reliable alertness and airway protection.'],'Modify the technique to the client’s airway and swallowing risk.');
q('basic','Nutrition support','An older client has poor appetite and becomes fatigued during meals. Which plan is most appropriate?',[
 'Remove preferred foods to encourage discipline','Assess causes and offer small, suitable nutrient-dense meals with assistance as needed','Assume this is unavoidable with age','Give only water between meals and no snacks'],1,[
 'Preferences can support intake and should be considered.','Assess symptoms, swallowing, dental issues and support needs; individualize the plan.','Low intake warrants assessment rather than dismissal.','Unnecessary restrictions can worsen intake.'],'Low intake is an assessment cue, not an inevitable feature of aging.');
q('basic','Comfort at end of life','A dying client has a dry mouth but cannot safely swallow. What is the most appropriate comfort measure?',[
 'Force oral fluids to meet a daily target','Provide frequent gentle mouth care and lip moisture using appropriate products','Withhold all mouth care','Tell the family that comfort care is no longer useful'],1,[
 'Forcing fluids can cause aspiration and distress.','Mouth care can relieve dryness without forcing unsafe intake.','Dryness and discomfort still deserve care.','Comfort remains an active priority.'],'Comfort-focused care continues even when oral intake is unsafe.');

q('pharmacology','Medication reconciliation','A client’s home medication list differs from the admission orders. What should the nurse do?',[
 'Automatically administer both lists','Clarify and reconcile discrepancies with the appropriate team before uncertain doses','Discard the home list','Assume all omissions are intentional'],1,[
 'Duplicate therapy can be harmful.','Determine what is intended and resolve discrepancies.','The home list is important information for reconciliation.','Omissions may be intentional or accidental and need clarification.'],'Resolve discrepancies rather than guessing the intended regimen.',['bcmed']);
q('pharmacology','Insulin and a delayed meal','A client’s meal is unexpectedly delayed just before a scheduled rapid-acting mealtime insulin dose. What should the nurse do?',[
 'Give the dose and assume food will arrive','Check glucose and coordinate the dose with meal availability and the prescribed plan','Double the next dose','Cancel every insulin dose for the day'],1,[
 'Giving mealtime insulin without expected carbohydrate intake may cause hypoglycemia.','Assess glucose and clarify timing under the order/protocol rather than making an unsupported change.','Doubling creates an unsafe dosing change.','Other insulin components may still be required; do not cancel indiscriminately.'],'Link mealtime insulin timing to the actual meal and prescribed regimen.');
q('pharmacology','Warfarin teaching','Which statement by a client taking warfarin indicates appropriate understanding?',[
 'I will stop all vitamin K foods permanently','I will keep vitamin K intake reasonably consistent and attend INR monitoring','I can start any herbal product without checking','I should double the next dose if I forget one'],1,[
 'Consistency is generally more useful than eliminating nutritious foods.','Diet changes and INR results affect management; follow the prescribed plan.','Herbal products may interact and should be reviewed.','A missed dose should be managed using specific instructions, not automatic doubling.'],'Think consistency, interaction checks and monitoring.');
q('pharmacology','Opioid-related deterioration','After an opioid dose, a client is difficult to arouse with slow, shallow respirations. What is the priority?',[
 'Allow uninterrupted sleep','Withhold further opioid, call for urgent help and support airway/breathing; follow reversal protocol','Give another dose for presumed discomfort','Offer a drink to wake them'],1,[
 'Reduced alertness with hypoventilation can be life-threatening.','Support ventilation and activate emergency care; give reversal treatment as authorized.','More opioid may worsen respiratory depression.','Oral intake is unsafe with reduced alertness.'],'Respiratory depression requires immediate action, not routine reassessment later.');
q('pharmacology','A potassium order','A nurse receives an order for concentrated potassium chloride by direct IV push. What should happen?',[
 'Administer slowly over one minute','Clarify the unsafe order and do not give direct IV push potassium','Dilute in a small flush and administer','Give it if the client’s potassium is low'],1,[
 'Direct IV push potassium can cause fatal dysrhythmias.','Potassium requires an appropriate diluted infusion under controlled administration policy.','A small flush does not make the route safe.','A low laboratory result does not justify an unsafe route.'],'The need for replacement never makes direct IV push potassium safe.');
q('pharmacology','A suspected medication reaction','Soon after an antibiotic begins, a client develops wheezing, facial swelling and hypotension. What is the priority?',[
 'Slow the antibiotic and reassess next hour','Stop the infusion, activate emergency help and follow the anaphylaxis protocol','Reassure the client this is an expected effect','Wait for a skin rash before acting'],1,[
 'Continuing the exposure and delaying action risks further deterioration.','This suggests anaphylaxis: stop exposure and initiate emergency assessment/treatment, including epinephrine as authorized.','Airway and circulatory compromise are not routine expected effects.','Anaphylaxis can occur without a rash.'],'Anaphylaxis is an airway and circulation emergency.');
q('pharmacology','Checking a medication order','Which findings require clarification before administration? Select all that apply.',[
 'The dose is missing','A documented allergy conflicts with the prescribed medication','The client’s identity has been verified','The route is unclear','The prescription and available concentration have been safely verified'],[0,1,3],[
 'A dose must be clear and appropriate.','Clarify the allergy and treatment plan before exposing the client.','Identity verification is a completed safety check, not itself a discrepancy.','The intended route must be unambiguous.','Verified information does not itself require clarification.'],'Clarify omissions, ambiguity and relevant contraindications.',['bcmed']);
q('pharmacology','IV infiltration','A peripheral IV site becomes cool, swollen and painful while a non-vesicant fluid is infusing. What should the nurse do first?',[
 'Increase the rate to clear the line','Stop the infusion and assess/manage the site under protocol','Apply pressure while continuing the infusion','Ignore it if the pump has not alarmed'],1,[
 'More fluid may worsen tissue swelling.','Stop further fluid entry and assess the suspected infiltration.','Continuing the infusion can increase injury.','A pump alarm does not reliably identify infiltration.'],'Assess the client and site; do not depend on the pump alarm.');
q('pharmacology','Safe abbreviations','Which medication dose notation is clearest and safest?',[
 '.5 mg','0.5 mg','0.50. mg','5.0 mg when 0.5 mg is intended'],1,[
 'A missing leading zero increases the risk of misreading.','Use a leading zero before a decimal and avoid unnecessary trailing zeros.','Malformed punctuation makes the dose ambiguous.','This represents a tenfold larger dose than intended.'],'Use a leading zero; avoid unnecessary trailing zeros.');
q('pharmacology','Extended-release tablets','A client with swallowing difficulty has an extended-release tablet prescribed. What is the best action?',[
 'Crush it into applesauce without checking','Ask the pharmacist/prescriber about a suitable alternative or approved administration method','Dissolve it in hot water','Split all tablets into quarters'],1,[
 'Crushing may destroy controlled release and alter absorption.','Verify formulation-specific handling and arrange an appropriate option.','Dissolving can also alter release and stability.','Splitting suitability depends on the particular formulation.'],'The dosage form matters as much as the drug name.');
q('pharmacology','Checking after a diuretic','A client taking a loop diuretic reports weakness and palpitations. Which prescribed laboratory test is particularly relevant to review promptly?',[
 'Serum potassium','A remote blood-group result','A routine allergy skin test','A stool screening test'],0,[
 'Loop diuretics can lower potassium; electrolyte disturbance can contribute to weakness and dysrhythmia.','Blood group does not explain these new symptoms.','An allergy test is not the relevant immediate investigation.','Stool screening does not assess the likely electrolyte risk.'],'Connect medication effects with new symptoms and monitoring.');
q('pharmacology','Medication teaching','Which instructions support safe use of a new medicine at home? Select all that apply.',[
 'Explain its purpose and prescribed schedule','Explain important adverse effects and when to seek help','Tell the client to share unused doses with relatives','Check for understanding and relevant nonprescription products','Tell the client to stop every other medicine automatically'],[0,1,3],[
 'Purpose and timing support appropriate use.','The client needs clear instructions about concerning effects.','Prescriptions are individual and should not be shared.','Teach-back and interaction review identify safety issues.','Changes to other treatment require an appropriate plan.'],'Teach the purpose, practical use, monitoring and escalation plan.');

q('risk','A trend in deterioration','A postoperative client’s observations are shown below. What is the best response?',[
 'Continue routine observations only','Assess promptly and escalate possible bleeding or circulatory deterioration','Offer sleep medication','Document improvement because the temperature is normal'],1,[
 'The combination shows a concerning trend.','Falling pressure with rising pulse and reduced urine suggests compromised perfusion.','Sedation may mask deterioration and does not treat the cause.','One normal observation does not cancel several abnormal trends.'],'Interpret the pattern, not a single reassuring value.',['assessment'],[['Observation','08:00','10:00'],['Heart rate','84/min','118/min'],['Blood pressure','122/76 mmHg','88/54 mmHg'],['Urine output','45 mL/hour','15 mL/hour']]);
q('risk','Critical potassium','A client’s potassium result is 6.4 mmol/L (reference 3.5–5.0 mmol/L). What should the nurse do?',[
 'Offer potassium-rich food','Promptly assess and notify the responsible clinician; arrange cardiac monitoring as indicated','Ignore it if the client has no symptoms','Wait for the next routine clinic appointment'],1,[
 'Additional potassium may worsen the problem.','Marked hyperkalemia can cause dangerous cardiac effects even before obvious symptoms.','Absence of symptoms does not establish safety.','This result requires urgent review, with confirmation when appropriate without avoidable delay.'],'Potentially dangerous laboratory results require timely escalation.');
q('risk','After a fall','A client is found on the floor after an unwitnessed fall. What should happen before routinely lifting the client?',[
 'Assess responsiveness, immediate threats and possible injury, and summon help','Move them quickly to avoid embarrassment','Ask them to stand and prove they are uninjured','Complete the incident report first'],0,[
 'Assess injury and immediate danger before selecting a safe transfer method.','Unassessed movement could worsen an injury.','The client’s ability and injuries are not yet established.','Clinical safety takes priority over reporting paperwork.'],'Assess first unless the environment creates an immediate danger requiring movement.');
q('risk','Postoperative prevention','Which actions can help reduce postoperative complications when appropriate to the client and care plan? Select all that apply.',[
 'Encourage prescribed deep breathing and supported coughing','Assist early mobilization when safe','Maintain complete bed rest for all clients','Assess pain and support adequate analgesia','Ignore new calf swelling until discharge'],[0,1,3],[
 'These measures can support lung expansion and secretion clearance.','Movement helps reduce risks associated with immobility.','Unnecessary immobility increases complications.','Pain control can improve breathing and mobility.','New unilateral swelling needs prompt assessment.'],'Support breathing and mobility while monitoring new symptoms.');
q('risk','A changing cast assessment','A client with a new lower-leg cast reports worsening pain despite analgesia and numb toes. What is the priority?',[
 'Reassure them that severe pain is always expected','Assess neurovascular status and seek urgent review','Insert an object under the cast','Wait until the cast is removed at follow-up'],1,[
 'Increasing pain and altered sensation may indicate compromised circulation or compartment pressure.','Prompt neurovascular assessment and escalation protect the limb.','Inserting objects can injure the skin and does not address the cause.','A delayed review may allow serious injury.'],'Pain out of proportion and new sensory changes are warning findings.');
q('risk','Before a procedure','A client scheduled for a non-urgent procedure says, “I signed, but I do not know what they are going to do.” What should the nurse do?',[
 'Treat the signature as sufficient','Pause preparation and arrange clarification of understanding and consent with the appropriate clinician','Give sedation to reduce questions','Ask a visitor to sign another form'],1,[
 'A signature alone does not establish informed consent.','Resolve the concern before proceeding with an elective procedure.','Sedation does not resolve a lack of informed understanding.','A visitor is not automatically authorized to consent.'],'Unresolved understanding requires clarification, even after signing.',['cno','bc']);
q('risk','Anticoagulation and a head injury','A client taking an anticoagulant reports hitting their head and now has a worsening headache. What is the most appropriate action?',[
 'Suggest sleeping it off','Arrange urgent clinical assessment','Stop all medicines permanently','Wait until visible bruising appears'],1,[
 'Worsening symptoms can indicate intracranial bleeding.','Head injury with anticoagulation and new symptoms requires urgent assessment.','Long-term medication decisions require an appropriate clinician.','Serious bleeding can occur without visible external bruising.'],'Internal bleeding may not be visible.');
q('risk','Monitoring fluid status','Which findings are useful when assessing a client for fluid overload? Select all that apply.',[
 'Change in weight measured consistently','New breathlessness or crackles','An isolated old height measurement','Peripheral edema and intake/output trends','The colour of the client’s clothing'],[0,1,3],[
 'Consistent weight trends can reflect changes in fluid balance.','Pulmonary findings may suggest congestion and require assessment.','An old height does not show a new fluid change.','Combine these findings with the broader clinical assessment.','Clothing colour has no diagnostic relevance.'],'Use several converging findings to assess a fluid trend.');
q('risk','A wound change','A postoperative wound develops spreading redness, warmth, increasing pain and purulent drainage. What is appropriate?',[
 'Document normal healing only','Assess the client including systemic signs and report possible infection','Seal the wound with household adhesive','Ignore it if the dressing hides the drainage'],1,[
 'This pattern is concerning for infection rather than uncomplicated healing.','Assess locally and systemically and communicate for timely management.','Household products are not appropriate wound treatment.','Concealing the finding delays assessment and care.'],'Look beyond the wound for signs of systemic illness.');
q('risk','A transfusion reaction','Shortly after a blood transfusion starts, a client develops chills, back pain and dyspnea. What is the priority?',[
 'Increase the rate to finish the unit','Stop the transfusion and activate the transfusion-reaction protocol with urgent assessment','Give the next unit instead','Record it only at the end of the shift'],1,[
 'Increasing exposure may worsen a reaction.','Stop the suspected exposure, assess urgently and follow protocol for access, notification and investigation.','Another unit does not resolve the reaction.','Delaying communication can endanger the client.'],'Stop a suspected transfusion reaction promptly and follow the emergency protocol.');
q('risk','An acute neurological change','A client suddenly develops facial asymmetry and arm weakness. Which information is especially important to determine while urgent help is activated?',[
 'The last time the client was known to be at their usual neurological baseline','The date of their last dental appointment','Their preferred discharge meal','The number of visitors last week'],0,[
 'Last-known-well time informs time-sensitive stroke assessment and treatment options.','This is not the time-critical information.','Meal preferences can wait.','Visitor history does not determine the acute stroke timeline.'],'Activate urgent care and establish last known well without delaying help.');
q('risk','Pulse oximeter limitations','A pulse oximeter reads 82% on a cold finger, but the client is alert and speaking comfortably. What is best?',[
 'Ignore the reading permanently','Immediately give a sedative','Assess the client and verify sensor placement/perfusion while responding to any clinical distress','Assume all low readings are artifacts'],2,[
 'A low result needs assessment and verification.','Sedation does not resolve uncertainty and may impair breathing.','Integrate clinical assessment with signal quality; do not delay urgent support if distress is present.','Artifact is possible but cannot be assumed.'],'Check the person and the measurement together.');

q('adaptation','Hypoglycemia while alert','An adult with diabetes is alert, can swallow safely and has mild symptoms with glucose 3.5 mmol/L. Under the treatment protocol, what is appropriate?',[
 'Give rapid-acting insulin','Give 15 g of fast-acting carbohydrate and recheck glucose in 15 minutes','Give only water','Wait an hour before rechecking'],1,[
 'Insulin would lower glucose further.','For mild to moderate hypoglycemia, fast-acting carbohydrate and reassessment are appropriate; repeat according to protocol if still low.','Water does not provide glucose.','A long delay can allow progression.'],'Treat, recheck and address the cause; oral treatment requires safe swallowing.',['glucose']);
q('adaptation','A seizure','A client begins a generalized tonic-clonic seizure in bed. What should the nurse do?',[
 'Force a spoon between the teeth','Hold the limbs down firmly','Protect from injury, time the seizure and support airway/safety according to protocol','Give oral water during the seizure'],2,[
 'Objects in the mouth can injure the client and obstruct the airway.','Forceful restraint can cause injury.','Protect the head/environment, seek help and manage airway safely; escalate prolonged or repeated seizures.','Oral intake is unsafe during impaired consciousness.'],'Protect, observe and support safety; do not restrain or put objects in the mouth.');
q('adaptation','Possible sepsis','An adult with a suspected infection becomes confused, breathes rapidly and has a blood pressure of 84/48 mmHg. What is the priority?',[
 'Wait for the culture result before reporting','Activate urgent assessment and treatment for possible sepsis/shock','Encourage the client to walk to the bathroom','Provide discharge instructions'],1,[
 'Culture results must not delay recognition and emergency escalation.','Infection with organ dysfunction and hypotension needs urgent care.','Mobilizing an unstable client is unsafe.','The client is acutely unstable.'],'Treat deterioration with suspected infection as time-critical.');
q('adaptation','Acute chest pain','A client develops new crushing chest discomfort with sweating and shortness of breath. What is the most appropriate action?',[
 'Have them walk to relieve anxiety','Promptly assess and activate the chest-pain/emergency pathway','Wait to see if lunch improves the pain','Assume it is indigestion because the client is young'],1,[
 'Exertion can worsen an acute cardiac problem.','This symptom pattern requires urgent assessment and protocol-based care.','Waiting can delay time-sensitive treatment.','Age alone cannot safely rule out a serious cause.'],'Respond to the pattern and urgency rather than making a reassuring assumption.');
q('adaptation','An unresponsive client','A nurse finds an adult unresponsive and not breathing normally. What is the appropriate immediate response?',[
 'Leave to complete documentation','Activate emergency response and begin the appropriate resuscitation sequence, using an AED as soon as available','Offer water','Wait for a family member’s interpretation'],1,[
 'Emergency care takes priority.','Unresponsiveness with absent/abnormal breathing requires immediate assessment and resuscitation under current BLS guidance.','Oral intake is unsafe.','Waiting delays life-saving action.'],'Recognize arrest, call for help and follow current BLS/AED procedures.');
q('adaptation','Acute shortness of breath','A client becomes severely breathless while lying flat and coughs pink frothy sputum. What is the priority?',[
 'Encourage extra oral fluids','Position to support breathing as tolerated, activate urgent help and assess/support oxygenation under protocol','Keep flat and leave to find the chart','Offer a meal to improve strength'],1,[
 'Extra fluids can worsen pulmonary fluid overload.','This may signal acute pulmonary edema and requires urgent respiratory/circulatory care.','Flat positioning may worsen breathing and leaving delays help.','Eating during respiratory distress increases risk.'],'Severe respiratory distress takes priority over routine care.');
q('adaptation','Suspected pulmonary embolism','A postoperative client suddenly develops dyspnea, pleuritic chest pain and tachycardia. What is the best response?',[
 'Massage the calves','Activate urgent assessment, limit exertion and support breathing as indicated','Tell them to walk it off','Reassess at the next scheduled round'],1,[
 'Massage does not treat a suspected embolism and is inappropriate.','This pattern may indicate pulmonary embolism and needs prompt assessment.','Exertion is unsafe during acute cardiopulmonary distress.','A scheduled delay is inappropriate.'],'Sudden postoperative cardiopulmonary symptoms require urgent escalation.');
q('adaptation','Postpartum bleeding','Soon after birth, a client has rapidly increasing vaginal bleeding, pallor and dizziness. What is the priority?',[
 'Count the pads again in two hours','Activate the obstetric emergency response and immediately assess/support circulation under protocol','Encourage unassisted walking','Explain that all postpartum bleeding is normal'],1,[
 'Rapid bleeding with symptoms requires immediate action.','Possible postpartum hemorrhage is a time-critical emergency.','Dizziness and blood loss create a fall and perfusion risk.','Some bleeding is expected, but this pattern is concerning.'],'Judge bleeding by rate and the client’s condition, not by its presence alone.');
q('adaptation','Sudden airway obstruction','A conscious adult cannot speak, breathe or cough effectively after taking a bite of food. What should the nurse do?',[
 'Offer water to wash the food down','Encourage the client to lie down and wait','Activate help and give the appropriate adult choking interventions according to current resuscitation training','Perform a blind finger sweep'],2,[
 'Water may worsen obstruction and cannot be swallowed safely.','Waiting delays intervention for a severe obstruction.','An ineffective cough and inability to speak indicate severe obstruction requiring immediate trained action.','A blind sweep may push the object deeper.'],'Distinguish an effective cough from a severe obstruction and act promptly.');
q('adaptation','Recognizing dehydration','Which findings can indicate significant volume depletion in an adult? Select all that apply.',[
 'Reduced urine output','Tachycardia with postural symptoms','A stable pattern of moist mucosa and usual urine output','Hypotension with worsening weakness','Sudden improvement in all vital signs'],[0,1,3],[
 'Reduced output may reflect impaired perfusion and needs assessment.','These may be compensatory and orthostatic signs.','This is relatively reassuring in the stated comparison.','This combination may indicate impaired circulation.','Improved observations do not support worsening volume depletion.'],'Combine losses, intake, vital signs and urine trends.');
q('adaptation','Severe hypoglycemia','A client with diabetes is unresponsive and has a glucose of 2.1 mmol/L. Which action is appropriate?',[
 'Pour juice into the mouth','Protect the airway, activate urgent help and give authorized non-oral glucose treatment under protocol','Wait for the client to wake before treating','Give scheduled mealtime insulin'],1,[
 'Oral fluid can be aspirated when consciousness is impaired.','Severe hypoglycemia requires urgent treatment using an appropriate non-oral route, such as IV glucose or glucagon as authorized.','Delay can cause serious harm.','Insulin would worsen hypoglycemia.'],'Consciousness and swallowing safety determine whether oral treatment is suitable.',['glucose']);
q('adaptation','Recognizing respiratory distress','Which observations warrant prompt assessment for respiratory deterioration? Select all that apply.',[
 'New inability to finish a sentence because of breathlessness','Marked use of accessory muscles','Stable comfortable breathing at baseline','New confusion with respiratory symptoms','Normal conversation without symptoms'],[0,1,3],[
 'Breathlessness that limits speech suggests significant distress.','Accessory muscle use can reflect increased work of breathing.','Stable baseline breathing is not an acute warning sign here.','Altered mental status can occur with severe hypoxia or hypercapnia.','This does not itself suggest deterioration.'],'Work of breathing and mental status matter as well as oxygen saturation.');

// Additional application items use closer distractors and more contextual judgement.
q('management','Which report changes the priority?','Four clients are receiving morning care. Which report requires the practical nurse to interrupt routine medication preparation and assess immediately?',[
 'A client with stable COPD is at their prescribed oxygen target and reports usual exertional breathlessness',
 'A client taking an anticoagulant reports a new severe headache and vomiting after a fall last night',
 'A client awaiting discharge has questions about a medication stopped yesterday',
 'A client with arthritis requests their prescribed analgesic before physiotherapy'],1,[
 'A stable finding at the client’s baseline needs ongoing care but is not the most urgent change.',
 'Anticoagulation, recent head trauma and new neurological symptoms raise concern for intracranial bleeding.',
 'Reconciliation and education are needed, but acute deterioration takes priority.',
 'Pre-activity analgesia supports mobility but can wait briefly while the acute risk is assessed.'
],'Compare change from baseline and potential harm, not diagnosis labels alone.');
q('management','Assignment after a change','A care provider has safely assisted a client with walking for several days. Today the client reports new weakness and nearly falls when standing. What should the nurse do before the next walk?',[
 'Continue the same assignment because the worker is experienced',
 'Ask the worker to document the change after the next walk',
 'Reassess the client and revise the assistance and supervision plan',
 'Ask a second unregulated worker to join without further assessment'],2,[
 'Worker competence does not remove the need to reassess a changed client.',
 'Documentation alone does not establish whether another walk is safe.',
 'New weakness changes predictability and may change the required equipment or level of support.',
 'More people do not substitute for an assessment of the new problem.'
],'An appropriate assignment can become inappropriate when the client changes.',['cno','bc']);
q('management','An unresolved safety concern','A nurse reports a sudden deterioration to the responsible clinician but receives instructions for routine observation only. The client continues to worsen. What is the best next action?',[
 'Follow the original instruction until the next scheduled round',
 'Continue immediate assessment/support and escalate through the urgent-response chain',
 'Ask a colleague to document disagreement but make no further contact',
 'Wait for a family member to request a second opinion'],1,[
 'A continuing change requires renewed communication and escalation.',
 'Clear escalation with current findings is needed when the initial response does not address the evolving risk.',
 'Documentation does not replace action to obtain appropriate clinical help.',
 'The nurse’s responsibility to act does not depend on a family request.'
],'Escalation continues until an unresolved safety concern receives an appropriate response.',['cno','bc']);
q('management','A treatment disagreement','A capable adult accepts symptom treatment but refuses a proposed blood transfusion. A family member insists it should proceed. What should guide the nurse’s response?',[
 'The family’s preference takes priority because the treatment could be life-saving',
 'The client’s informed decision should be respected while alternatives and concerns are addressed',
 'The nurse should ask the family to sign on behalf of the client',
 'Any disagreement automatically means the client lacks decision-making capacity'],1,[
 'Potential benefit does not by itself override a capable client’s informed refusal.',
 'Support understanding, communicate the refusal and collaborate on acceptable alternatives.',
 'A capable client’s decision is not replaced merely because a relative disagrees.',
 'A choice others disagree with is not itself evidence of incapacity.'
],'Capacity and informed choice matter more than agreement with the recommendation.',['cno','bc']);
q('management','A factual progress note','Which progress note most clearly communicates an observed response to pain treatment?',[
 'Client doing much better; no concerns',
 'Client complained too much before the medicine',
 'Thirty minutes after the prescribed IV analgesic, client reports pain decreased from 8/10 to 3/10; alert, respirations 16/min',
 'Pain medication effective as usual'],2,[
 'This lacks specific findings and response measures.',
 'A judgmental label does not describe the clinical response.',
 'The entry links intervention timing, client report and a relevant safety observation.',
 'This asserts effectiveness without supporting observations.'
],'Document specific assessments and responses rather than vague judgments.',['cno','bc']);
q('management','What does a signature mean?','A client signs a procedure form, then asks whether they can change their mind before it begins. What is the best response?',[
 'The signature makes the decision final',
 'Only the person performing the procedure can discuss withdrawal',
 'You can withdraw consent; let us discuss your concerns and notify the team',
 'Withdrawal is allowed only if a family member agrees'],2,[
 'Consent may be withdrawn; a signature does not make it irrevocable.',
 'The nurse should respond to the concern and help communicate it promptly.',
 'Acknowledge the right to reconsider and support an informed discussion.',
 'A capable client does not need family permission to withdraw consent.'
],'Consent remains active before and during care.',['cno','bc']);
q('management','Clarifying a telephone order','Under a policy allowing telephone medication orders, the nurse cannot clearly hear the dose. What is the most appropriate next step?',[
 'Select the usual adult dose and document it',
 'Ask the prescriber to repeat and clarify, then read back the complete order according to policy',
 'Record both possible doses and ask the next shift to choose',
 'Use the dose administered to another client with the same diagnosis'],1,[
 'A typical dose is not verification of this client’s intended order.',
 'Clarification and read-back help establish a complete, accurate order before implementation.',
 'An ambiguous order should not be left unresolved for another shift.',
 'A diagnosis does not determine an identical dose for every client.'
],'Resolve communication ambiguity at the source.',['bcmed','cno']);
q('management','A request to disclose information','An adult client’s friend asks the nurse for investigation results. The client is alert and available, and no consent to disclose has been established. What should the nurse do?',[
 'Share only the normal results',
 'Confirm the client’s wishes and authorization before disclosing information',
 'Share the results because the friend knows the client’s birth date',
 'Ask the friend to sign a confidentiality agreement and then disclose'],1,[
 'Normal results are still private health information.',
 'Establish the client’s consent and the appropriate scope of disclosure.',
 'Knowing an identifier does not establish permission to receive information.',
 'A friend’s agreement does not substitute for lawful authorization to disclose.'
],'Confirm permission, identity and purpose before disclosure.',['cno','bc']);
q('pharmacology','Recognizing a dosing mismatch','A medication order is for 0.25 mg. The available tablets contain 0.5 mg each and are approved for splitting. A colleague prepares two tablets. What should the nurse do?',[
 'Administer them because the tablet strength is smaller than 1 mg',
 'Stop and correct the preparation: the prescribed amount is half a tablet',
 'Give one tablet now and one later',
 'Ask the client which dose they usually prefer'],1,[
 'Comparing with 1 mg does not determine the required number of tablets.',
 '0.25 mg ÷ 0.5 mg/tablet = 0.5 tablet; two tablets would contain 1 mg.',
 'Changing timing does not correct the total dose discrepancy.',
 'Preference does not resolve a prescribing or preparation discrepancy.'
],'Keep dose units visible: prescribed dose divided by available strength.');
q('pharmacology','A per-day order','A fictional medicine is ordered at 18 mg/kg/day in three equal doses for a 20 kg child. What amount is prescribed per dose?',[
 '120 mg','360 mg','6 mg','1,080 mg'],0,[
 '18 × 20 = 360 mg/day; dividing by three gives 120 mg/dose.',
 '360 mg is the daily total, not the amount at each administration.',
 '6 mg/kg per dose still needs multiplication by the child’s weight.',
 'Multiplying the daily total by three confuses the number of administrations with the daily dose.'
],'Separate the daily total from the amount given at one time. Fictional medicine: calculation only.');
q('pharmacology','Before a scheduled dose','A scheduled beta-blocker has a prescribed hold parameter for pulse below 55/min. The nurse obtains a pulse of 48/min and the client reports dizziness. What is best?',[
 'Administer it because the blood pressure remains above the hold threshold',
 'Withhold according to the parameter, assess the client and contact the responsible clinician',
 'Give half the dose without an order',
 'Ask the client to walk until the pulse reaches 55/min'],1,[
 'Meeting one parameter does not cancel a different hold parameter.',
 'Follow the prescribed limit and assess/escalate symptomatic bradycardia.',
 'A new dose requires appropriate authorization.',
 'Exertion is not a safe way to overcome a medication hold parameter.'
],'Use the actual prescribed parameters and assess the client, not just the number.');
q('pharmacology','An IV site that burns','A client receiving an IV vesicant reports burning, and swelling is visible near the cannula. What is the best immediate response?',[
 'Flush the cannula to check patency before stopping',
 'Stop the infusion and follow the extravasation protocol, retaining access initially if needed for aspiration/treatment',
 'Remove the cannula immediately and discard it before assessment',
 'Slow the infusion and apply the same warm compress used for all medications'],1,[
 'Flushing may deliver more vesicant into tissue.',
 'Stop exposure and follow the medication-specific protocol; access may be needed for aspiration or antidote administration.',
 'Immediate removal may eliminate useful access before the protocol is implemented.',
 'Management, including compress type, depends on the specific medicine; continued exposure is unsafe.'
],'Suspected extravasation is medication-specific: stop, do not flush, and follow the relevant protocol.');
q('safety','PPE based on the task','A nurse will irrigate a wound where splashing of fluid is anticipated. Which protective approach is most appropriate?',[
 'Gloves alone because blood contact is not certain',
 'Gloves, protective clothing and face/eye protection appropriate to the anticipated splash',
 'A respirator for every wound regardless of exposure',
 'Hand hygiene alone if the wound is not known to be infected'],1,[
 'Gloves do not protect clothing or mucous membranes from splashes.',
 'Select barriers for the expected exposure of hands, clothing and face.',
 'Respiratory protection depends on the actual route and risk; it does not replace splash protection.',
 'Routine practices apply even without a known infection.'
],'Anticipated exposure, not just a diagnosis, determines protective equipment.',['cdc']);
q('safety','A fall despite precautions','A client who understands the call-bell instructions gets up alone at night to urgently urinate. Which revision best addresses the identified problem?',[
 'Repeat the same instructions more firmly',
 'Assess toileting patterns and arrange timely assistance with accessible equipment',
 'Remove the walking aid so the client cannot get up',
 'Document noncompliance as the only change to the plan'],1,[
 'Education alone has not addressed the urgent need or timing.',
 'Match support to the predictable activity and reassess contributing factors.',
 'Removing needed equipment can make an attempted transfer more dangerous.',
 'A label does not change the conditions that contributed to the fall risk.'
],'A useful prevention plan addresses why the unsafe activity occurred.');
q('health','A realistic teaching goal','After teaching a client newly prescribed a metered-dose inhaler, which outcome best demonstrates learning?',[
 'The client states that the handout was easy to read',
 'The client correctly demonstrates the prescribed device technique and identifies when to seek help',
 'The client can name all medicines used for lung disease',
 'The client agrees that the nurse explained everything'],1,[
 'Satisfaction with a handout does not verify the required skill.',
 'Demonstration and an escalation plan show practical understanding.',
 'Exhaustive drug recall is not the immediate skill needed.',
 'Agreement can occur without correct technique or understanding.'
],'Use a measurable action that matches the client’s real task.');
q('health','Interpreting home measurements','A client brings home blood-pressure readings taken immediately after climbing stairs with an incorrectly sized cuff. What is the best initial teaching focus?',[
 'Ask the client to average the readings and change the dose independently',
 'Review correct technique, equipment fit and the prescribed monitoring/reporting plan',
 'Stop all home monitoring because the readings vary',
 'Record only the lowest readings'],1,[
 'Poor technique can mislead management, and dose changes need an appropriate plan.',
 'Improve measurement quality before interpreting the trend in collaboration with the care team.',
 'Variation is a reason to review technique rather than abandon useful monitoring.',
 'Selective reporting hides the actual pattern.'
],'Reliable measurement comes before reliable trend interpretation.');
q('psychosocial','A statement of hopelessness','A client says they have collected pills and intend to take them tonight. What is the priority?',[
 'Arrange a routine counselling appointment next month',
 'Stay with the client, activate immediate safety support and restrict access to means when safe',
 'Ask the client to promise not to act and then leave them alone',
 'Complete the full social history before alerting anyone'],1,[
 'A specific imminent plan requires an immediate response.',
 'Intent, means and a near-term plan indicate serious immediate risk requiring protective support.',
 'A promise is not a substitute for an appropriate safety response.',
 'Further history must not delay action on an imminent threat.'
],'Specific intent, means and timing change the urgency of the response.');
q('psychosocial','Confusion or a long-term change?','An older adult with mild, stable dementia becomes acutely inattentive and fluctuates between drowsiness and agitation after surgery. What is most appropriate?',[
 'Attribute it to expected progression of dementia',
 'Assess for delirium and reversible contributors, and communicate the acute change',
 'Use memory exercises as the only intervention',
 'Delay assessment until the client is consistently agitated'],1,[
 'A sudden fluctuating change is not typical of gradual dementia progression.',
 'Acute inattention and fluctuating consciousness suggest delirium requiring assessment of causes.',
 'Cognitive support may help but does not investigate the acute cause.',
 'Hypoactive or fluctuating states can also represent serious illness.'
],'A chronic diagnosis does not explain every new finding.');
q('basic','Reassessing pain before mobilization','A client reports incisional pain of 7/10 and refuses planned postoperative walking. Which response best balances comfort and recovery?',[
 'Cancel all mobilization until the client has no pain',
 'Assess pain and barriers, provide prescribed relief, then reassess and assist graded activity',
 'Insist on walking before any analgesia',
 'Tell the client that pain medication replaces the need to mobilize'],1,[
 'Complete avoidance may increase complications; an individualized plan is needed.',
 'Address the limiting symptoms and reassess what safe activity is achievable.',
 'Unmanaged pain can impair participation and breathing.',
 'Analgesia and safe activity have different complementary purposes.'
],'Use comfort interventions to enable function, then evaluate both.');
q('basic','A change in skin integrity','A client with reduced mobility has intact skin over the sacrum that remains red and does not blanch with gentle pressure. What is the best response?',[
 'Massage the area to restore circulation',
 'Relieve pressure and reassess/document the skin while updating the prevention plan',
 'Wait for an open wound before changing care',
 'Place the client on the same area to avoid disturbing the redness'],1,[
 'Massage may increase damage to compromised tissue.',
 'Persistent non-blanchable redness is an important early warning requiring pressure relief and follow-up.',
 'Intact skin can already have pressure-related damage.',
 'Continuing pressure can worsen tissue injury.'
],'Act on early tissue changes before skin breakdown progresses.');
q('risk','Distinguishing baseline from deterioration','A client with heart failure has the following observations. Which change is the highest priority to report after immediate assessment?',[
 'A usual mild ankle swelling that resolves overnight',
 'New breathlessness at rest with oxygen saturation below the prescribed target',
 'A request to review the low-sodium meal choices',
 'An unchanged daily weight taken on the same scale'],1,[
 'A stable baseline finding needs monitoring but is less urgent than new respiratory compromise.',
 'New resting dyspnea and a low saturation suggest acute respiratory deterioration.',
 'Nutrition teaching can follow assessment of the urgent symptom.',
 'A stable weight does not rule out a new acute problem.'
],'A stable trend in one measure does not cancel a new red-flag symptom.');
q('risk','A laboratory result in context','A client receiving anticoagulation has new black tarry stools and dizziness. Which action is most appropriate?',[
 'Document the stool colour and wait for the next scheduled INR',
 'Assess circulation and symptoms and promptly escalate possible bleeding',
 'Increase dietary fibre as the only response',
 'Reassure the client because bruising is the only important bleeding sign'],1,[
 'Symptoms of possible bleeding need assessment regardless of scheduled monitoring.',
 'Melena and dizziness may indicate clinically significant gastrointestinal bleeding.',
 'Fibre does not address suspected bleeding.',
 'Important bleeding can be internal and present without bruising.'
],'Symptoms can require urgent action before a scheduled laboratory check.');
q('adaptation','What changes the immediate plan?','A client with low glucose is initially awake but becomes too drowsy to swallow safely while oral treatment is being prepared. What should the nurse do?',[
 'Continue oral treatment using a straw',
 'Change to the authorized non-oral emergency pathway and support the airway',
 'Give the same oral amount more slowly',
 'Wait for the next glucose check before changing the route'],1,[
 'A straw does not make swallowing safe with reduced consciousness.',
 'A loss of safe swallowing changes the route and urgency of treatment.',
 'Slower administration does not remove aspiration risk.',
 'Deteriorating consciousness requires an immediate response.'
],'Reassess while preparing treatment; a change in condition may invalidate the original plan.',['glucose']);
q('adaptation','Conflicting priorities','A postoperative client reports sudden dyspnea and looks pale. The nurse is about to give the client’s routine oral medicines. What is the best initial action?',[
 'Finish the routine medicines so they are not late',
 'Stop the routine task, assess airway/breathing/circulation and summon appropriate help',
 'Ask the client to wait while routine documentation is completed',
 'Offer reassurance first and reassess only if symptoms persist for an hour'],1,[
 'Routine scheduling is secondary to a new potential cardiopulmonary threat.',
 'A new acute change requires prompt assessment and appropriate emergency escalation.',
 'Routine paperwork should not delay immediate assessment.',
 'Reassurance without assessment can delay recognition of deterioration.'
],'Change priorities when the client changes.');

// Stable legacy IDs keep saved progress and bookmarks compatible.
for(const item of QUESTIONS)if(LEGACY_CHANGES[item.id])Object.assign(item,LEGACY_CHANGES[item.id]);
QUESTIONS.push(...EXPANSION_QUESTIONS);
Object.assign(SOURCES,EXPANSION_SOURCES,{
 'calc-sickkids':{name:'SickKids: oral pediatric acetaminophen dosing',url:'https://www.aboutkidshealth.ca/globalassets/assets/acetaminophen-and-ibuprofen-dose-recommendations.pdf',kind:'Hospital clinical reference',checkedDate:'2026-10-01'},
 'calc-cps':{name:'Canadian Paediatric Society: acute otitis media',url:'https://cps.ca/en/documents/position/acute-otitis-media',kind:'Professional society guidance',checkedDate:'2026-10-01'},
 'calc-hc':{name:'Health Canada: acetaminophen formulations',url:'https://www.canada.ca/en/health-canada/services/drugs-medical-devices/acetaminophen-and-children.html',kind:'Government guidance',checkedDate:'2026-10-01'}
});
