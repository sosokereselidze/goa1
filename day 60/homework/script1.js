//Create an object named person with properties name, age, and city.
const person = {
    name: "soso",
    age: 14,
    city: "terjola",
}

//Access the name property of the person object you created in the previous exercise.
console.log(person.name);

//Change the age property of the person object to a new value.
person.age = 15;

//Add a new property named country to the person object and set its value.
person.country = "georgia";

//Add a method named greet to the person object that logs a greeting message including the person's name.
person.greet = function(){
    console.log("Hello, My name is " + person.name)
}

//Create two objects with the same properties and values. Use the === operator to compare them. Log the result.
person2 = {
    name: "soso",
    age: 14,
    city: "terjola",
}
person3 = {
    name: "soso",
    age: 14,
    city: "terjola",
}
console.log(person2 === person3)

//Create an object named school with properties name and students, where students is an array of objects representing student names and ages. Access a student's name and age from the school object.
const school = {
    name: "2 sajaro",
    students: [
        {name: "soso", age: 14},
        {name: "nika", age: 14}
    ]
};

// Access a student's name and age
console.log(school.students[0].name);
console.log(school.students[0].age);
console.log(school.students[1].name);
console.log(school.students[1].age);