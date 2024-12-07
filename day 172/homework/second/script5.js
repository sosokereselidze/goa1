const progressBar = (total) => {
    let current = 0;

    const interval = setInterval(() => {
        current += 1;
        const percentage = (current / total) * 100;
        const bar = '='.repeat(current) + '-'.repeat(total - current);

        process.stdout.write(`\r[${bar}] ${percentage.toFixed(2)}%`);
        
        if (current === total) {
            clearInterval(interval);
            process.stdout.write('\n');
        }
    }, 100);
};

progressBar(20);
