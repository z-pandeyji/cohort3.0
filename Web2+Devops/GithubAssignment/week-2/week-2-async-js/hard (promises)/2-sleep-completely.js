/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
        return new Promise((resolve) => {
            const start = Date.now(); 
            while (Date.now() - start < milliseconds) {
                // Busy-wait loop
            }
            resolve();
        });
    }

    sleep(2000).then(() => {
        console.log("Waited for 2 seconds!");
    });

module.exports = sleep;