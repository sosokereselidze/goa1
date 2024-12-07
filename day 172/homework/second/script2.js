const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Type something (type "exit" to quit):');

rl.on('line', (input) => {
    if (input.trim() === 'exit') {
        rl.close();
    } else {
        console.log(`You entered: ${input}`);
    }
});
