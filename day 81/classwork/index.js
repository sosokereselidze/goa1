function manualMap(list, func) {
    return list.map(func);
}

function square(x) {
    return x * x;
}

const inputList = [1, 2, 3, 4, 5];
const outputList = manualMap(inputList, square);
console.log(outputList);