
// ALL ABOUT ARRAYS

let students = [
    { name: 'Mo', row: 1, instructor: 'Jordan' },
    { name: 'Liz', row: 3, instructor: 'Jordan' },
    { name: 'Alex', row: 3, instructor: 'Jordan' },
    { name: 'Nadia', row: 2, instructor: 'Jordan' }
];

// let peopleInRow3 = [];
//                                  we almost always only want the first argument in here
students.forEach( function printRow(student, i, theOriginalArray) {
    // console.log( student.name );
    // if (student.row === 3) {
    //     peopleInRow3.push(student);
    // }
} );
// for (let i = 0; i< students.length; i++) {
//     students[i].name.toUpperCase()
// }

let peopleInRow3 = students.filter(function getRowThree(student) {
    // if we return true, include THIS student in the results
    // if we return false, exclude THIS student in the results
    return (student.row === 3);
});
// console.log(peopleInRow3);

let newStudents = students.map(function capitalize(student) {
    return {
        name: student.name.toUpperCase(),
        row: (student.row + 1)  // OR use: ++student.row
    };
});
// console.log(newStudents);

students.push( { name: 'Seth', row: 2 } );
// console.log(students.length);
let removedStudent = students.pop();
// console.log(students.length, removedStudent);

let fruits = ['apple', 'orange', 'banana'];
let allFruits = fruits.join(' , ');
// console.log( allFruits );
// console.log( fruits );


// A LITTLE MORE ON FUNCTIONS

//                  default values
function addNumbers(x = 0, y = 0) {
    if (typeof(x) !== 'number') {
        x = 0;
    }
    if (typeof(y) !== 'number') {
        return 'NO WAY FOOL';
    }

    return x + y;
}

console.log( addNumbers(7, 13) );
console.log( addNumbers(7) );
console.log( addNumbers(7, true) );
console.log( addNumbers('foobar', 10) );
console.log( typeof(students) ); // object
console.log( typeof(addNumbers) ); // function
console.log( typeof( addNumbers(1, 1) ) ); // number


// USING NODE MODULES

let filesystem = require('fs');

filesystem.readFile(
    './data.csv',
    function printOutTheContents(possibleError, contentsOfTheFile) {
        if (possibleError) {
            console.log(possibleError);
            return;  // this will STOP the function (but only if there WAS an error)
        }

        // I know there was NO ERROR, because I got here...
        let stringValue = contentsOfTheFile.toString();
        let rows = stringValue.split('\n');
        console.log(rows);

    }
);
