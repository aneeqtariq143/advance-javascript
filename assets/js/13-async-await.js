//Example#1 Implementing promises
async function asyncExample1( /* arguments */) {/* do work */
}

//Example#2 Async function output
// If the return value is specified as a non-promise
// type, JavaScript automatically creates a promise and resolves that promise
// with the returned value.
async function asyncExample2() {
    return 'Hello';
}

async function asyncExample3() {
    return Promise.resolve('World');
}

asyncExample2().then(console.log); // Expected output: Hello
asyncExample3().then(console.log); // Expected output: World

// Example#3 Await keyword
// Even though async/await functionality makes JavaScript code look and act
// as if it were synchronous, JavaScript is still running the code asynchronously
// with the event loop.

//Note:
// Instead of using a then handler on the promise to get the
// resolution value, we simply await the value.
async function awaitExample4( /* arguments */) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 100);
    });
    const result = await promise;
    console.log(result); // Expected output: done!
}

awaitExample4( /* arguments */);


// Example#3 Async/await promise rejection
async function errorExample5( /* arguments */) {
    return Promise.reject('Rejected! Reject');
}

async function errorExample6( /* arguments */) {
    // we throw the string Rejected!. Since this is an error thrown inside an async
    // function, the async function wraps it in a promise and returns a promise
    // rejected with the thrown value.
    throw 'Rejected! Throw';
}

async function errorExample7( /* arguments */) {
    await Promise.reject('Rejected! await');
}

errorExample5().catch(console.log); // Expected output: Rejected!
errorExample6().catch(console.log); // Expected output: Rejected!
errorExample7().catch(console.log); // Expected output: Rejected!

// Example#4 Error handling with try/catch
// Note:
// Since await throws an error if the awaited promise is rejected, we can simply
// use the standard try/catch error handling mechanism in JavaScript to handle
// the async errors.
async function tryCatchExample8() {
// Try to do asynchronous work
    try {
        const value1 = await Promise.resolve('Success 1');
        const value2 = await Promise.resolve('Success 2');
        const value3 = await Promise.reject('Oh no!');
    }
    // Catch errors
    catch (err) {
        console.log(err); // Expected output: Oh no!
    }
}
tryCatchExample8();


async function nested9() { return await Promise.reject( 'Error! Nested' ); }
async function nested10() { return await nested9();}
async function nested11() { return await nested10();}
async function nestedErrorExample12() {
    try{ const value1 = await nested11(); }
    catch( err ){ console.log( err ); } // Expected output: Oh no!
}
nestedErrorExample12();

// Example:6 Integrating async/await (Break down Promise Chain in async/await)
// Promise chain - API functions return a promise
myPromse.then( apiCall1 ).then( apiCall2 ).then(apiCall3 ).catch( errorHandler );
async function asyncAwaitUse13( myPromise ) {
    try{
        const value1 = await myPromise;
        const value2 = await apiCall1( value1 );
        const value3 = await apiCall2( value2 );
        const value4 = await apiCall3( value3 );
    } catch( err ){
        errorHandler( err );
    }
}
asyncAwaitUse13( myPromise );


// Example#7 Parallel await promises
// Note:
// As we learned earlier, Promise.all runs all the child promises at the
// same time and returns a pending promise that is not fulfilled until all of the
// child promises have been resolved with a value.
async function awaitPromiseAl14l(){
    let promise1 = new Promise( ( resolve, reject ) => setTimeout( () => resolve( 10 ), 100 ) );
    let promise2 = new Promise( ( resolve, reject ) => setTimeout( () => resolve( 20 ), 200 ) );
    let promise3 = new Promise( ( resolve, reject ) => setTimeout( () => resolve( 30 ), 10 ) );
    const result = await Promise.all( [ promise1,
        promise2, promise3 ] );
    console.log( result ); //Expected output: [ 10, 20, 30 ]
}
awaitPromiseAll14();


// Example#8
// This same logic can be applied to Promise.race as well.
async function awaitPromiseAll15(){
    let promise1 = new Promise( ( resolve, reject ) => setTimeout( () => resolve( 10 ), 100 ) );
    let promise2 = new Promise( ( resolve, reject ) => setTimeout( () => resolve( 20 ), 200 ) );
    const result = await Promise.race( [ promise1, promise2 ] );
    console.log( result ); //Expected output: 10]
}
awaitPromiseAll15();