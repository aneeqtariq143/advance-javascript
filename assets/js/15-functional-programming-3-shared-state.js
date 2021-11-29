// Introduction of Shared State
// A shared state is any variable, object, or memory space that exists in a
// shared scope. Any non-constant variable used by multiple separate scopes,
// including the global scope and closure scopes, is considered to be in a shared
// state. In functional programming, shared states should be avoided. A shared
// state prevents a function from being pure. When the shared state rule is
// violated and the program modifies a variable, a side effect is created.

// Example#1 shared State
const state = { age: 15 };
function doSomething( name ) {
    return state.age > 13 ? `${name} is old enough` : `${name} is not old enough`;
}


// Example of Fixing the shared state
const person = { age: 10, firstName: 'Sandra', lastName: 'Jeffereys' };
function getOlder( age ) {
    return ++age;
}
function formatName( first, last ) {
    return 'Mrs. ${first} ${last}';
}
console.log( person );
person.age = getOlder( person.age );
person.name = formatName( person.firstName, person.lastName );
console.log( person );