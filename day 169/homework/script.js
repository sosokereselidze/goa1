const process = require('process');

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.error('Usage: calculator <number1> <operator> <number2>');
    process.exit(1);
}

const [num1, operator, num2] = args;

const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

if (isNaN(number1) || isNaN(number2)) {
    console.error('Error: both operands must be valid numbers.');
    process.exit(1);
}

let result;
switch (operator) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        if (number2 === 0) {
            console.error('Error: division by zero is not allowed.');
            process.exit(1);
        }
        result = number1 / number2;
        break;
    case '%':
        if (number2 === 0) {
            console.error('Error: modulus by zero is not allowed.');
            process.exit(1);
        }
        result = number1 % number2;
        break;
    default:
        console.error(`Error: unsupported operator '${operator}'. supported operators are +, -, *, /, %.`);
        process.exit(1);
}

console.log(`Result: ${result}`);