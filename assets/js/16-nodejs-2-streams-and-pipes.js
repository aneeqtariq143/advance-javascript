// Streams
// Streams are also arguably one of the most powerful
// features Node.js has to offer. Streams are simply collections of data, just like
// the standard array or string. The main difference is that, with streams, all of
// the data may not be available at one time. You can think of it like streaming
// a video off YouTube or Netflix. You do not need to download the entire
// video before you can begin to watch it. The video provider (YouTube or
// Netflix) sends, or "streams", the video to your computer in small pieces. You
// can begin watching a part of the video without waiting for any other parts to
// be loaded first. Streams are very powerful because they allow the server and
// the client to not need to load an entire large collection of data into memory
// at one time. In JavaScript servers, streams are crucial to memory
// management.

// In Node.js, streams come in four
// types—
//      readable,
//      writeable,
//      duplex, and
//      transform.

// Readable Stream
// Data is consumed from Readable Streams. They abstract the loading and
// chunking of a source. Data is presented for consumption (use) by the
// readable stream, one chunk at a time. After the data chunk has been
// consumed, it is let go by the stream and the next chunk is presented. A
// readable stream cannot have data pushed into it by the consumer

// A readable stream comes in two modes— (Read book page 389 for more explanation)
//      flowing and
//      paused.


// Writeable stream
// A writeable stream is a stream to which data can be written or pushed.
// Writeable streams abstract away the combining and handling of the source.
// Data is presented to the stream for consumption by the provider. The stream
// will consume data one chunk at a time until it is told to stop. After the
// stream has consumed a chunk of data and handled it appropriately, it will
// consume or request the next chunk of data that's available. An example of a
// writeable stream is the filesystem module function
// createWriteStream, which allows us to stream data to a file on the
// disk.

//Duplex Stream
// A duplex stream is a stream that is both readable and writeable. Data can be
// pushed in chunks by a provider to the stream or consumed in chunks by a
// consumer from the stream. An example of a duplex stream is a network
// socket such as a TCP socket.

// Transform Stream
// A transform stream is a duplex stream that allows the data chunks to be
// mutated as they move through the stream. An example of a transform stream
// is the gzip method in Node.js's ZLib module, which compresses data with
// the gzip compression method.

// Streams load data in chunks instead of all at once, so to effectively use
// streams, we need some way to determine if data has been loaded by the
// stream. In Node.js, streams are instances of the EventEmitter prototype.
// Streams emit events when key events happen, such as errors or data
// availability. Events listeners can be attached to streams with the .on() and
// .once() methods. Readable streams and writeable streams have events for
// data handling, error handling, and steam management.


// Example#1 Readable Stream
const fs = require('fs');
fs.createReadStream('./path/to/files.ext').on('data', data => {
    console.log(data);
});
// Explanation
// In the preceding example, we imported the fs module and call the
// createReadStream function. This function returns a readable stream.
// We then attach an event listener to the data event. This puts the stream in
// flowing mode, and every time a data chunk is ready, the callback provided
// will be called. In this example, our callback simply logs the data that the
// readable stream relinquishes.


// Example#2 Writable Stream
const fs = require('fs');
const writeable = fs.createWriteStream('./path/to/files.ext');
writeable.write('some data');
writeable.write('more data!');
//Explanation
// In the preceding snippet, we loaded the fs module and called the
// createWriteStream function. This returns a writeable stream that
// writes data to the filesystem. We then call the stream.write() function
// several times. Each time we call the write function, the data we pass into
// the function is pushed into the writeable stream and written to the disk.


//Pipping
// One of the most powerful features in Node.js is the ability to pipe streams.
// Piping a stream simply takes the source and "pipe" it to a destination. You
// take the data output from one stream and pipes it to the input of another
// stream. This is extremely powerful because it allows us to simplify the
// process of connecting streams.


//Example#3 Sending data to HTTP response with a stream
const fileSystemStream = load('filePath');
fileSystemStream.on('data', data => HTTP_Response.push(data));
fileSystemStream.on('end', HTTP_Response.end());
// Explanation
// In the pseudocode in the preceding snippet, we created a stream that loads
// from the specified file path. We then add an event handler for the data
// event and the end event. Every time the data event has data for us, we push
// that data to the HTTP_Response stream. Once there is no more data and
// the end event is fired, we close the HTTP_Response stream the data is
// sent to the client.


// Example#4 Piping data pseudo code
load( 'filePath' ).pipe( HTTP_Response );
// Explanation
// In the preceding snippet, we loaded the file data and piped it to the
// HTTP_response. Each chunk of data loaded by the readable stream is
// automatically passed to the writeable stream HTTP_Response. When the
// readable stream finishes loading the data, it automatically closes and tells the
// write stream to also close.