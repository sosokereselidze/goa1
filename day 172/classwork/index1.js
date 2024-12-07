const readline = require('readline');

const numbers = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('enter numbers');

rl.on('line', (input) => {
    const number = parseInt(input, 10);

    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        console.log('Invalid input. Please enter a valid number.');
    }

    if (numbers.length === 10) {
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        console.log(`Sum of the numbers: ${sum}`);

        rl.close();
        process.exit();
    }
});