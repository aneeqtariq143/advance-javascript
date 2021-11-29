// A function must meet three key criteria to be considered pure:
//     1: A function must always return the same output, when given the same inputs.
//     2: A function must have no side effects.
//     3: A function must have referential transparency.

// Example#1 Same Output Given Same Input
const state1 = {prop1: 5};

function notPure1() {
    return state1.prop1 > 0 ? 'Valid' : 'Invalid';
}

function pure1(val) {
    return val > 0 ? 'Valid' : 'Invalid';
}

notPure1(); // Expected output: 'Valid'
pure1(state1.prop1); // Expected output: 'Valid'


// Example#2 No Side Effects
// pure function must have no side effects. This simply means that a pure
// function cannot modify any objects or values passed in by reference.

// JavaScript, only objects and arrays can be passed into functions by
// reference. A pure function cannot modify these objects or arrays in any way.

// Important Note
// If your function needs to update or modify an array or object internally, we
// must first create a copy of the array/object. It is important to note that, in
// JavaScript, copying an object or array only copies the first level of the entity.
// This means that if an array or object has arrays or objects nested in it, these
// nested references will not be copied.

//How to Proper Copy object or array
// To properly copy an object, we must create a deep copy.
// A deep copy of an object is a copy that duplicates all nested references. This
// can be done recursively or through the Node.js deepcopy module.

function notPure2(input) {
    input.prop2 = 'test';
}

function pure2(input) {
    //Copy the input input object
    input = JSON.parse(JSON.stringify(input));
    // Since the object was cloned, the original object is not
    // modified. No side effect is created.
    input.prop2 = 'test';
    return input;
}


//Example#3 Function purity testing
function addItem(cart, item, quantity) {
    // Duplicate cart
    const newCart = JSON.parse(JSON.stringify(cart));
    newCart.push(...Array(quantity).fill(item));
    return newCart;
}