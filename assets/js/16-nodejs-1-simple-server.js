//Creating and Loading Modules
// Node.js uses the CommonJS style module specification as the standard for loading and working with modules.
// CommonJS defined a specification for modules that was adopted by Node.js.
// Modules allow the developer to encapsulate functionality and expose only
// the desired parts of the encapsulated functionality to other JavaScript files.

// Loading Module
// In Node.js, we use the require function to import modules into our code
// Example: const bodyParser = require('body-parser');
// The require function can load any valid JavaScript file, NPM module, or JSON file.
// To load one of these files, you simply need
// to pass the file path into the require function instead of a module name. If
// no file extension is provided, Node.js will look for a JavaScript file by default.
//Note:
// A directory can also be loaded through the require function. If a directory is
// provided instead of a JS file, the require function will look for a file named
// index.js in the specified directory and load that file. If that file cannot be
// found, an error will be thrown.

//Example#1 Exported Module
// const exportedVariable = 10;
// function exportedFn( args ){ console.log( 'exportedFn' ) ;}
// module.exports = {
//     exportedVariable,
//     exportedFn
// };

// Example#2 Simple HTTP server (Uncomment the below code16-nodejs-simple-server.js)
// const http = require( 'http' );
// const hostname = '127.0.0.1';
// const port = 8000;
// const server = http.createServer( ( req, res ) =>
// {
//     res.statusCode = 200;
//     res.setHeader( 'Content-Type', 'text/plain' );
//     res.end( 'My first server!\n' );
// } );
// server.listen( port, hostname, () => console.log(
//     'Server running at http://${hostname}:${port}/' )
// );
