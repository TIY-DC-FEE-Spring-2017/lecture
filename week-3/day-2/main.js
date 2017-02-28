
// ALL ABOUT OBJECTS

// creating an object using "object constructor" syntax
let frog = new Object();
frog.color = 'green';

// creating an object using "object literal" syntax
let person = {
    arms: 2,
    name: 'Mo',
    senseOfHumor: false,
    age: 27,
    experience: {
        years: 3,
        team: 'The ' + 'Colts'
    },
    birthDay: function birthDay() {
        // person.age = person.age + 1;
        // this === person ... but ONLY inside the function
        this.age = this.age + 1;
    }
};

console.log( person.age, person.foo );
console.log( person.experience.years );

let pieceOfInfo = 'senseOfHumor';
console.log(person.pieceOfInfo);
console.log( person[pieceOfInfo], person['senseOfHumor'] );

// person.age = person.age + 1;
console.log(person.age);
person.birthDay();
console.log(person.age);
person.currentActivity = 'learning';
person.experience.terminationDate = '2016-12-31';

let name = 'jordan';
console.log( name.length );

let foo = {};


// ALL ABOUT ARRAYS

let animals = [];
let fruits = [ 'strawberry', 'apple', 'mango' ];
console.log( fruits[1] );
fruits[3] = 'banana';
console.log( fruits );

function addFruit( fruitName ) {
    // this will OVERRIDE whatever was at index 4 previously
    // fruits[4] = fruitName;
    // `push()` will add an entry to the END of the array
    fruits.push( fruitName );
}

console.log( fruits.includes( 'blueberry' ) );

addFruit('blueberry');
addFruit('orange');
console.log(fruits);

console.log( fruits.includes( 'blueberry' ) );
console.log( fruits.includes( 'pineapple' ) );

// ITERATION

// this inner function will be called ONCE PER ENTRY in our array
fruits.forEach( function printOut(foobar) {
    // print out each fruit in turn
    console.log( foobar );
} );

let sentence = 'hi there everyone';
let words = sentence.split( ' ' );
console.log(sentence);
console.log( words[2] );
