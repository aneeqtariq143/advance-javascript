// function composition is a mathematical concept that allows you to combine multiple
// functions to create a new function.


function multiplyBy2( c ) {
    return 2 * c;
}
function sumNumbers( a, b ) {
    return a + b;
}
const v1 = sumNumbers( 2, 4 ); // 2 + 4 = 6
const v2 = multiplyBy2( v1 ); // 2 * 6 = 12
const v3 = multiplyBy2( sumNumbers( 2, 4 ) ); // 2 * ( 2 + 4 ) = 12

// Explanantion
// In the preceding snippet, we create a function to multiply a value by 2 and a
// function to add two numbers. We can use these functions to calculate a value
// in two ways. First, we use these functions independently, one at a time. This
// requires us to create a variable and save the output of the first function, call
// the second function with that value, and then save the result of the second
// function into a variable. This requires two lines of code and two variables.
// Our second option for calculating a value is by using function composition.
// We simply need to call one function inside the input argument of the second
// function and save the resultant variable. This requires one line of code and
// one variable. As we can see from the code in the snippet, using function
// composition will help simplify our code and reduce the number of lines of
// code we need to write.

// Benefits
// Function composition is very useful for reducing the number of lines of code
// we need to write, as well as reducing the complexity of our code.