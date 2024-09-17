// what is Promise ?
// Promise is an object that represents the eventual completion (or failure) of an asynchronous operation,
// and its resulting value.
// Promises are objects that allow you to associate callbacks that will be invoked when the Promise is
//resolved or rejected.
// Promises are chainable, which means that you can combine them into a single Promise that represents
//the completion of multiple asynchronous operations.
// Promises are asynchronous, which means that they always return a Promise.

// Promises are used to handle asynchronous operations, such as making HTTP requests or reading files.

class Promise2 {
    constructor(fn) {
      this.state = "pending"; // State can be 'pending', 'fulfilled', or 'rejected'
      this.value = undefined; // Value is the result of the operation
      this.reason = undefined; // Reason is the reason for rejection
      this.onCompletionCallbacks = []; // Callbacks for when the promise is fulfilled
      this.onRejectionCallbacks = []; // Callbacks for when the promise is rejected
  
      const resolve = (value) => {
        if (this.state === "pending") {
          this.state = "fulfilled";
          this.value = value;
          this.onCompletionCallbacks.forEach((callback) => {
            callback(value);
          });
        }
      };
  
      const reject = (reason) => {
        if (this.state === "pending") {
          this.state = "rejected";
          this.reason = reason;
          this.onRejectionCallbacks.forEach((callback) => {
            callback(reason);
          });
        }
      };
  
      // Execute the function passed to the constructor
      try {
        fn(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  // why we use setTimeout here?
  // Because the setTimeout mimick the native Promise javascript built in function. To ensure callbacks execute asynchronously.
  // Why we return again Promise2 in then() ?
  // Because then() method return a new Promise2 instance, allowing for chaining and properly handle callbacks.
  // Why we use try-catch here?
  // To handle errors that may occur during the execution of the function passed to the constructor.

    then(onFulfilled, onRejected) {
      return new Promise2((resolve, reject) => {
        if (this.state === "pending") {
          this.onCompletionCallbacks.push((value) => {
            try {
              const result = onFulfilled ? onFulfilled(value) : value;
              resolve(result);
            } catch (error) {
              reject(error);
            }
          });
          this.onRejectionCallbacks.push((reason) => {
            try {
              const result = onRejected ? onRejected(reason) : reason;
              reject(result);
            } catch (error) {
              reject(error);
            }
          });
        } else if (this.state === "fulfilled") {
          setTimeout(() => {
            try {
              const result = onFulfilled ? onFulfilled(this.value) : this.value;
              resolve(result);
            } catch (error) {
              reject(error);
            }
          }, 0);
        } else if (this.state === "rejected") {
          setTimeout(() => {
            try {
              const result = onRejected ? onRejected(this.reason) : this.reason;
              reject(result);
            } catch (error) {
              reject(error);
            }
          }, 0);
        }
      });
    }
  }
  

  const promise = new Promise2((resolve, reject) => {
    setTimeout(() => {
      resolve("Success!");
    }, 1000);
  });

  const promise4 = new Promise2((resolve, reject) => {
    setTimeout(() => {
        reject('Error occured!'); 
    }, 1000);
  })
  
  promise.then((value) => {
    console.log("Resolved:", value);
  }).then(() => {
    console.log("Chained promise executed!");
  });

  promise4.then((value) => {
    console.log('Resolve', resolve);
  }, (error) => {
    console.log('Reject', error);
  }).then(() => {
    console.log("Chained promise executed!")
  });
  