
console.log(  13  );
console.log( 'hello world!' );

let theNumber = 3 + 2;  // addition
console.log( 'the square of a number' );
console.log( theNumber * theNumber );

let name = 'Jordan';
console.log(name);
name = name + 'Kasper'; // concatenation
console.log(name);

const isAwesome = true;
// isAwesome = false;  // this line produces an Error

// var x = 5;  // a bit older way
/* this is a comment too! */

if ( 1 < 3 ) {
    console.log('one is less than three');
}
if ( isAwesome ) {
    // this line WILL execute
    console.log('will this work?');
}
if ( name === 'Jordan' ) {
    console.log('I am Jordan!');
}
if ( name !== 'Jordan' ) {
    console.log('not jordan? then who!!');
}


function isEvenOrOdd(someNumber) {
    console.log('i am inside the fn');
    // modulo (or modulus)
    if ( (someNumber * someNumber) % 2 ) {
        console.log('I am odd!');
    } else {
        console.log( 'I am even' );
    }
    console.log('this is the end of the fn');
}
console.log('about to execute fn');
isEvenOrOdd( 3 );
console.log('done executing fn');
isEvenOrOdd( 6 );
console.log('ran it again');
isEvenOrOdd( theNumber );

function mashUp(thingOne, thingTwo) {
    let theMashing = thingOne + thingTwo;
    // "return" tells the fn to STOP operation and give back some result
    return theMashing;
}
// variable cdeclaration and instantiation
let combinedWords = 'previous value';
//                  the return value
//              |------'Foobar'------|
combinedWords = mashUp( 'Foo', 'bar' );
console.log( combinedWords );
