// Recommended Guide Lines for designing callbacks
// 1: A callback function should take in at least two arguments: "error" and "result"
// 2: The contents of the error argument may be any legal JavaScript value.
//    In most cases, it is an instance of the Error class; however, there is no convention for the
//    contents of the error object. Some APIs may return an object, string, or number instead
//    of an Error instance. If the higher order function does NOT encounter an error,
//    the error parameter should be set to null.
// 3: The result argument of a callback function contains the evaluated result of the
//    higher order function. This may be the result of an HTTP request, database query,
//    or any other asynchronous operation.
// 4: When handling errors in callback functions, we must check the error
//    argument. If the error argument is not null or undefined, then we must
//    handle the error in some way.

const myCallback = (err, result) => {
    if (err) {
        throw err;
    }
    console.log(err, result);
};

// The most common callback pitfall is callback hell. After asynchronous
// work completes and a callback is called, the callback function can call
// another asynchronous function to do more asynchronous work. When it calls
// the new asynchronous function, another callback will be provided. The new
// callback will be nested inside of the old callback.
//
// Since callbacks can be nested, after several nesting layers
// the code can become quite hard to read. This is callback hell.

// TwitterAPI.listFollowers({
//     user_id:
//         "example_user"
// }, (err, result) => {
//     const [id1, id2, id3] = [result[0].id, result[1].id, result[2].id];
//     TwitterAPI.unfollow({user_id: id1}, (err, result) => {
//         TwitterAPI.block({user_id: id1}, (err, result) => {
//             TwitterAPI.unfollow({user_id: id2}, (err, result) => {
//                 TwitterAPI.block({user_id: id2}, (err, result) => {
//                     TwitterAPI.unfollow({user_id: id3}, (err, result) => {
//                         TwitterAPI.block({user_id: id3}, (err, result) => {
//                             console.log("Unfollowed and blocked 3 users !");
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

//Fixing Callback Hell
// Callback hell can easily be avoided with two tricks: named functions and
// modules. A named function is very simple; define the callback and assign it
// to an identifier (variable). The defined callback functions can be kept in the
// same file or put into a module and imported. Using named functions in
// callbacks will help prevent callback nesting from cluttering your code.

function listHandler(err, result) {
    TwitterAPI.unfollow({user_id: result[0].id}, unfollowHandler);
}

function unfollowHandler(err, result) {
    TwitterAPI.block({user_id: result.id}, blockHandler);
}

function blockHandler(err, result) {
    console.log("User unfollowed and blocked!");
}

TwitterAPI.listFollowers({user_id: "example_user"}, listHandler);


// Writting API's
// Another potential pitfall is the non-existence of a callback function. If we are
// writing an API, we must consider the possibility that the user of the API
// might not pass a valid callback function into the API. If the intended
// callback is not a function or does not exist, then trying to call it will cause a
// runtime error. It is a good practice to validate that a callback exists and that it
// is a function before attempting to call it. If the user passes in an invalid
// callback, then we can fail gracefully.

function apiFunction(args, callback) {
    if (!callback || !(typeof callback === "function")) {
        throw new Error("Invalid callback. Provide a function.");
    }
    let result = {};
    let err = null;
// Do work
// Set err and result
    callback(err, result);
}

// Implementing callbacks
function higherOrder(data, cb) {
    if (!cb || !(typeof cb === 'function')) {
        throw new Error('Invalid callback. Please provide a function.');
    }
    console.log(data);
    setTimeout(cb, 10);
}

try {
    higherOrder(1, null);
} catch (err) {
    console.log('Got error: ${err.message}');
}
higherOrder(1, () => {
    console.log('Callback Called!')
});