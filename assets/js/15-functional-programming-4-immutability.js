// Immutability is a very simple concept but very important to Functional
// Programming. The textbook definition of immutability is simply
// "something that is not changeable." In programming, we use the word to
// mean objects and variables whose state cannot be changed after they have
// been created.


// Any variable passed by reference instead
// of by value can be considered a shared state, since it can be modified by
// multiple separate scopes. It is important to write functions that prevent the
// mutation of data because any change to values passed by reference will act
// as a change to the shared state. Modifying the variables passed by reference
// will violate the principles of Functional Programming and will lead to side
// effects.

// Immutable objects in JavaScript can be created in two ways:
//     with the freeze function and
//     with third-party libraries.


// It is important to note that the freeze function is only a shallow freeze. Objects
// and arrays nested as properties (in objects) or elements (in arrays) will not be
// frozen by the function. If you want to fully freeze all nested
// freeze properties, you must write a helper function that traverses the object or array
// tree, freezing each nested level, or find a third-party library. The use of
// is shown in the following snippet: Object.freeze()

// Example#1 Freezing an object
const data = {
    prop1: 'value1',
    objectProp: {p1: 'v1', p2: 'v2'},
    arrayProp: [1, 'test', {p1: 'v1'}, [1, 2,3]]
};
Object.freeze(data);
Object.freeze(data.objectProp);
Object.freeze(data.arrayProp);
Object.freeze(data.arrayProp[2]);
Object.freeze(data.arrayProp[3]);

// Trick and note:
// There is one final way to obtain immutability in JavaScript; however, it is
// not true immutability. To avoid using third-party libraries or freezing any
// object or array passed to a function, we can simply create a copy of any
// variable passed by reference and modify the copy instead of the original.
// This will prevent the shared state issue of passing data by reference, but it
// comes with a memory efficiency and inefficiency trade-off.

// Finally, we can use the JSON
// operations stringify and parse to duplicate an object. This is done by first
// stringifying an object, then parsing the string (JSON.parse(JSON.stringify( obj ) )).