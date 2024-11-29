//Create a promise that resolves to "Hello, World!" and log the result.
let promise1 = new Promise((resolve) => {
    resolve("Hello, World!");
});

promise1.then((message) => {
    console.log(message);
});

// Create a promise that resolves after 2 seconds with the message "Resolved after 2 seconds".
let promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved after 2 seconds");
    }, 2000);
});

promise2.then((message) => {
    console.log(message);
});

//Chain two promises, where the first promise resolves to "First" and the second appends " -> Second".
let promise3 = new Promise((resolve) => {
    resolve("First");
});

promise3
    .then((message) => {
        return message + " -> Second";
    })
    .then((message) => {
        console.log(message);
    });

// Use multiple .then callbacks to handle different stages of promise resolution.
let promise4 = new Promise((resolve) => {
    resolve("Stage 1");
});

promise4.then((message) => {
    console.log(message);
    return "Stage 2";
})
.then((message) => {
    console.log(message);
    return "Stage 3";
})
.then((message) => {
    console.log(message);
});

// Create a promise that rejects after 1 second with a specific error message.
let promise5 = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error("Rejected after 1 second"));
    }, 1000);
});

promise5.catch((error) => {
    console.error(error.message);
});

// Create a function that prints messages "One", "Two", and "Three" with delays of 1, 2, and 3 seconds respectively.
function printMessages() {
    setTimeout(() => {
        console.log("One");
        setTimeout(() => {
            console.log("Two");
            setTimeout(() => {
                console.log("Three");
            }, 1000);
        }, 1000);
    }, 1000);
}
printMessages();

// Chain multiple promises that resolve with delays, printing messages sequentially.
let promise7 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("First message");
    }, 1000);
});

promise7.then((message) => {
    console.log(message);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Second message");
        }, 1000);
    });
})
.then((message) => {
    console.log(message);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Third message");
        }, 1000);
    });
})
.then((message) => {
    console.log(message);
});

// Create a promise that resolves successfully or rejects with a specific error, and handle the error using .catch.
let promise8 = new Promise((resolve, reject) => {
let success = true;
if (success) {
    resolve("Successfully resolved");
} else {
    reject(new Error("Specific error message"));
}
});
promise8.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error.message);
});

// Create a promise that resolves to a message and use .then to handle the resolved value.
let promise9 = new Promise((resolve) => {
    resolve("Resolved message");
});

promise9.then((message) => {
    console.log(message);
});

//Chain multiple promises that resolve with delays, printing messages sequentially.
let promise10 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("First message");
    }, 1000);
});

promise10
.then((message) => {
        console.log(message);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Second message");
        }, 2000);
    });
})
.then((message) => {
    console.log(message);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Third message");
        }, 3000);
    });
})
.then((message) => {
    console.log(message);
});



