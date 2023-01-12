console.log(`===== Asssignment 02: Using forEach() with arrow function and callback ============`);

console.log(`-----------------------------------------------------------------------------`);
console.log(`1. Log the array element with it's index using forEach() with arrow function...`);
const array_numbers =[1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
array_numbers.forEach((value, index)=>{
console.log(`   Array element is: ${value} and Index is: ${index}`);
});

console.log(`-----------------------------------------------------------------------------`);
console.log(`2. Find the positive numbers using forEach() with arrow function.....`);
array_numbers.forEach( function(value){
if (value>0) {
    console.log(`   Positive numbers are : ${value}`);
}
}
);
console.log(`-----------------------------------------------------------------------------`);
console.log(`3. Find the negative numbers, add into new array and log new array on console using arrow function....`);
let newArray = [];
array_numbers.forEach((value)=>{
    if (value<0) {
        newArray.push(value);
     }
});

console.log(`   Negative values are : ${newArray}`);
console.log(`-----------------------------------------------------------------------------`);
console.log(`4. Find the even numbers using forEach() with arrow function......`);

array_numbers.forEach((value)=>{
if (value%2==0) {
    console.log(`   Even numbers are : ${value}`);
}
});
console.log(`-----------------------------------------------------------------------------`);
console.log(`5. Find the sum of all elements from array_numbers......`);
let sum = 0;
array_numbers.forEach((value)=>{

    sum+=value;

});
console.log(`   Sum of all elements from Array: ${sum}`);

console.log(`-----------------------------------------------------------------------------`);
console.log(`6. Even positioned array value....`);
array_numbers.forEach((value, index)=>{
if (index%2==0) {
    console.log(`   Only even positioned array value are : ${value}`);

}
});