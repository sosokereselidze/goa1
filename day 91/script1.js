//rest

//1
const array = [1, 2, 3, 4, 5];

const [first, second, ...rest] = array;



//2
function collectArguments(first, second, ...rest) {
    console.log(first);  
    console.log(second); 
    console.log(rest);   
}

collectArguments('a', 'b', 'c', 'd', 'e');



//3
function sum(...arg) {
    return arg.reduce((acc, curr) => acc + curr, 0);
}


//4
function logArguments(...args) {
    console.log(args);
}

function forwardArguments(...args) {
    logArguments(...args);
}



//5
// const person = { name: 'John Doe', age: 30, position: 'Developer', country: 'USA' };

// const { name, age, ...rest } = person;