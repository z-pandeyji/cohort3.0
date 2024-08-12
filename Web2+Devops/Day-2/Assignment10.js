// Creata a function that takes an array of objects as input, and returns the user whose age > 18, and are male.

const user = [
    {
        name: "Shivanshu Pandey",
        age: 23,
        gender: "Male"
    }, 
    {
        name: "Z Pandey",
        age: 12,
        gender: "Male"
    }, 
    {
        name: "Nina",
        age: 11,
        gender: "Female"
    }
]

function canVote2(obj) {
    let ageVal = obj.filter(val => val.age >= 18 && val.gender === "Male");
    return ageVal;
}

const value = canVote2(user);

console.log(value);