//Example#1 Individually Named Exports
export const PI = 3.1415;
export const DEGREES_IN_CIRCLE = 360;
export function convertDegToRad( degrees ) {
    return degrees * PI / ( DEGREES_IN_CIRCLE /2 );
}