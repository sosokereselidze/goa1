let str = "42";
let num = Number(str);
console.log(num);

let bool = true;
let numBool = Number(bool);
console.log(numBool);

bool = false;
numBool = Number(bool);
console.log(numBool); 

let invalidStr = "abc";
let invalidNum = Number(invalidStr);
console.log(invalidNum);
