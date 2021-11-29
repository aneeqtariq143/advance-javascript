//Example#1 Basic class: Creating classes output
class Vehicle1 {
    constructor( wheels, topSpeed ) {
        this.wheels = wheels;
        this.topSpeed = topSpeed;
    }
}
const tricycle = new Vehicle1( 3, 20 );
console.log( tricycle.wheels, tricycle.topSpeed);

//Example#2
class House1{
    constructor(address, floors = 1) {
        this.address = address;
        this.floors = floors;
    }
}
// Instantiate the class
let myHouse1 = new House1( '1100 Fake St., San Francisco CA, USA', 2, false );
console.log(myHouse1);

//Example#3 Creating a class with functions
class House2{
    constructor( address, floors = 1) {
        this.address = address;
        this.floors = floors;
    }
    getFloors() {
        return this.floors;
    }
}
let myHouse2 = new House2( '1100 Fake St., San Francisco CA, USA', 2 );
console.log( myHouse2.getFloors() ); // Expected output: 2

//Example#4 Extending a class with and without a constructor
class House3 {
    constructor( address = 'somewhere' ) {
        this.address = address;
    }
}
class Mansion3 extends House3 {
    constructor( address, floors ) {
        super( address );
        this.floors = floors;
    }
}
let mansion3 = new Mansion3( 'Hollywood CA, USA',6, 'Brad Pitt' );
console.log( mansion3.floors, mansion3.address ); // Expected output: 6, Hollywood CA, USA


// Imports
import { PI } from '8-1-module';// index2.js
import { PI, DEGREES_IN_CIRCLE } from '8-1-module'; // index3.js
import { PI as pi, DEGREES_IN_CIRCLE as degInCircle } from '8-1-module' // index4.js
import * as MathModule from '8-1-module'