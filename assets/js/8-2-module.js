// Example#2 Object Containing Named Exports
const PI = 3.1415;
const DEGREES_IN_CIRCLE = 360;
function convertDegToRad( degrees ) {
    return degrees * PI / ( DEGREES_IN_CIRCLE /2 );
}
export { PI, DEGREES_IN_CIRCLE, convertDegToRad};