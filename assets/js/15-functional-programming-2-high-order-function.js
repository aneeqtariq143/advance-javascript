// higher order function is a function that
// either takes another function in as an input argument or returns another
// function as the return value. Nearly all asynchronous code in JavaScript
// makes use of higher order functions by passing callback functions in as input
// arguments
// higher order functions are a key part of Functional Programming and are used for three key benefits:
//      i) abstraction,
//      ii) utilities, and
//      iii) complexity reduction.

// Creating higher order utility functions that take in some parameters
// and return a new function can be a great way to do this. These functions are
// often called closures in JavaScript.

function sortObjField1( field ) {
    return function ( v1, v2 ) {
        return v1[ field ] > v2[ field ];
    }
}
function sortObjField2( field, v1, v2 ) {
    return v1[ field ] > v2[ field ];
}

// Example#2 High Order Function
const data = [ { f1: 6, f2: 3 }, { f1: 12, f2: 0}, { f1: 9, f2: 1 }, { f1: 6, f2: 7 } ];
function swap( key1, key2 ) {
    return obj => {
        [ obj[ key1 ], obj[ key2 ] ] = [ obj[ key2 ],
            obj[ key1 ] ];
        return obj;
    }
}
console.log( data.map( swap( 'f1', 'f2' ) ) );