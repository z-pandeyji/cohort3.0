// Write a function that takes a user as an input and greets them with their name and age

let user = {
    name : "Shivanshu Pandey",
    age: 24
}

function greet(obj) {
    let name = obj.name;
    let age = obj.age;

    return `Name is ${name} and their age is ${age}`;
}

const value = greet(user);

console.log(value);