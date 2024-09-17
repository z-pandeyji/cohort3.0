// // Write a function that takes a new object as input which has name , age  and gender and greets the user
//  with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

let user = {
    name: "Nina",
    age: 3,
    gender: "Female"
}

function greet(obj) {
    let name = obj.name;
    let age = obj.age;
    let canVote;
    if (age >= 18) {
        canVote = "can";
    } else {
        canVote = "can not";
    }
    let gender = obj.gender;
    let valGender;
    if(gender === "Male") {
        valGender = "Mr.";
    } else if(gender === "Female") {
        valGender = "Mrs.";
    } else {
        valGender = "Others";
    }
    return `Hi ${valGender} ${name} and your age is ${age}. so you ${canVote} give vote.`;
}

const userVal = greet(user);

console.log(userVal);