function distinctLetter(a, b, c){
    return a !== b && b !== c && a !== c 
} 


const num1 = prompt("first number: ");
const num2 = prompt("second number: ");
const num3 = prompt("third number: ");

if (distinctLetter(num1, num2, num3)){
    console.log("number are different")
} else{
    console.log("numbers are same")
}