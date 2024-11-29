// Create a simple Promise that resolves after 2 seconds with the message "Task 1 complete".
const task1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 1 complete");
    }, 2000);
});

task1.then(message => console.log(message));

// Create a Promise that rejects immediately with an error message "Task 2 failed". Handle the rejection using .catch.
const task2 = new Promise((_, reject) => {
    reject(new Error("Task 2 failed"));
});

task2.catch(error => console.log(error.message));

// Create a Promise that resolves with a number (e.g., 5). Chain a .then handler to double the number and return it, then chain another .then handler to log the doubled number.
const task3 = Promise.resolve(5)
    .then(number => number * 2)
    .then(doubledNumber => console.log(doubledNumber));

// Create a function that returns a Promise which resolves after 2 seconds with a message "First". Chain another then that waits 1 second before logging "Second".
const task4 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("First");
        }, 2000);
    }).then(message => {
        console.log(message);
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Second");
                resolve();
            }, 1000);
        });
    });
};

task4();

// Create a function that returns a Promise which rejects after 2 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.
const task5 = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Task 3 failed"));
        }, 2000);
    }).catch(error => console.log(error.message));
};

task5();

// Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete".
const task6 = () => {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1 complete");
        }, delay);
    });
};

task6().then(message => console.log(message));

// Create a function that returns a Promise which resolves after a random delay between 1 and 3 seconds with the message "First". Chain another .then that waits for another random delay between 1 and 3 seconds before logging "Second".
const task7 = () => {
    const delay = Math.floor(Math.random() * 3000) + 1000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("First");
        }, delay);
    }).then(message => {
        console.log(message);
        const secondDelay = Math.floor(Math.random() * 3000) + 1000;
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Second");
                resolve();
            }, secondDelay);
        });
    });
};

task7();

// Create a function that returns a Promise which rejects after a random delay between 1 and 4 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.
const task8 = () => {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Task 3 failed"));
        }, delay);
    }).catch(error => console.log(error.message));
};

task8();

// Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete" if the random number is greater than 0.5, otherwise, it should resolve with the message "Task 1 was quick".
const task9 = () => {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    const randomNumber = Math.random();
    return new Promise((resolve) => {
        setTimeout(() => {
            if (randomNumber > 0.5) {
                resolve("Task 1 complete");
            } else {
                resolve("Task 1 was quick");
            }
        }, delay);
    });
};

task9().then(message => console.log(message));

// Create a function that returns a Promise which resolves after a random delay between 1 and 4 seconds. If the random number is less than 0.3, reject with an error message "Task 3 failed". Otherwise, resolve with the message "Task 3 complete". Handle the rejection with a .catch to log the error message.
const task10 = () => {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    const randomNumber = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNumber < 0.3) {
                reject(new Error("Task 3 failed"));
            } else {
                resolve("Task 3 complete");
            }
        }, delay);
    }).catch(error => console.log(error.message));
};

task10().then(message => console.log(message));
