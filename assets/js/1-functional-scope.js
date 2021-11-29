var fn_scope = 5;
function testFnScope() {
    var testVariable = 10; //Functional Scope
    console.log('Accessing parent variable', fn_scope);
    console.log('local function variable', testVariable);

    //Hoisting Variable
    hoisted_variable = 'abc';
    console.log("Example of Hoisting: Assign and use variable before it declare", hoisted_variable);
}

testFnScope();

// Declare the variable after assigning and using the variable.
//Interpreter moves the instantiation of an entity to the top of the scope it was declared in,
var hoisted_variable;

// Error: can't access functional variable outside the function (error => undefined)
// console.log('accessing local function variable outside the function', testVariable);

function nested_parent() {
    var nested_parent_variable = 20;

    function nested_children() {
        var nested_children_variable = 30;

        //We can also access Grand Parent variable
        console.log('Accessing Grand Parent Variable', fn_scope);
        console.log('Accessing Nested Parent Variable', nested_parent_variable);
        console.log('Accessing Nested Children Local Variable', nested_children_variable);
    }

    nested_children();
    console.log('Accessing Nested Parent local Variable', nested_parent_variable);

    // Error: can't access nested functional variable outside the function (error => undefined)
    console.log('Accessing Nested Children Local Variable outside the function', nested_children_variable);
}

nested_parent();
