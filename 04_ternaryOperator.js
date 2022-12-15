console.log(`===================Assignment 01 ==============`);

// var num1= 10;
// var num2= -10;
console.log(`-------Greatest number-------`);
var greatestNum=function(num1, num2){
var res=(num1>num2)  ? "Yes" :"No";

console.log(`The first value is greater than secound value : ${res}`);
}
greatestNum(10,-10);
greatestNum(800,899);

console.log(`------Even or odd --------`);

var evenOrodd= function(num){
var value= num%2==0 ? "Even" : "Odd";
// console.log(`Given no is :${value}`);
console.log("Given no",num,"is =",value);
}
evenOrodd(29);
evenOrodd(44);
evenOrodd(0);
evenOrodd(101);

console.log(`-------Word has even or odd-------`);

var val="Javascript";
var len=val.length;
var res=len%2==0 ? "EVEN": "ODD";
console.log(`This string  ${val} is: ${res}`);

var val="developer";
var len=val.length;
var res=len%2==0 ? "EVEN": "ODD";
console.log(`This string  ${val} is: ${res}`);

var val="Google";
var len=val.length;
var res=len%2==0 ? "EVEN": "ODD";
console.log(`This string  ${val} is: ${res}`);


// var word=function(value){
//     var res= value.length;
//     // console.log("Length of",value,"is=",res);
// var evenOrodd= res%2==0 ? "Even" :"Odd";
// // console.log(`word is ${evenOrodd}`);
// return evenOrodd;
// }
// var r=word("JavaScript");
// console.log(`This string JavaScript: ${r}`);


