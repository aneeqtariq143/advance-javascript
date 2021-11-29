const button1 = document.getElementById('button1');

// Every event handler function takes in a single parameter. This is the event object.
// The event object has many useful properties and functions. For example, we can use
// the "Event.target" property to obtain the DOM node that the event was originally fired from,
// or we can use "Event.type" to see the name of the event.
const handler1 = (ev) => {
    alert('I am listener');
    console.log(ev, ev.target, ev.type);
    button1.removeEventListener('click', handler1, true);
};
//Add event listener
button1.addEventListener('click', handler1, true);

//Remove event listener
// Note:
// To properly remove an event
// listener, removeEventListener must match it with a listener that's been
// added. RemoveEventListener looks for a listener that has the same type,
// listener function, and capture option. If a match is found, then the event listener is removed.
// button1.removeEventListener('click', handler1, true);


// A new instance of an event object can be created by calling a new instance of the
// event class (new Event()).
// The constructor takes in two arguments: "type" and "options".
//      Type is the type of the event
//      options is an optional object. containing the following fields: All three of these fields are also optional and by default is false:
//          bubbles: (The bubbles property indicates whether the event should bubble)
//          cancelable: (The cancelable property indicates whether the event can be canceled)
//          composed. (composed property indicates whether the event should trigger listeners outside of a shadow root).


// Event Propagation or Event Bubbling
// When an event is fired from a DOM element, it notifies the event listeners attached
// to the DOM node. The event then propagates, or bubbles, up the DOM tree to each
// parent node, until it reaches the top of the tree. This effect is called event
// propagation or event bubbling.

// Example# Bubbles Up
// It allows us make our code more efficient by
// reducing the number of event listeners required in the page. If we have an element
// with many child elements that all require the same user interaction, we could add a
// single event listener to the parent element and catch any event that bubbles up from
// the child nodes. This is called event delegation. Instead of attaching a listener to
// each child node, we delegate the event handing to the parent node.


// Event Propagation
// Event propagation can be controlled with the stopPropagation function. This
// function is one of the many functions in the event object. StopPropagation
// takes in no arguments. When it is called, it prevents further propagation of the
// current event. This means that it fully captures the event and prevents it from
// bubbling upwards to any other parent nodes. Stopping an event's propagation can
// be very useful if we are using delegation, or if we have event listeners on child and
// parent nodes that listen to the same event but do different tasks.



// Firing Events
// DOM nodes have a member function, dispatchEvent(), that allows us to fire, or dispatch,
// instances of the event object. DispatchEvent() should be called on the DOM node that you
// want the event node to be fired from. It takes in a single argument and returns a
// Boolean value. This argument is the event object that will be fired on the target
// DOM node. The DispatchEvent() boolean return value will be false if the
// event is cancelable and one of the event handlers that handled the event was called
// Event.preventDefault(). Otherwise, dispatchEvent() will return true.
const event2 = new MouseEvent( 'click' , {
    bubbles:true,
    cancelable: true
} );
const element2 = document.getElementById( 'button' );
const canceled2 = element2.dispatchEvent(event2);

// Note:
// The dispatchEvent method will throw an
// UNSPECIFIED_EVENT_TYPE_ERR error if the event's type is not specified
// properly. This means that if an event's type is null or an empty string, or the event
// was not initialized before dispatchEvent() is called, a runtime error will be thrown.


// Asynchronous
// It is important to note that events fired with dispatchEvent() do not get
// called asynchronously via the event loop. Normal events that are fired by DOM
// nodes call the event handlers asynchronously via the event loop. When
// dispatchEvent() is used, the event handlers get invoked synchronously. All
// applicable event handlers are executed and return before the code continues with
// the code after the dispatchEvent call. Other events could be blocked if there
// are many event handlers for that event, or if one of the event handlers does a lot of synchronous work.

// Important Note: Browser Compatibility
// Some browsers implement the fireEvent() function for firing events on DOM
// nodes. This function is a non-standard function that will not work on most
// browsers. Do not use this method in production code.

// Custom Events
// JavaScript also allows for the creation of custom events. Custom events are a way
// to fire events and listen for events with a custom type. The type of the event can be
// any non-empty string. The most basic way to create a custom event is by
// initializing a new instance of the event object with the event type as the custom
// event name. This is done with the following syntax: const event = new
// Event( 'myCustomEvent' ). Creating an event like this does not allow you
// to add any custom information or properties to the event. To create a custom event
// with additional information, we can use the CustomEvent class. The
// CustomEvent class constructor takes in two arguments. The first argument is a
// string that represents the type name of the custom event we want to create. The
// second argument is an object that represents the custom event initialization options.
// It accepts the same fields as the options passed into the event class initializer, with
// the addition of a field called detail. The detail field defaults to null and is an
// event-dependent value associated with the event. Any information we want passed
// in to our custom event can be passed in through the detail parameter. The data in
// this parameter is also passed to all of the handlers that listen for the custom event.