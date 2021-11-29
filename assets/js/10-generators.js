// Example#1
// To create a generator, we must define a function with an asterisk in front
// of the function name and the yield keyword in the body.

// How it works
// The asterisk designates that this is a generator function.
// When the generator is created, it is automatically initialized with an internal next function.
// When the next function is called for the first time, the execution starts, the loop begins
// and when the yield keyword is reached, the execution of the function is stopped until the next function is called again.
// When the next function is called, the program returns an object containing a value and done.
// If the done value is set to true, then the generator has finished execution and will no longer return new values.

// Steps of Creating Generator
// 1. Create a generator called gen.
//     Place an asterisk before the identifier name.
// 2. Inside the generator body, do the following:
//     Create a variable called i and set the initial value to 1. Then, create an infinite while loop.
//     In the body of the while loop, yield i and set i to i * 2.
// 3. Initialize gen and save it into a variable called generator

//Example#1
function *gen() {
    let i = 1;
    while (true){
        yield i;
        i = i * 2;
    }
}
const generator = gen();
console.log( generator.next(), generator.next(), generator.next() ); //Expected Output: {value: 1, done: false} {value: 2, done: false} {value: 4, done: false}


// Another powerful tool of a generator is the ability to pass in data via the next function and yield keyword.
// When a value is passed into the next function, the return value of the yield expression will be set to the value that's passed into next
// Example#2
function *gen2() {
    let i = 0;
    while (true){
        let inData = yield i++;
        console.log( inData );
    }
}
let sequence = gen2();
sequence.next();
sequence.next( 'test1' );
sequence.next();
sequence.next( 'test2' );
// Expected output:
// 'test1'
// undefined
// 'test2'
