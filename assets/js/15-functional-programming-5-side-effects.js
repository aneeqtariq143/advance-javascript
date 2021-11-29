// In functional programming, side effects are any state change that can be seen
// outside of a function call, with the exception of the function return value.

// According to the rules of functional programming, functions are not allowed
// to modify any states outside of the function. If the function modifies a state,
// intentionally or unintentionally, this is considered a side effect because it
// breaks the tenets of functional programming.

// The following list shows a simple breakdown of the most common
// causes of side effects in JavaScript:
//     i) Modifying any external state (variable)
//         The two variable types include global variables and variables in the
//         parent function scope.
//      ii) Input/output
//             The list includes logging to a console, writing to a screen or display,
//             file I/O operations, network operations, HTTP requests, message
//             queues, and database requests.
//             By definition, resources such as the filesystem and console are shared states. Modifications
//             to these resources count as side effects.
//      iii) Starting or ending external processes
//          The third bullet point in the side effect list is similar to the second. Starting
//          an external process, such as a helper thread to offload some large,
//          synchronous amount of work, creates a side effect. When we start a new
//          process, we are directly changing the state of our system. A new thread is
//          created and it is outside of the scope of the function that created it. By
//          definition, this is a side effect.
//      iV) Calling any other function with side effects
//          The fourth item in the side effect list is also less intuitive. Any function that
//          calls a function with a side effect is considered to have a side effect.

// If any I/O operation causes a side effect, how can we apply FP principles to
// writing useful code without side effects? Since I/O operations cause side
// effects, won't every network call or file system operation used in our code
// cause a side effect? Yes. Side effects from I/O will be caused and they are
// unavoidable. The solution to this issue is to isolate side-effect code from the
// rest of the software.

// Any code that has a side effect or relies on modules or
// operations with side effects (database operations and so on) must be isolated
// from code that does not. This is usually done with modules.

// Most frontend and backend frameworks encourage us to separate state management from
// the rest of our code by using modules. Code that causes side effects is
// removed and put into its own module so that the rest of the code base can be
// tested and maintained without side effects.


// Avoiding Side Effects
// It is almost impossible to write a full application without side effects. Web
// applications/servers must handle/make HTTP requests - side effect by
// definition. In order to achieve this, you can do the following:
//      1) Isolate code with side effects from the rest of the code base.
//      2) Separate state management code and code with side effects from the rest of application.
// These methods make testing and debugging easier.