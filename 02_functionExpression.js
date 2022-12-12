// var substraction = function(nam1, nam2){
//     var result = nam1-nam2;
//     console.log("substraction.....", result);

// }
// substraction(20, 10);
var myName = "Mohit";
console.log(myName);

// Function Expression
var showResult = function() {
    console.log("show.....");
};
showResult();

// We can store a function as value in JS
var substraction = function(num1, num2){
    var result = num1 - num2;
    console.log("substraction.......", result);
    return result;
}
var result = substraction(45, 20);
console.log(result);
