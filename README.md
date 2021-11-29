# Advanced JavaScript: Speed up web development with the powerful features and benefits of JavaScript


## Understanding Scope
JavaScript has the following two distinct types of scope:
* Functional Scope

    **Function scope** in JavaScript is created inside functions. When a function is
declared, a new scope block is created inside the body of that function.
Variables that are declared inside the new function scope cannot be accessed
from the parent scope; however, the function scope has access to variables in
the parent scope.
To create a variable with function scope, we must declare the variable with
the **var** keyword.

    **Note**    
    _Parent scope is the block of code, which the function is defined in. It is not
    the block of code in which the function is called._
    
    **Function Scope Hoisting**    
    Functions and variables declared using **var** are automatically hoisted in JavaScript. **Hoisting** means that the interpreter moves the instantiation of an entity to the top of the scope it was declared in 

* Block Scope 

    * A new block scope in JavaScript is created with curly braces ({}). A pair of curly braces can be placed anywhere in the code to define a new scope block. If statements, loops, functions, and any other curly brace pairs will have their own block scope. This includes floating curly brace pairs not associated with a keyword (if, for, etc). 
    * Variables declared with the keywords let and const have block scope
    * Block scoped variables are not hoisted to the top of the scope and therefore cannot be accessed until they are declared.
    
* Summary
    * Variable identifier names can be reused between blocks of scope.
    * All new scope blocks that are created can access the parent scope, or the scope in which they were created or defined.
    * A new function scope is created for each function defined. Variables can be added to function scope with the var keyword, and these variables are hoisted to the top of the scope.
    * Block scope is a new ES6 feature. A new block scope is created for each set of curly braces. Variables are added to block scope with the let and const keywords. The variables that are added are not hoisted and are subject to the TDZ
    * In the world of Professional JavaScript variable declaration, var is now the weakest link. In this topic, we will go over the new keywords, let and const, and explain why they are better than var.
    
**Note:**

Even though variables created with cannot be reassigned, this does const
not mean that they are immutable. If an array or object is stored in a variable
declared with const, the value of the variable cannot be overwritten.
However, the array content or object properties can be changed. The
contents of an array can be modified with functions such as push(), pop(), or
and object properties can be added, removed, or updated.
map() This is shown in the following code:

## Introduction Arrow Function

* Arrow functions, or Fat arrow functions, are a new way to create functions in ECMAScript 6. Arrow functions simplify function syntax. They are called fat arrow functions
* The key difference between arrow functions and normal functions in
  JavaScript is that arrow functions are **anonymous**. Arrow functions are not
  named and not bound to an identifier. This means that an arrow function is
  created dynamically and is not given a name like normal functions.
* Arrow functions can however be assigned to a variable to allow for reuse.
* Arrow function syntax can also vary, depending on several factors. Syntax
  can vary slightly depending on the number of arguments passed in to the
  function, and the number of lines of code in the function body. The special
  syntax conditions are outlined briefly in the following list:
    * Single input argument: arg1 => { /* function body */ }
    * No input arguments: ( ) => { /* function body */ }
    * Single line function body: ( arg1, arg2, argn ) => /* single line */
    * Single expression broken over multiple lines: ( arg1, arg2, argn ) => ( /* multi line single expression */ )
    * Object literal return value: ( arg1, arg2, argn ) => ( { /* object literal */ } )
    
## Learning Template Literals

* Template literals are a new form of string that was introduced in
  ECMAScript 6. They are enclosed by the backtick symbol (``) instead of
  the usual single or double quotes. Template literals allow you to embed
  expressions in the string that are evaluated at runtime. Thus, we can easily
  create dynamic strings from variables and variable expressions. These
  expressions are denoted with the dollar sign and curly braces (${
  expression }).
