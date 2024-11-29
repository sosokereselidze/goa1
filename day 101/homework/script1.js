// Use the `&&` operator to conditionally log a message if a variable is true.
const isActive = true;
isActive && console.log("The variable is active.");

// Use the `||` operator to set a default value for a variable if it is falsy.
const userProvidedValue = null;
const defaultValue = userProvidedValue || "Default Value";
console.log(defaultValue);

// Use the ternary operator to assign a value based on a condition.
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// Write a short conditional using the `&&` operator to call a function only if a variable is not null.
const user = { name: "soso" };
user && user.name && console.log(`Hello, ${user.name}!`);

// Use the `||` operator to return the first truthy value from a list of variables.
const firstName = "";
const lastName = "Smith";
const displayName = firstName || lastName || "Anonymous";
console.log(displayName);

// Use the ternary operator to log different messages based on whether a number is positive or negative.
const number = -5;
const message = number >= 0 ? "The number is positive." : "The number is negative.";
console.log(message);

// Write a short conditional using the `&&` operator to add a class to an element if a condition is met.
const hasError = true;
const elementClass = hasError && "error-class";
console.log(elementClass);

// Use the `||` operator to provide a fallback value for a missing object property.
const userSettings = { theme: null };
const theme = userSettings.theme || "default-theme";
console.log(theme);

// Use the ternary operator to set the value of a variable based on the length of a string.
const text = "Hello";
const textLengthMessage = text.length > 5 ? "Long text" : "Short text";
console.log(textLengthMessage);

// Write a short conditional using the `&&` operator to execute a block of code only if multiple conditions are true.
const isLoggedIn = true;
const hasPermission = true;
isLoggedIn && hasPermission && console.log("You have access.");


// Use the `map` function to create a new array with each element doubled.
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// Apply the `map` function to convert an array of strings to uppercase.
const strings = ["apple", "banana", "cherry"];
const uppercasedStrings = strings.map(str => str.toUpperCase());
console.log(uppercasedStrings);

// Use the `map` function to extract a specific property from an array of objects.
const users = [{ name: "soso" }, { name: "nika" }, { name: "rati" }];
const names = users.map(user => user.name);
console.log(names);

//Implement the `map` function to add 5 to each element in an array of numbers.
const moreNumbers = [10, 20, 30];
const increasedNumbers = moreNumbers.map(num => num + 5);
console.log(increasedNumbers);

// Use the `map` function to convert an array of numbers to their square roots.
const squareNumbers = [1, 5, 10, 25];
const squareRoots = squareNumbers.map(num => Math.sqrt(num));
console.log(squareRoots);

// Apply the `map` function to format an array of dates into a readable string format.
const dates = [new Date(2023, 6, 9), new Date(2024, 6, 9)];
const formattedDates = dates.map(date => date.toDateString());
console.log(formattedDates);

// Use the `map` function to create a new array with the lengths of each string in an array of strings.
const words = ["hello", "world", "JavaScript"];
const wordLengths = words.map(word => word.length);
console.log(wordLengths);

// Implement the `map` function to prepend a string to each element in an array of strings.
const greetings = ["soso", "dito", "nika"];
const personalizedGreetings = greetings.map(name => `Hello, ${name}!`);
console.log(personalizedGreetings);

// Use the `map` function to create an array of boolean values indicating whether each number in an array is even.
const mixedNumbers = [1, 2, 3, 4, 5];
const evenStatus = mixedNumbers.map(num => num % 2 === 0);
console.log(evenStatus);

// Apply the `map` function to replace specific characters in each string of an array.
const phrases = ["hello world", "js is fun"];
const replacedPhrases = phrases.map(phrase => phrase.replace(/ /g, "_"));
console.log(replacedPhrases);