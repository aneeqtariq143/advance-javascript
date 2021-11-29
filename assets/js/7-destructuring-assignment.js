// Array Destructuring
// Example#1
let names = [ 'John', 'Michael' ];
let [ name1, name2 ] = names;
console.log( name1 ); // Expected output: 'John'
console.log( name2 ); // Expected output: 'Michael'

// Example#2 If we have more variables than array items
let names_array = [ 'John', 'Michael' ];
let [ name_array_1 ] = names_array;
let [ name_array_2, name_array_3, name_array_4 ] = names_array;
console.log( name_array_1 ); // Expected output: 'John'
console.log( name_array_2 ); // Expected output: 'John'
console.log( name_array_3 ); // Expected output: 'Michael'
console.log( name_array_4 ); // Expected output: undefined

// Example#3 ES6 array destructuring allows for skipping array elements
// To ignore a value, simply omit the variable identifier for that array index in the left-hand side of the expression.
let names_array_2 = [ 'John', 'Michael', 'Jessica', 'Susan' ];
let [ names_array_2_1,, names_array_2_3 ] = names_array_2;
// Note the missing variable name for the second array item
let [ ,,, ] = names_array_2; // Ignores all items in the array
console.log( names_array_2_1 ); // Expected output: 'John'
console.log( names_array_2_3 ); // Expected output: 'Jessica'

//Example#4 When we want to add a default value, we simply need to set the variable equal
// to the desired default value in the left-hand side of the destructuring expression
let [ a = 1, b = 2, c = 3 ] = [ 'cat', null ];
console.log( a ); // Expected output: 'cat'
console.log( b ); // Expected output: null
console.log( c ); // Expected output: 3

// Example#5 If we wish to swap the value of two variables
let x = 10;
let y = 5;
[ x, y ] = [ y, x ];
console.log( x ); // Expected output: 5
console.log( y ); // Expected output: 10

// Example#6 Destructured rest operator
function fn( n1, n2, n3 ) {
    console.log( n1, n2, n3 );
}
const values = [ 1, 2, 3 ];
fn( ...values ); // Expected output: 1, 2, 3


// Example#7 if we have more array elements than variables, we can use the rest operator to
// capture, or catch, all of the additional array elements during destructuring
const [ n1, n2, n3, ...remaining ] = [ 1, 2, 3, 4, 5, 6 ];
console.log( n1 ); // Expected output: 1
console.log( n2 ); // Expected output: 2
console.log( n3 ); // Expected output: 3
console.log( remaining ); // Expected output: [4, 5, 6 ]


// Object Destructuring

// Example#1 Basic Object Destructuring
const obj1 = { obj1_firstName: 'Bob', obj1_lastName: 'Smith'};
const { obj1_firstName, obj1_lastName } = obj1;
console.log( obj1_firstName ); // Expected output: 'Bob'
console.log( obj1_lastName ); // Expected output: 'Smith'

//Example#2 Object destructuring with no defined key
const obj2 = { obj2_firstName: 'Bob', obj2_lastName: 'Smith'};
const { obj2_firstName, obj2_middleName } = obj2;
console.log( obj2_firstName ); // Expected output: 'Bob'
console.log( obj2_middleName ); // Expected output: undefined


//Example#3 Object destructuring into new variable
const obj3 = { obj3_firstName: 'Bob', obj3_lastName: 'Smith'};
const { obj3_firstName: obj3_first, obj3_lastName } = obj3;
console.log( obj3_first ); // Expected output: 'Bob'
console.log( obj3_lastName ); // Expected output: 'Smith'

//Example#4 Object destructuring with default values
const obj4 = { obj4_firstName: 'Bob', obj4_lastName: 'Smith'};
const { obj4_firstName = 'Samantha', obj4_middleName = 'Chris' } = obj4;
console.log( obj4_firstName ); // Expected output:'Bob'
console.log( obj4_middleName ); // Expected output: 'Chris'

//Example#5 Object destructuring with the rest operator
const obj5 = { obj5_firstName: 'Bob', obj5_middleName: 'Chris', obj5_lastName: 'Smith' };
const { obj5_firstName, ...obj5_otherNames } = obj5;
console.log( obj5_firstName ); // Expected output: 'Bob'
console.log( obj5_otherNames ); // Expected output: { middleName: 'Chris', lastName: 'Smith' }

// Example#6 Nested array and object destructuring
const data = { arr: [ 1, 2, 3 ] };
const { arr: [ , v2 ] } = data;
console.log( v2 );


//Implementing Destructure into code
const courseCatalogMetadata = [
    {
        title: 'Linear Algebra II',
        description: 'Advanced linear algebra.',
        texts: [ {
            author: 'James Smith',
            price: 120,
            ISBN: '912-6-44-578441-0'
        } ]
    }
];
const [ course ] = courseCatalogMetadata;
const [ { texts: textbooks } ] = courseCatalogMetadata;
const [ { texts: [ textbook ] } ] = courseCatalogMetadata;
const [ { texts: [ { ISBN } ] } ] = courseCatalogMetadata;
console.log( course ); // Expected output: Object
console.log( textbooks ); // Expected output: Array[Object] {author: 'James Smith', price: 120, ISBN: '912-6-44-578441-0'}
console.log( textbook ); // Expected output: Object {author: 'James Smith', price: 120, ISBN: '912-6-44-578441-0'}
console.log( ISBN );