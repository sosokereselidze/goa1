console.log('Enter calculation (e.g., 5 + 3):');

rl.on('line', (input) => {
    const [num1, operator, num2] = input.split(' ');

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    let result;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            console.log('Invalid operator');
            return;
    }

    console.log(`Result: ${result}`);
});
