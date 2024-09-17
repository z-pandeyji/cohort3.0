// Write a function called canVote that returns true or false if the age of a user is > 18


function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

const A = canVote(22);
const B = canVote(18);
const C = canVote(15);

console.log(A);
console.log(B);
console.log(C);