// let arrayofNames=[5,1,true, "ten,4,2,5,8];
// console.log(arrayofNames);

// console.log(`===== Total number of elements available in array ====`);
// let totalElements = arrayofNames.length;
// console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);

// let typeOfArry= typeof arrayofNames;
// console.log(`Type of array ----> ${typeOfArry}`);



let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6]; // Empty Array
console.log(arrayOfNumbers);

console.log(`===== Total number of elements available in array ====`);
let totalElements = arrayOfNumbers.length;
console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);

let typeOfArray =typeof arrayOfNumbers;
console.log(`Type of array - arrayOfNumbers --> ${typeOfArray}`);

console.log(`=== Accessing array elements===`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
console.log(`Element at Fifth Index : ${arrayOfNumbers[4]}`);

console.log(`Last Element : ${totalElements-1}`);

console.log(`When provided value is greater than length : ${arrayOfNumbers[9]}`);

arrayOfNumbers[2] = 100; // Update or Modify value using index
console.log(arrayOfNumbers);


var index= arrayOfNumbers.indexOf(2);
console.log(index);

console.log(`======= Traversing array using for loop=====`);

for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
 console.log(element);   
}


console.log(`======= access even indexes values loop=====`);

for (let index = 0; index < arrayOfNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayOfNumbers[index];
        console.log(element); 
    }
     
}