// What is Callback hell (Pyramid of Doom) ?
// where multiple nested callbacks are used.

// without Callback hell
// function log1() {
//     console.log('Hi');
// }

// function log3() {
//     console.log('Hello');
// }

// function log5() {
//     console.log('hello there');
// }

// setTimeout(log1,1000);
// setTimeout(log3,3000);
// setTimeout(log5,5000);


// using callback

// setTimeout(() => {
//     console.log('Hi');
//     setTimeout(()=> {
//         console.log('Hello');
//     }, 3000);
//     setTimeout(() => {
//         console.log('Hello there');
//     }, 5000);
// }, 1000);


// using promisified callback

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(() => {
    console.log('Hi');
    setTimeoutPromisified(3000).then(() => {
        console.log('hello');
        setTimeoutPromisified(5000).then(() => {
            console.log('hello there');
        }, 5000);
    }, 5000);
}, 1000);