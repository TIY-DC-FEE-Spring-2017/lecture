
let sum = require('./other-thing.js');

console.log( sum );
console.log( sum(13, 7) );

function hello() {
    return 'hello';
}

// function (or method) chaining
hello().toUpperCase().split('').join('-');
// H-E-L-L-O
