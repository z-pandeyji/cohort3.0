// normal function in js

function sum(a,b) {
    let sum = a + b;
    return sum;
}

const val = sum(2,3);
console.log(val);


// ! sum

// Option A
function allSum(n) {
let totalSum = 0;
let i = 1;
while(i <= n) {
    totalSum += i;
    i++;
}
return totalSum;
}

const value = allSum(4);
console.log(value);

// Option B

function allSum2(n) {
    return n * (n + 1) / 2;
}

const value2 = allSum2(4);
console.log(value2);