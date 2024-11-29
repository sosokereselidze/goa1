function manualFilter(func, arr) {
    var filteredArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = manualFilter(isEven, numbers);
console.log(evenNumbers);