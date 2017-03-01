
// HW REVIEW - fizzbuzz

let maximum = 6;
maximum += 10;   // SAME as maximum = maximum + 10;  // *=, -=

// this one counts down instead of up
// for ( let i = maximum ; i > 0 ; i-- ) {}

// for ( let i = 1 ; i <= maximum ; i++ ) {
//
//     if ( !(i % 3) && !(i % 5) ) {
//         console.log('fizzbuzz');
//     } else if ( !(i % 3) ) {
//         console.log('fizz');
//     } else if ( !(i % 5) ) {
//         console.log('buzz');
//     } else {
//         console.log( i );
//     }
// }

// DAY 3 MATERIAL

let dog = {
    name: 'Vincent',
    age: 12,
    furColor: 'black',
    commands: [ 'sit', 'stay', 'come', '"play" dead' ]
};
let cat = {
    name: 'Pod',
    isAlive: false
};

function printAllTheThings(entity) {
    let properties = Object.keys(entity);

    console.log(properties, entity[ properties[0] ]);
}

// printAllTheThings(dog);
// printAllTheThings(cat);

// BUILT IN OBJECTS

let now = new Date();
console.log( now );
let tomorrow = new Date( '3/2/2017' );
console.log( tomorrow );
console.log( tomorrow.getHours() );
let asdfasdf = new Date( '3/1/2017 13:30' );
console.log(
    asdfasdf.getHours(),
    asdfasdf.getMinutes(),
    asdfasdf.getSeconds(),
    asdfasdf.getMonth() + 1,  // zero-indexed
    asdfasdf.getFullYear(),
    asdfasdf.getDay(),  // day of week, zero-based, starting on Sunday
    asdfasdf.getDate()
);
console.log( (asdfasdf.getMonth() + 1) + '/' + asdfasdf.getDate() + '/' + asdfasdf.getFullYear() );
console.log( asdfasdf.getTime() );

let twentyHours = asdfasdf.getTime() + ( 20 * 60 * 60 * 1000 );
let twentyHoursInDateForm = new Date( twentyHours );
console.log(twentyHoursInDateForm);

// current timestamp
// console.log( Date.now() );

let name = 'Jordan';
let role = new String('instructor');
console.log( name.length, name.toUpperCase() );
console.log( role.includes('c'), role.includes('z') );
console.log( role.split('n') );
console.log( role.split('') );
// substring takes two INDECES, and returns a piece of the string, starting at the first index, and ending BEFORE the second index
console.log( role.substring(4, 7) );

let age = '18';
console.log( age === 18 );
console.log( Number(age) === 18 );
console.log( Number('13 apples') );

console.log(
    Math.max(20, 1),
    Math.round(3.141592634),
    Math.ceil(3.141592634)
);

// get a random number
let randomGenerator = require('./rando.js');
let otherThing = randomGenerator;

console.log(
    randomGenerator(20),
    randomGenerator(6),
    randomGenerator(52),
    otherThing(100)
);
