// Filesystem Operations
// Node's filesystem module, named 'fs,' provides an API with which we can
// interact with the filesystem. The filesystem APIs are modeled around the
// POSIX standard. You do not need to learn the details of the standard but
// understand that the fs modules follow it to maintain cross-platform compatibility.
// To import the filesystem module,
const fs = require( 'fs' );

// File Paths
// Most filesystem functions in Node.js require that you specify a path to the
// file that will be used. When specifying a file path for the fs module, the path
// can be specified in one of three ways:
//      a) as a string, (module will attempt to parse the string for a valid file path)
//      b) as a buffer, or (filesystem module will attempt to parse the contents of the buffer into a valid file path)
//      c) as a URL object (the filesystem will convert the object into a valid URL string and then attempt to parse the string for a valid file path.)
// File paths can be parsed as either relative or absolute paths. An absolute
// path is resolved from the root folder of the operating system. A relative path
// is resolved from the current working directory.

//Obtaining current working directory
process.cwd() //function

//Example#1 File Paths
fs.existsSync( '/some/path/to/file.txt' ); // path can be absolute or relative.
fs.existsSync( Buffer.from('/some/path/to/file.txt' ) ); // path can be absolute or relative.
fs.existsSync( new URL('file://some/path/to/file.txt' ) ); // path must be absolute.

// Note
// The filesystem module brings in many functions that allow us to interact
// with the hard disk. For a large portion of these functions, there are both
// synchronous and asynchronous implementations. The synchronous fs
// functions are blocking! It is very important to remember this when you are
// writing any code that uses the fs module.

// If you use a synchronous fs function to load a large file, it will block the
// event loop. No events will be handled until the synchronous fs function has
// finished its work. Nothing else will be done by the Node.js thread, including
// responding to HTTP requests, handling events, or any other asynchronous
// work.

//Recommendation
// 1) You should almost always use the asynchronous versions of the fs functions.
// 2) The only instances where you may need to use the synchronous
//    version is when you must perform a file system action that must occur
//    before ANY other operation. An example of this may be loading files that an
//    entire system or server depends on.