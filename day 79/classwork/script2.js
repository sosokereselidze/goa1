function filterIntegers(arr) {
    return arr.filter(x => Number.isInteger(x));
}

let originalArray = ["luka", 1, 4, 5.3, "soso", True, 12, False];
let integersOnly = filterIntegers(originalArray);
console.log("Original array:", originalArray);
console.log("Integers only:", integersOnly);