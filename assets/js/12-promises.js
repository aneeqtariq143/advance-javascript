//How to  Creating Basic Promise
// A promise is created by instantiating a new object of the Promise class.
// The promise constructor accepts a single argument, a function. This function
// must have two arguments: resolve and reject.
//The two arguments, resolve and reject, are functions that can be used to complete the promise

const myPromise = new Promise((resolve, reject) => {
    // Do asynchronous work here and call resolve or reject

    // To complete the promise with an error
    reject('Mention error');

    // To mark the promise as successful, call the resolve function
    resolve('Result to be returned');
});


// Example#2 An example of resolving a promise that performs asynchronous work
const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Done!')
    }, 1000)
});
//Using Promise
let myPromise1State = myPromise1.then(value => console.log(value), error => console.log(error));
console.log(myPromise1State);
setTimeout(() => {
    console.log(myPromise1State)
}, 2000);

//Example:3 Catching error from promise and then aain throw error
const myPromise2 = new Promise((resolve, reject) => {
    reject('My Promise 2 Error');
});

myPromise2.then((result) => {
    console.log(result);
}, (error) => {
    console.log('Then Error ' + error);
    throw new Error('Throw Error from inside');
}).catch(error => {
    console.log('Error ' + error);
}).finally(() => {
    // should be used to prevent duplication of code between the then and catch handlers
    console.log('Run in both scenarios: Fulfill and rejection');
});

// Example#3
// When using promises, there are times when we may want to create a promise
// that is already in the fulfilled state. The Promise class has two static member
// functions that allow us to do this. Promise.reject() and Promise.resolve().
Promise.resolve('Resolve value!').then(console.log); // Expected output: Resolve value!
Promise.reject('Reject value!').catch(console.log); // Expected output: Reject value!


// Example#4 Promise Chaining
function apiCall1(result) {
    // Function that returns a promise
    return new Promise((resolve, reject) => {
        resolve('value1');
    });
}

function apiCall2(result) {
    // Function that returns a promise
    return new Promise((resolve, reject) => {
        resolve('value2');
    });
}

myPromse.then(apiCall1)
    .then(apiCall2)
    .then(result => console.log('done!'));


//  Example#5 Handle error and continue
// Promise chain handles rejection and continues
// apiCall1 is a function that returns a rejected promise
// apiCall2 is a function that returns a resolved promise
// apiCall3 is a function that returns a resolved promise
// errorHandler1 is a function that returns a resolved promise
myPromse.then(apiCall1) // The first API call will reject the promise with an error.

    // The rejected promise is handled by the second then handler.
    // it ignores apiCall2() and routes to the errorHandler1() function.
    // errorHandler1() will do some work and return a value or promise.
    .then(apiCall2, errorHandler1)

    // The return value or promise from errorHandler1 is passed
    // to the next handler, which calls apiCall3(), which returns a resolved
    // promise. Since the promise is resolved and there are no more then
    // handlers, the promise chain ends.
    .then(apiCall3)

    // The final catch is ignored.
    .catch(errorHandler2);

// Notes:
// 1: To skip from one rejection handler to the next rejection handler, we need to
//    throw an error inside the rejection function. This will cause the handler
//    returned promise to be rejected with the error thrown and skip to the next catch handler.
// 2: If we wish to exit the promise chain early and not continue when a promise
//    is rejected, you should only include a single catch handler at the end of the
//    chain. When a promise is rejected, the rejection is handled by the first
//    handler found. If this handler is the last handler in the promise chain, the
//    chain ends.

// Example#6 Handle error at end of chain to abort (the above notes are related to this example)
// Promise chain handles rejection and continues
// apiCall1 returns a rejected promise
myPromse.then( apiCall1 )
    .then( apiCall2 )
    .then(apiCall3 )
    .catch( errorHandler1 );
// Explanation of above snippet
// In the promise chain shown in the preceding snippet, when myPromise is
// resolved with a value, and the first then handler is called. apiCall1() is
// called and it returns a rejected promise. Since the next two then handlers
// do not have an argument to handle promise rejection, the rejection is passed
// to the catch handler. The catch handler calls errorHandler1 and then
// the promise chain ends.

// Example#7 If promises need not be completed in order, we can use the Promise.all()
let promise1 = new Promise( ( resolve, reject ) => setTimeout( () => resolve( 10 ), 100 ) );
let promise2 = new Promise( ( resolve, reject ) => setTimeout( () => resolve( 20 ), 200 ) );
let promise3 = new Promise( ( resolve, reject ) => setTimeout( () => resolve( 30 ), 10 ) );
Promise.all( [ promise1, promise2, promise3 ])
    .then( results => console.log( results ) ); //Expected output: [ 10, 20, 30 ]
