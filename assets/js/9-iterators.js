// Step#1
// To create an iterator, we must define a function that takes a collection in as
// the parameter and returns an object.
// The return object must have a function  property called next.
// When next is called, the iterator steps to the next value
// in the collection and returns an object with the value and the done status of
// the iteration.

function createIterator(array) {
    let currentIndex = 0;
    return {
        next() {
            return currentIndex < array.length
                ?
                {
                    value: array[currentIndex++],
                    done: false
                } :
                {
                    done: true
                };
        }
    };
}

// Using an iterator
let it = createIterator( [ 'Hello', 'World' ] );

console.log( it.next() ); // Expected output: {value: 'Hello', done: false}
console.log( it.next() ); // Expected output: { value: 'World' , done: false }
console.log( it.next() ); // Expected output: { value: undefined, done: true }