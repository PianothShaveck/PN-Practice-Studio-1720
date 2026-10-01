# Author group c

Authored 400 original items: 200 Basic Care & Comfort (`x-basic-001`–`x-basic-200`) and 200 Reduction of Risk Potential (`x-risk-001`–`x-risk-200`). All content is AI-authored educational support, not a clinical decision tool. All400 final item hashes have independent AI review records; this is not clinician, exam-body or psychometric validation.

The 16 incremental JSON batches are the authoritative editable items. `questions.json` is rebuilt from them by `build.py`. The `b*.py` and `r*.py` files retain early authoring records and must not be rerun over reviewed JSON: later review fixes are deliberately applied to the saved JSON. `build.py` performs serialization, option rotation, and schema checks; it does not multiply generic question templates. Individual scenarios and option rationales were written separately.

## Coverage

Basic care includes functional assistance and rehabilitation, oral and personal hygiene, swallowing and nutrition support, bowel and bladder care, ostomy self-care, pain and symptom assessment, sleep, palliative comfort, pressure and device-related tissue protection, paediatric and postpartum care, and adaptive daily living. Risk potential includes measurement reliability, laboratory and specimen interpretation, procedural preparation and recovery, drainage devices, postoperative surveillance, neurological/respiratory/renal trends, newborn and postpartum warning signs, and evaluating response to interventions.

There are 60 multiple-response items (15% of the group), with 4 options each. All single-response items have 4 options. There are 4 standalone numerical items, each a different practical calculation, with explicit units. A fifth case interprets a new pulse deficit in its clinical context. Four risk-evaluation items include numerical trend exhibits. Fifteen items were initially tagged foundation and three challenge; the remainder application. These are author estimates, not measured item difficulty.

## Arithmetic checked

- `x-basic-196`: (150 − 30) + 90 + 60 = 270 mL actually consumed after subtracting measured leftover tea.
- `x-basic-197`: (200 kcal / 100 mL) × 150 mL = 300 kcal.
- `x-risk-060`: 1650 mL drainage − 1200 mL irrigation = 450 mL urine.
- `x-risk-192`: 96 − 82 = 14 beats/min pulse deficit, using simultaneous full-minute counts. This item now asks how to interpret and assess the new irregular pulse, rather than asking for subtraction alone.
- `x-risk-193`: (800 + 500) − (900 + 200) = positive 200 mL measured balance; unmeasured losses explicitly excluded.

## Sources and boundaries

`sources.json` currently registers 134 topic references. `source-audit.json` distinguishes returned search excerpts from successful direct page retrieval where new entries were added. NICE CG32 and CG103 returned relevant search excerpts, but direct opens returned HTTP403; the audit says so. Sources are topic anchors and further reading, not a claim that every alternative was independently validated against every page.

Canadian authorities include BCcampus, RNAO, Canadian Stroke Best Practices, Canadian Paediatric Society, PHAC, Health Canada, SickKids, BC Children's Hospital and local public health. NIDDK/MedlinePlus and ACR/RSNA provide selected clinical/procedural background; no US legal framework or US screening-age recommendation was imported. Older open nursing texts support stable fundamental skills. Device handling, prescribed mobility restrictions, procedure preparation, scope and competence remain subject to individualized orders and local policy. No independent prescribing is implied.

No exact medication treatment regimens were authored. Laboratory reference intervals are supplied when a numerical interpretation needs them. The young-infant fever item uses current retrieved CPS guidance. High-risk refeeding questions concern recognition/monitoring rather than unsupported feeding or replacement doses.

## Review state and originality

The assigned existing 28 basic/risk questions were read before drafting. A repeated new-unilateral-calf-swelling objective was found within the new risk set; `x-risk-083` was replaced with potassium-containing salt-substitute teaching. Exact ID and stem duplicates are checked mechanically; conceptual overlap needs the wider bank review. Related topics recur for different objectives (for example tube-placement verification versus evaluation of treatment response), not age/name/numeric substitutions.

Independent reviewers returned concrete per-ID revisions for every batch. All reported clinical patches and source corrections have been applied, including substantial rewrites of 43 risk151–200 items and replacement of the rote pulse-deficit calculation with a clinical interpretation task. All400 current raw item hashes have independently reasoned approval records indexed in `reviews/expansion/c-current-400-approved-manifest.json`. After x-risk-159 was replaced to remove overlap with the legacy haemorrhage-response objective, its postpartum bladder/fundal-displacement objective received a separate full recheck and targeted source retrieval in `c-risk159-objective-replacement.recheck.json`; the other399 items remained unchanged. Pass status must be determined from the final item's canonical hash and independent review record; a prior pass does not approve later edits. This note is not an approval record.

Source-only changes are recorded in four final-pass ledgers (the fourth explicitly uses the release hash convention) with the old and new refs and the declared hash convention. `item-hashes.json` uses the release convention: SHA256 of Python `json.dumps(question, sort_keys=True, ensure_ascii=False)` with default separators. `hash-conventions.json` documents the difference. The reviewer can restore old refs and independently compare the unchanged clinical fields before issuing a new release hash. This distinction is recorded rather than silently treating a source change as already approved.
