var square =function(num){
    var result=num*num;
console.log("Square of ",num,":", result );
}
square(5);
square(6);
square(25);
square(100);
console.log(typeof square);

var square =function(length, width){
    var result=length*width;
console.log("Area of rectangle",":", result );
}
square(499,917);

var perform= function(){
    var firstName= "JS the most popular language";
    console.log("Given string is :", firstName);
    console.log("Total character in the string is :", firstName.length);
    console.log("Char at index 6 :",firstName.charAt(6));
    console.log("Char at index 11:", firstName.charAt(11));
    console.log("Last character from the given string:", firstName.charAt(27));
}
perform()






// var myName = "Mohit";
// console.log(myName);

// // Function Expression
// var showResult = function() {
//     console.log("show.....");
// };
// showResult();

// // We can store a function as value in JS
// var substraction = function(num1, num2){
//     var result = num1 - num2;
//     console.log("substraction.......", result);
//     return result;
// }
// var result = substraction(45, 20);
// console.log(result);
