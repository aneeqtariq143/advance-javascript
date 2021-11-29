// Object Properties

//ES5 Style
function getPerson1ES5( name, age, height ) {
    return {
        name: name,
        age: age,
        height: height
    };
}
// Expected output: { name: 'Zachary', age: 23, height: 195 }
console.log(getPerson1ES5( 'Zachary', 23, 195 ));


//ES6 Style
function getPerson1ES6(name, age, height) {
    return {
        name,
        age,
        height
    };
}

// Expected output: { name: 'Zachary', age: 23, height: 195 }
console.log(getPerson1ES6('Zachary', 23, 195));

// Function Declarations

// ES5 Style
function getPerson2ES5( name, age, height ) {
    return {
        name: name,
        height: height,
        getAge: function(){ return age; }
    };
}
console.log(getPerson2ES5( 'Zachary', 23, 195 ).getAge());

// ES6 Style
function getPerson2ES6( name, age, height ) {
    return {
        name,
        height,
        getAge(){ return age; }
    };
}
console.log(getPerson2ES6( 'Zachary', 23, 195 ).getAge());


// Computed Properties

//ES5
const varName = 'firstName';
const person3 = {
    [ varName ]: 'John',
    lastName: 'Smith'
};
console.log( person3.firstName ); // Expected output: John


// ES6
// When creating computed properties
// in object literals, the value that's computed in the brackets does not need to
// be a variable; it can be almost any expression, even a function.
const varName2 = 'first';
function computeNameType( type ) {
    return type + 'Name';
}
const person4 = {
    [ varName2 + 'Name' ]: 'John',
    [ computeNameType( 'last' ) ]: 'Smith'
};
console.log( person4.firstName ); // Expected output: John
console.log( person4.lastName ); // Expected output: Smith