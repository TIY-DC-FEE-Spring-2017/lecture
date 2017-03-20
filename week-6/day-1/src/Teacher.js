(function() {
    'use strict';

    window.school = window.school || {};

    let Person = window.school.Person;

    window.school.Teacher = class Teacher extends Person {

        constructor(name, dateOfBirth) {
            super(name, dateOfBirth);
        }

        // I am overriding the PARENT method of the same name
        printName() {
            // but I can still call the PARENT method using `super`
            super.printName();
            // In ES5 we would have to do...
            // Person.prototype.printName.apply(this, []);

            // then do my own stuff
            console.log('I am a teacher!');
        }

    };

})();
