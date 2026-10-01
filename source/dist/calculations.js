// Parameter variants are arithmetic drills, never counted as distinct authored scenarios.
export function calculationCase(random,kind){
 const pick=a=>a[Math.floor(random()*a.length)];
 let title,stem,answer,unit,solution,takeaway,refs=['med'],decimals=0;
 if(kind===0){
  const kg=pick([18,22,26,30]),mg=kg*15;
  title='Weight to dose to volume'; unit='mL'; decimals=1; answer=Math.round(mg/32*10)/10;
  stem=`A child older than 2 years weighs ${kg} kg. The verified order is acetaminophen 15 mg/kg/dose orally every 6 hours as needed for pain, maximum 4 doses in 24 hours. The last dose was 8 hours ago; pain assessment supports a dose, and no other acetaminophen has been given. The nurse has completed the medication safety checks. The bottle contains 160 mg/5 mL. Calculate the volume for ONE dose. Round only the final answer to one decimal place; enter the number only.`;
  solution=`${kg} kg × 15 mg/kg = ${mg} mg per dose. (${mg} mg ÷ 160 mg) × 5 mL = ${(mg/32).toFixed(4)} mL. Rounded volume = ${answer.toFixed(1)} mL.`;
  takeaway='Convert the weight-based dose to milligrams before converting milligrams to millilitres. This calculation assumes the stated safety checks; it does not replace them.';
  refs=['calc-sickkids','calc-hc','med'];
 }
 if(kind===1){
  const kg=pick([18,21,24,27]),daily=pick([45,60]),total=kg*daily,per=total/3;
  title='Daily dose versus each dose'; unit='mL/dose';decimals=1;answer=Math.round(per/50*10)/10;
  stem=`A child older than 2 years with uncomplicated acute otitis media weighs ${kg} kg. The verified prescription is amoxicillin ${daily} mg/kg/DAY orally, divided into 3 equal doses every 8 hours for 5 days. There is no penicillin allergy or renal impairment, and the nurse has completed the medication safety checks. The pharmacy supplies 250 mg/5 mL suspension. Calculate the volume for ONE dose. Round only the final answer to one decimal place; enter the number only.`;
  solution=`Daily amount = ${kg} kg × ${daily} mg/kg/day = ${total} mg/day. One dose = ${total} ÷ 3 = ${per} mg. Volume = (${per} ÷ 250) × 5 = ${answer.toFixed(1)} mL/dose.`;
  takeaway='A dose stated per DAY must be divided by the number of daily administrations before converting to volume. Never treat mg/kg/day as mg/kg/dose.';
  refs=['calc-cps','med'];
 }
 if(kind===2){
  const volume=pick([250,500,750]),hours=pick([3,4,5]),minutes=pick([15,30,45]),duration=hours+minutes/60;
  title='Hours and minutes on an infusion pump';unit='mL/hour';answer=Math.round(volume/duration);
  stem=`A stable adult has a verified order to infuse ${volume} mL of 0.9% sodium chloride intravenously over ${hours} hours ${minutes} minutes, starting now. The nurse has checked the indication, access, fluid status and pump settings required by policy. What rate should be programmed in mL/hour? Round only the final answer to the nearest whole number; enter the number only.`;
  solution=`${hours} hours ${minutes} minutes = ${hours} + (${minutes} ÷ 60) = ${duration} hours. Rate = ${volume} ÷ ${duration} = ${(volume/duration).toFixed(3)} mL/hour → ${answer} mL/hour.`;
  takeaway='Convert minutes to a fraction of an hour. For example, 30 minutes is 0.5 hour, not 0.30 hour. Monitor the client and actual volume infused.';
 }
 if(kind===3){
  const volume=pick([500,750,1000]),hours=pick([6,8,10]),factor=pick([15,20]);
  title='Gravity infusion with unit conversion';unit='drops/min';answer=Math.round(volume*factor/(hours*60));
  stem=`A stable adult has a verified order for ${volume} mL of 0.9% sodium chloride intravenously over ${hours} hours, starting now. Gravity administration is appropriate under the unit policy; the tubing delivers ${factor} drops/mL. After completing the clinical and equipment checks, the nurse calculates the drip rate. How many drops per minute are needed? Round only the final answer to a whole drop; enter the number only.`;
  solution=`Time = ${hours} × 60 = ${hours*60} minutes. Rate = (${volume} mL × ${factor} drops/mL) ÷ ${hours*60} minutes = ${(volume*factor/(hours*60)).toFixed(3)} drops/min → ${answer} drops/min.`;
  takeaway='Use the drop factor printed on the actual tubing and convert the total time to minutes. Reassess a gravity infusion because its rate can change.';
 }
 if(kind===4){
  const limit=pick([1500,1800]),oral=pick([450,525,650]),iv=pick([250,300]),flush=pick([60,90]);
  title='Remaining total fluid allowance';unit='mL';answer=limit-oral-iv-flush;
  stem=`An adult has a verified TOTAL fluid limit of ${limit} mL for the 24-hour period from 07:00 today to 07:00 tomorrow. By 19:00 the intake record includes ${oral} mL oral fluids, ${iv} mL IV medication diluent and ${flush} mL of enteral water flushes. All three count toward this limit; there are no other fluids to include. How much fluid remains within the prescribed allowance until 07:00? Enter a whole number only.`;
  solution=`Recorded intake = ${oral} + ${iv} + ${flush} = ${oral+iv+flush} mL. Remaining allowance = ${limit} − ${oral+iv+flush} = ${answer} mL.`;
  takeaway='A total fluid limit includes relevant oral, enteral and intravenous sources. Subtract intake within the same defined time period; do not subtract urine output from intake to create a larger allowance.';
  refs=['nursing'];
 }
 return {title,stem,answer,unit,solution,decimals,takeaway,refs,template:kind,reasoningSkill:'calculation'};
}
