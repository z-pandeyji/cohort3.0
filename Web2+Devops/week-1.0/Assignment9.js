// Write a function that takes an array of users as inputs and returns only the users who are more than
//  18 years old

const user = [
    {
        name: "Shivanshu Pandey",
        age: 23,
        gender: "Male"
    }, 
    {
        name: "Z Pandey",
        age: 18,
        gender: "Male"
    }, 
    {
        name: "Nina",
        age: 11,
        gender: "Female"
    }
]

function canVote(obj) {
    let ageVal = obj.filter(val => val.age >= 18);
    return ageVal;
}

const value = canVote(user);

console.log(value);