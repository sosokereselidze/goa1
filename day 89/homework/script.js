//1
function sumArray(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}



//2
function findLongestWord(words) {
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}



//3
function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
        count++;
    }
    return count;
}



//4
function getObjectKeys(obj) {
    let keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}



//Arrow Function Tasks


//1
const square = (num) => num * num;


//2
const filterEvenNumbers = (numbers) => numbers.filter(num => num % 2 === 0);


//3
const sumArray = (numbers) => numbers.reduce((sum, num) => sum + num, 0);


//4
const generateFibonacci = (length) => {
    if (length <= 0) return [];
    if (length === 1) return [0];
    const sequence = [0, 1];
    while (sequence.length < length) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
}


//5
const isPalindrome = (str) => {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}