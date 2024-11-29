//1
function manualMap(func, array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(func(array[i]));
    }
    return result;
}

//2
function manualFilter(func, array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

//3
const names = ["soso", "nika", "luka"];
const capitalizedNames = manualMap(name => name.charAt(0).toUpperCase() + name.slice(1), names);
console.log("Capitalized Names:", capitalizedNames);

//4
const namesList = ["soso", "luka", "dato", "nika", "rati"];
const isValidName = name => name[0].toUpperCase() === name[0] && name.length <= 5;
const filteredNames = manualFilter(isValidName, namesList);
console.log("Filtered Names:", filteredNames);

//5
const numbers = [15, 10, 35, 18, 40, 5];
const isValidNumber = number => number > 20 && number % 5 === 0;
const filteredNumbers = manualFilter(isValidNumber, numbers);
console.log("Filtered Numbers:", filteredNumbers);
