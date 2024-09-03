// Try to create a promisified version of 
// setTimeout


function delaySetTimeout(time) {
    return new Promise((resolve, reject) => { 
        setTimeout(resolve, time);
    });
}

console.log('Start');
delaySetTimeout(1000).then(() => {
    console.log('Done');
}).catch((err) => {
    console.log(err);
});
console.log('SetTimeoutEnd');