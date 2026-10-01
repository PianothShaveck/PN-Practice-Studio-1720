# REx-PN bank expansion task

The user explicitly requests a very large expansion of the existing 120-item bank, separate-agent review, a complete uploadable bank file and a prompt for review in other LLMs. Author only ORIGINAL questions. The target for each author is 400 new questions: 200 in each of the two assigned categories (four authors = 1600 new, total 1720). Persist across batches until the assigned work is complete. Save incremental batches so work is not lost. Do not edit, initialize, register or deploy the existing Site. Root owns the app and integrates returned data. Do not spawn more agents.

Working destination: /workspace/scratch/d175be9aaf88/bank-expansion/authoring/<group>/
Existing bank (read only): /workspace/scratch/d175be9aaf88/rexpn-studio/dist/data.js

## Files to return
- questions.json: JSON array of all finished question objects.
- sources.json: object of additional source IDs -> {name,url,kind,checkedDate,scope}. IDs prefixed with your group, e.g. a-cno-consent. Existing reference IDs from data.js may be reused, but use specific sources where available.
- author-notes.md: coverage, exact counts, medical/reference caveats and known unresolved points. Do not claim reviewer approval.
- Preserve source research evidence in source-audit.json: [{sourceId,url,accessed:true/false,supportedTopics:[...],notes}]. Only say accessed if actually retrieved.

## Question schema
{id:'x-management-001', cat:'management', title:'Descriptive short title', stem:'Complete clinical scenario and precise task', type:'single'|'multiple', options:['...'], answer:[0-based integer(s)], why:['one explanation per option'], takeaway:'A useful concise learning point', refs:['source-id'], exhibit:null OR [['Observation','Value'],['...','...']], subtopic:'...', learningObjective:'Specific objective', reasoningSkill:'recognition'|'priority'|'intervention'|'evaluation'|'teaching'|'calculation'|'professional-judgement', difficulty:'foundation'|'application'|'challenge', provenance:'ai-authored'}
ID uses assigned category; numbers run 001..200 independently per category. Keys remain stable. Four options for single-choice; 4–6 for multiple-response; at least ~15% multiple-response across each group if educationally suitable. Use exhibits where clinically meaningful. For numerical scenarios use single-choice with explicitly stated units/rounding and independently check arithmetic. Do not inflate count with numeric-only variants.

## Quality and safety
- Canadian entry-level practical nursing, English, relevant to both 2022/2027 REx-PN client-needs framework. Current date 2026-10-01. Provincial legal questions must name Ontario/BC in stem if the answer differs. Avoid blanket scope claims; specify competence, policy and client-specific orders where needed. No US HIPAA framing for Canadian law.
- Read assigned existing questions to avoid simple duplicates. Explore diverse life stages, settings, conditions, learning objectives and reasoning tasks. A different name, age, number or option ordering does not make a distinct clinical question. No automated multiplication of generic stem templates. Related topics may recur only for distinct clinically meaningful objectives.
- Distractors should be plausible competing nursing actions, not jokes, obviously malicious conduct or repeated strawmen. Avoid always making the correct answer longest. Vary answer index (the app will also shuffle options). Distinguish initial action from definitive management; state enough context to identify one defensible best answer. Avoid bundling five appropriate interventions into one option while competing options are artificially incomplete.
- Rationales must explain why THIS option fits/fails THIS scenario, not merely repeat 'correct'/'unsafe'. Aim at least one substantive sentence per option; no generic repetitive rationale filler.
- Browse authoritative/primary clinical or regulator sources for uncertain/high-stakes claims and topic anchors. Prefer CNO/BCCNM, Public Health Agency of Canada, Health Canada, Canadian professional guidance, CDC for general infection principles, OpenStax/open nursing textbooks for general clinical concepts. Never invent URLs or claim source verification without accessing it. Do not reproduce licensed question banks or actual recalled exam items. Do not copy official sample question wording.
- Avoid disputed cutoffs, exact drug regimens or changing guideline details unless source-supported. Give lab reference ranges where needed. Generic drug names and metric/Canadian units. Exact doses must be explicit prescribed/fictional arithmetic, or carefully supported current clinical standards; independent prescribing is not implied.
- This is educational support, not a clinical decision tool. Do not mark questions clinically validated. Any unresolved dangerous ambiguity should be fixed or quarantined rather than passed.

Validate JSON, IDs, option/answer/rationale alignment, category counts and duplicate stems before returning. Root will assign independent cross-review after authoring.


## User steering during authoring (supersedes quantity-only shortcuts)

The user explicitly requires maximizing useful volume, keeping the 1,600-new-item target while avoiding useless questions. Rewrite weak items rather than reducing the target or using trivial padding. All distractors must reflect plausible learner decisions; no irrelevant facts, implausibly extreme actions or answer-length giveaways. At least the majority of cases must require clinical reasoning from specific context. Foundational recall may be useful in moderation and must be honestly labelled. Independent reviewers assess every finalized item and recheck revised items, keeping per-ID content hashes and source-check limitations. Never label author self-checks as independent clinical validation.


## Adapted criteria from Luca's supplied prompt

Use relevant patient details (age, diagnosis, symptoms, trends, vital signs, orders and laboratory context as needed), application/analysis/evaluation, plausible grammatically parallel options of comparable length, and case-specific rationales explaining priority. Avoid answer-length cues, all/none alternatives and gratuitous absolutes. Do not use ABC/Maslow/nursing-process heuristics mechanically; an urgent intervention must not be delayed for an unnecessary complete assessment. Do not ask for a single 'most accurate internal-bleeding test' without site, stability and diagnostic purpose. Keep the REx-PN eight-area plan; the supplied prompt's category counts sum to89–113 instead of60 and are not used. Retain suitable multiple-response formats. University documents were not provided, so never imply the bank was generated from Luca's missing course notes.
