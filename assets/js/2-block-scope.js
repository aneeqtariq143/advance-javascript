// Top level scope
function blockScopeExample() {

    // Scope block 1
    for (let i = 0; i < 10; i++) {
        /* Scope block 2 */
        console.log(i);
    }

    //can't access outside the scope. It throws the error
    // console.log(i);

    if (true) {
        /* Scope block 3 */
    } else {
        /* Scope block 4 */
    }

    // Braces without keywords create scope blocks
    {
        /* Scope block 5 */
    }

    // Scope block 1
}

// Top level scope

blockScopeExample();

// Example of Temporal Dead Zone (TDZ).
// Block Scope not hoisted.
// console.log(example); // Would throw ReferenceError
let example;
console.log(example); // Expected output: undefined
example = 5;
console.log(example); // Expected output: 5

//Practical Example of Block Scope (same variable identifier with different scopes)
function fn1() {
    console.log('Scope 1');
    let scope = 11;
    console.log(scope); // Expected output 5
    {
        console.log('Scope 2');
        let scope = 'different scope';
        console.log(scope);  // Expected output 'different scope'
    }
    {
        console.log('Scope 3');
        let scope = 'a third scope';
        console.log(scope); // Expected output 'a third scope'
    }
    console.log(scope); // Expected output 5
}
fn1();

function fn2(){
    var aneeq = 'aneeq';
    let adeel = 'adeel';

    {
        console.log('Accessing Aneeq inside block scope: ', aneeq); // expected output "Aneeq": because it has function scope
        console.log('Accessing Adeel inside block scope: ', adeel); // can be accessed: because it has block scope and can access parent variable
    }
    console.log('Accessing Aneeq inside the function: ', aneeq);
    console.log('Accessing Adeel inside the function: ', adeel);
}
fn2();
// console.log('Accessing Aneeq outside the function: ', aneeq); // Can't be accessed outside the scope
// console.log('Accessing Adeel outside the function: ', adeel); // Can't be accessed outside the scope