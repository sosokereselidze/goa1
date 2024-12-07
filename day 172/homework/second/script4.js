console.log('Type something to transform to uppercase:');

rl.on('line', (input) => {
    console.log(`Uppercase: ${input.toUpperCase()}`);
});
