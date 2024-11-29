
// Write a function that takes two numbers and returns their sum.
function sum(a, b) {
    return a + b;
}

// Create a function that accepts a string and returns the string reversed.
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Implement a function that checks if a given number is even.
function isEven(num) {
    return num % 2 === 0;
}

// Write an arrow function that takes an array and returns its length.
const arrayLength = (arr) => arr.length;

// Create an arrow function that calculates the area of a rectangle given its width and height.
const rectangleArea = (width, height) => width * height;

// Write a function that takes an array of numbers and returns a new array with each number doubled.
function doubleArray(arr) {
    return arr.map(num => num * 2);
}

// Implement a function that takes a string and returns it in uppercase.
function toUpperCase(str) {
    return str.toUpperCase();
}

//Create an arrow function that filters out all odd numbers from an array.
const filterOddNumbers = (arr) => arr.filter(num => num % 2 === 0);

// Write a function that accepts a number and returns its factorial.
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Create an arrow function that takes a string and returns the number of vowels in the string.
const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
};


// Create a template literal that includes a variable in a sentence.
const name = "Alice";
const greeting = `Hello, ${name}!`;

// Use a template literal to create a multiline string.
const multilineString = `This is a string
that spans multiple
lines.`;

// Write a template literal that embeds an expression to calculate the sum of two numbers.
const num1 = 5;
const num2 = 10;
const sumExpression = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;

// 4. Create a template literal to format a date using variables for day, month, and year.
const day = 9;
const month = "July";
const year = 2024;
const formattedDate = `Today's date is ${day} ${month}, ${year}.`;

// 5. Use a template literal to construct a URL from variables for the protocol, domain, and path.
const protocol = "https";
const domain = "example.com";
const path = "some/path";
const url = `${protocol}://${domain}/${path}`;

// Create a template literal that includes a conditional expression.
const isMember = true;
const message = `You are ${isMember ? "a member" : "not a member"}.`;

// Write a template literal that formats an address using variables for street, city, and zip code.
const street = "123 Main St";
const city = "Anytown";
const zipCode = "12345";
const address = `${street}, ${city}, ${zipCode}`;

// Use a template literal to create a simple HTML structure with a variable for the content.
const content = "Hello, World!";
const htmlStructure = `<div><p>${content}</p></div>`;

// Create a template literal that includes a loop to generate a list of items from an array.
const items = ["Apple", "Banana", "Cherry"];
const itemList = `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;

// Write a template literal that interpolates a function call and includes its result in a sentence.
const getUserName = () => "Alice";
const userGreeting = `Welcome, ${getUserName()}!`;


