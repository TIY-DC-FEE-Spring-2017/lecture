
console.log('this is inside other things');

// function expression
module.exports = function sum(x, y) {
    let sum = x + y;
    console.log(sum);  // the NUMBER (not the function)
    return sum;
};

// this would OVERRIDE my previous module.exports value
// module.exports = 5;

console.log('done creating the sum function');

// for (let i=0; i<10; i++) {
//     console.log('wut?', i);
// }

// console.log( module.exports(2, 2) );
// console.log( module.exports.name );
//
// let person = {
//     name: 'Jordan'
// };
// let foo = person;
//
// // this makes a variable of the same name for you
// // it's as if we did: let hello = function hello() { ... }
// function hello() {
//     console.log('hi there');
// }
// let foobar = hello;
// console.log( foobar.name );
// console.log( foobar() );
