//spred 


//1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];



//2
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObject = { ...obj1, ...obj2};



//3
const firstArray = [1, 2, 3, 4];

const secondArray1 = [...firstArray, 5, 6];
console.log(secondArray1); 


//4
const originalArray = [1, 2, 3, 4];

const copiedArray = [...originalArray];


//5
const name = "soso";

const charArray = [...name];