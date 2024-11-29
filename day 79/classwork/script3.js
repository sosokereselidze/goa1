let integers = [1, 2, 3, 4, 5];

let multipliedEvenIndexes = integers.map((num, index) => {
    if (index % 2 === 0) {
        return num * 2;
    } else {
        return num;
    }
});

console.log("Original array:", integers);
console.log("Array with even-indexed numbers multiplied by two:", multipliedEvenIndexes);