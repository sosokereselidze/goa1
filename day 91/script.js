
// 1. Create an object person, with properties: name and age. Use Object.assign to create a new object employee with additional property - position.
// 2. Merge two objects obj1 and obj2 into a new object using Object.assign.
// 3. Copy properties from multiple source objects into a single target object using Object.assign.
// 4. Use Object.assign to clone an object original.
// 5. Merge properties of an object source into another object target using Object.assign.
// 6. Merge arrays of objects into a single object using Object.assign.
// 7. Use Object.assign to update properties of an existing object with new values.
// 8. Implement a function extend that takes two objects and merges their properties using Object.assign.
// 9. Create a manual function named manualAssign in JavaScript using the for...in loop, define parameters for the target object and ...sources rest parameter, iterate over each source object with a for...in loop, and assign properties from each source to the target object.
// 10. Manually create a function named manualAssign2 in JavaScript utilizing the for...of loop, define parameters for target and ...sources, loop through each source object, iterate over keys within each source, and assign corresponding values to the target object.

const person = {
    name: "soso",
    age: 15,
}

const employee = Object.assign({}, person, {position: "student"});


//2
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = Object.assign({}, obj1, obj2);

console.log(mergedObj);


//3
// const source1 = { a: 1 };
// const source2 = { b: 2 };
// const source3 = { c: 3 };

// const target = Object.assign({}, source1, source2, source3);

// console.log(target);


//4
const original = { a: 1, b: 2 };

const clone = Object.assign({}, original);

console.log(clone);


//5
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

Object.assign(target, source);

console.log(target);