
console.log(`===================== Assignment 01 : Arrow function=====================`);
const arrow=()=>{
let res = "Good Afternoon, Today is Monday."
    console.log(`1) With no argus and no retun value : ${res}`);
}
arrow();
console.log(`-----------------------------------------------------------------------------`);
console.log(`2) With 3 args and and return value, for received 3 parameters perform the multiplication...`);
const arrowF = function(val1, val2, val3=1) {
    let mul=val1*val2*val3;
    //return mul;
    console.log(`   The  Multiplication of ${val1}*${val2}*${val3} is : ${mul}`);
}
arrowF(5, 5, 2);
arrowF(10,4);
// let m= arrowF(5, 5, 2);
// console.log(`  Multiplication : ${m}`);
// let inv=arrowF(10,4);
// console.log(`  Invoke the same function : ${inv}`);
console.log(`-----------------------------------------------------------------------------`);
console.log(`3) With 5 args and return value such as, for received params it should do the addition..`);
const args = function (v1, v2, v3, v4, v5) {
    let add= v1+v2+v3+v4+v5;
    return add;
}
let ad=args(100,100,200,349,756);
console.log(`   Addition is : ${ad}`);
let inv = args("I am", " learning", " ES6", " Features" , " in depth");
console.log(`   Invoke the same arrow function : ${inv}`);