* Template literals are escaped like other strings in JavaScript. To escape a
  template literal, simply use a backslash (\) character. For example, the
  following equalities evaluate to true: `\`` === "`",`\t` === "\t",
  and `\n\r` === "\n\r".
  
 ## Enhanced Object Properties
 
 * **Object Properties**
  
    In ES6, we can shorthand each property and remove the repetition. In ES6, we can simply state the variable
 in the object literal declaration and it will create a property with a key that
 matches the variable name and a value that matches the variable value.
 
 * **Function Declarations**
 
    In ES6, we can define a function but with much less work. As with the
 property declaration, we don't need a key and value pair to create the
 function. The function name becomes the key name.
 
 * **Computed Properties**
 
    * ES6 also added a new, efficient way to create property names from variables.
This is through computed property notation.
    * When creating computed properties
      in object literals, the value that's computed in the brackets does not need to
      be a variable; it can be almost any expression, even a function.
      
  ## Destructuring Assignment
  
  Destructuring assignment is syntax in JavaScript that allows you to unpack
  values from arrays or properties from objects, and save them into variables.
  
  * Array Destructuring (used [] brackets to the surrounding variable)
    * Array destructuring allows us to extract multiple array elements and save
      them into variables.
    * In ES6, to destructure an array, we simply create an array containing the
      variable to assign data into, and set it equal to the data array being
      destructured. The values in the array are unpacked and assigned to the
      variables in the left-hand side array from left to right, one variable per array
      value. The first index variable will always be assigned the first index array item.
    * ES6 array destructuring allows for skipping array elements. If we have an
      array of values and we only care about the first and third values, we can still
      destructure the array.
    * Another very useful feature of array destructuring is the ability to set default 
      values for variables that are created with destructuring.
   
  * Object Destructuring (used {} brackets to the surrounding variable)
    * When doing basic object destructuring, the name of the parameter in the object and the name of the variable we are assigning it to must match. (See example#1)
    * If there is no matching parameter for a variable we are trying to destructure, then the variable will be set to undefined. (See example#2)
    * With advanced object destructuring syntax, we can save the key that's
      extracted into a variable with a different name. This is done by adding a
      colon and the new variable name after the key name in the destructuring
      notation. (See Example#3)
    * We can destructure an object and provide a default value. If a default value is provided and the key we are attempting
      to destructure does not exist in the object, then the variable will be set to the
      default value instead of undefined. (See Example#4)
    * We destructure the keys that we want to capture, and then we can
      add the rest operator to a variable and catch the remaining key/value pairs
      that have not been destructured out of the object. (See example#5)
      
   ## Classes and Modules
  * **Classes**
      * In JavaScript, a class can be defined with the keyword class. A class is
        created by calling the keyword class, followed by the class name and curly
        braces. Inside the curly braces, we define all of the functions and logic for
        the class.
      * A class can be created with the optional function **constructor**. The
        constructor, if not necessary for a JavaScript class, but there can only be one
        method with the name constructor in a class. The constructor is called when
        an instance of the class in initialized and can be used to set up all of the
        default internal values.
      * The keyword **this** is mapped to each class instantiation. It is a global scope
        class object. It is used to scope all functions and variables globally inside a
        class.
      * All the variables that is added to the this scope will be
        accessible inside any function inside the class.
      * When we create a subclass, we need to take note of the behavior of the constructor method. If
        we provide a constructor method, then we must call the **super()** function.
        super is a function that calls the constructor of the parent object.
      * If we do not specify a constructor for the subclass, the default constructor behavior
        will automatically call the super constructor.
        
  * **Modules**
      * Modules are features that allow the programmer to break code into smaller independent
        parts that can be imported and reused.
      * Modules are critical for the design of programs and are used to prevent
        code duplication and reduce file size.
      * Modules are a way to reference other code files from the current file. Code
        can be broken into multiple parts, called modules. Modules allow us to keep
        unrelated code separate so that we can have smaller and simpler files in our
        large JavaScript projects.
      * Modules in ES6 introduced two new
        keywords, export and import. These keywords allow us to make certain
        classes and variables publicly available when a file is loaded.
      * Modules use the **export** keyword to expose variables and functions
        contained in the file.
      * Everything inside an ES6 module is **private by default**. The only way to make anything public is to use the export keyword.
      * Modules can export properties in two ways, via named exports or default
        exports.
        
        **Named exports** allow for multiple exports per module.
        
        **Default exports** allow for just a single export per model
        
      * To export the contents of a module as a **default export**, we must use the
        default keyword. The default keyword comes after the export
        keyword. When we default export a module, we can also omit the identifier
        name of the class, function, or variable we are exporting.
        
      * The import keyword allows you to import a JavaScript module. Importing
        a module allows you to pull any items from that module into the current
        code file. When we import a module, we start the expression with the
        import keyword. Then, we identify what parts of the module we are going
        to import. Then, we follow that with the from keyword, and finally we
        finish with the path to the module file. The from keyword and file path tell
        the interpreter where to find the module we are importing.
        
        Different ways to import a module
        
         
            import { PI } from '8-1-module';// index2.js
            
            import { PI, DEGREES_IN_CIRCLE } from '8-1-module'; // index3.js
            
            import { PI as pi, DEGREES_IN_CIRCLE as degInCircle } from '8-1-module' // index4.js
            
            import * as MathModule from '8-1-module'     
      
   * To use an import in the browser, we must use the script tag. The module
   import can be done inline or via a source file. To import a module, we need
      to create a script tag and set the type property to module. If we are
      importing via a source file, we must set the src property to the file path.
      This is shown in the following syntax:
      <script type="module" src="./path/to/module.js">
      </script>
      
## Transpilation
Transpilation is defined as source-to-source compilation. Tools have been
written to do this and they are called transpilers. Transpilers take the source
code and convert it into another language. Transpilers are important for two
reasons. First, not every browser supports every new syntax in ES6, and
second, many developers use programming languages based off of
JavaScript, such as CoffeeScript or TypeScript. (for detail see book's chapter)

## Iterators and Generators
In their simplest forms, iterators and generators are two ways to process a
collection of data incrementally. They gain efficiency over loops by keeping
track of the **state** of the collection instead of all of the items in the collection.

* Iterators
    * An iterator is a way to traverse through data in a collection. To iterate over
      a data structure means to step through each of its elements in order.
    *  An iterator can be used to traverse custom complicated data structure or for
       traversing chunks of large data that may not be practical to load all at once.
    * To create an iterator, we must define a function that takes a collection in as
      the parameter and returns an object. The return object must have a function
      property called next. When next is called, the iterator steps to the next value
      in the collection and returns an object with the value and the done status of
      the iteration.
     * Summary     
        In summary, iterators provide us with a way to traverse potentially complex
     collections of data. An iterator tracks its current state and each time the next
     function is called, it provides an object with a value and a finality Boolean.
     When the iterator reaches the end of the collection, calls to
     iterator.next() will return a truthy finality parameter and no new
     values will be received.
     
* Generators
    * A generator provides an iterative way to build a collection of data. A
      generator can return values one at a time while pausing execution until the
      next value is requested. A generator keeps track of the internal state and each
      time it is requested, it returns a new number in the sequence.
    * To create a generator, we must define a function with an asterisk in front
     of the function name and the yield keyword in the body.
    *  The **asterisk designates** that this is a generator function.
    *  The **yield** keyword designates a break in the normal function flow until the generator
       function is called again.
       
## Asynchronous JavaScript

#### Callbacks
Callbacks are the most basic form of JavaScript asynchronous
programming. In the simplest terms, a callback is a function that gets called
after another function completes. Callbacks are used to handle the response
of an asynchronous function call.

Building Callbacks
* Callbacks in JavaScript follow a simple unofficial convention. A callback
  function should take in at least two arguments: **error and result**. When
  building callback APIs or writing callback functions, we recommend that
  you follow this convention so that your code can seamlessly integrate with
  other libraries.
* A callback may take in as many arguments as needed or specified by the
  higher order function, but the first argument must be the
  object. This error convention is followed by nearly every API in existence. Breaking from this
  convention when writing APIs will make your code much more difficult to
  integrate with any third-party APIs or applications.  
* If the higher order function does NOT encounter an error, the error
  parameter should be set to null.
* The result argument of a callback function contains the evaluated result of
  the higher order function. This may be the result of an HTTP request,
  database query, or any other asynchronous operation.
*  Most developers check to see if the error value is a truthy value. If err is
   truthy then error handling code is executed. This is a general practice;
   however, it is the lazy way of coding. In some cases, the error object could
   be the Boolean false, the number 0, the empty string, and so on. These all
   evaluate to falsy, even though the value is not null or undefined. If you are
   using an API, be sure to check that it will not return an error that evaluates to
   falsy.
* If you are building an API, we do not recommend ever returning an
  error that could evaluate to falsy.
  
##### Callback Pitalls
###### Callabck Hell
The most common callback pitfall is callback hell. After asynchronous
work completes and a callback is called, the callback function can call
another asynchronous function to do more asynchronous work. When it calls
the new asynchronous function, another callback will be provided. The new callback will be nested inside of the old callback.

Since callbacks can be nested, after several nesting layers
the code can become quite hard to read. This is callback hell.

Callback hell is about untidy code presentation, not the logic behind it.
Callback nesting can lead to code that runs without errors but is very hard
to read. Code that is very difficult to read can be very difficult to explain to
new developers or debug when an error occurs.

####### Fixing Callback Hell
Callback hell can easily be avoided with two tricks: named functions and
modules. A named function is very simple; define the callback and assign it
to an identifier (variable). The defined callback functions can be kept in the
same file or put into a module and imported. Using named functions in
callbacks will help prevent callback nesting from cluttering your code.

If we had a callback nesting depth of 30, the only way to make the
code readable would be to break the callbacks into named functions.

###### Non-Existence
Another potential pitfall is the non-existence of a callback function. If we are
writing an API, we must consider the possibility that the user of the API
might not pass a valid callback function into the API. If the intended
callback is not a function or does not exist, then trying to call it will cause a
runtime error. It is a good practice to validate that a callback exists and that it
is a function before attempting to call it. If the user passes in an invalid
callback, then we can fail gracefully.

#### Promises
In JavaScript, a promise is an object that wraps an asynchronous operation
and notifies the program when the asynchronous operation completes. The
promise object represents the eventual completion or failure of the wrapped
operation. A promise is a proxy for a value not necessarily known. Instead of
providing the value immediately, like a synchronous program, it promises to
provide a value at some point in the future. Promises allow you to associate
success and error handlers with an asynchronous action. These handlers are
called at the completion or failure of the wrapped asynchronous process.

###### Promises States       
Every promise has a state. A promise can only succeed with a value or fail
with an error once.

A promise comes in three states: **_pending, fulfilled, or rejected_**. A promise
starts in the pending state. This means that the async operation being done
inside the promise is not complete. Once the asynchronous operation
completes, the promise is considered settled and will enter either the fulfilled
or rejected state.

###### Using Promises 
Chaining promises is used to ensure that all promises complete in the order
of the chain.

If promises need not be completed in order, we can use the
**Promise.all()**

#### Async/Await
Async/await is a new syntax form added to simplify code that uses
promises. Async/await introduces two new keywords: async and await.
Async is added to function declarations and await is used inside an async
function. It is surprisingly easy to understand and use. In its simplest form,
async/await allows us to write promise-based asynchronous code that looks
almost identical to the synchronous code that does the same task. We will
use async/await to simplify code using promises and make it even easier to
read and understand.

* An **async** function implicitly returns a promise, no matter what the return
  value is specified to be. If the return value is specified as a non-promise
  type, JavaScript automatically creates a promise and resolves that promise
  with the returned value.
* The **await** keyword can only be used inside of an async function. Await
  tells JavaScript to wait until the associated promise settles and returns its
  result. This means that JavaScript pauses execution of that block of code,
  waits for the promise to be resolved while doing other async work, then
  resumes that block of code once the promise settles.
  
Note:

_This makes the awaited block of code run like a synchronous function, but it does not cost any
resources because the JavaScript engine can still do other work, such as run
scripts or handle events, while the asynchronous code is being awaited.
Even though async/await functionality makes JavaScript code look and act
as if it were synchronous, JavaScript is still running the code asynchronously
with the event loop._

* 