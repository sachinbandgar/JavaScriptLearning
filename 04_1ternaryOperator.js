console.log(`==============Assignment 02 ==================`);

console.log(`------------------- Step 1 --------------`);
function maleMarriageEligibility(gender,age,maleName){
var r = ( gender=="male" && age>=21 ) ? `Hey ${maleName} you are eligible for marriage`:`Hey ${maleName} sorry please wait`;
console.log(r);
}
maleMarriageEligibility("male",25,"Billgates");
maleMarriageEligibility("male",17,"Stew Jobs");

console.log(`---------------- Step 2 ------------------`);
function femaleMarriageEligibility(gender,age, girlName){
var res= (gender=="female" && age>=18) ? `Hey ${girlName} you are eligible for Marriage. `: `Hey ${girlName} Sorry please wait.`
return res;
}
var res= femaleMarriageEligibility("female",21, "Jenifer");

console.log(res);
var res= femaleMarriageEligibility("female",17, "Malinda Gates")

console.log(res);