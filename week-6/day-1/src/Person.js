(function() {
    'use strict';

    window.school = window.school || {};

    window.school.Person = class Person {
        // we are creating a function called `constructor`
        // The `constructor` function/method is special, and required!
        constructor(name, dateOfBirth) {
            // inside of ANY class method, we can use `this`
            // to refer to the current object
            this.name = name;
            this.organization = 'The Iron Yard';
            console.log('creating a new Person!');

            if ( ! (dateOfBirth instanceof Date) ) {
                dateOfBirth = new Date();
            }
            this.dob = dateOfBirth;
        }

        // Another function/method
        changeWhatIAmCalled(newName) {
            this.name = newName;
        }

        printName() {
            console.log(this.name);
        }

        // This is OVERRIDING the default Object.toString() method
        toString() {
            return this.name + ' is a member of ' + this.organization;
        }
    };

    // This is the old ES5 syntax
    // function Person(name) {
    //     this.name = name;
    //     // ...
    // }
    // Person.prototype.changeWhatIAmCalled = function changeWhatIAmCalled(newName) {
    //     this.name = newName;
    // };


    // the `Person` function below IS the constructor from above
    // let me = new Person('Jordan');
    // console.log( me.name );
    // console.log( typeof(me), typeof(Person) );
    // me.changeWhatIAmCalled('Jordan Kasper');
    // console.log( me.name );
    // console.log( me );
    //
    // let d = new Date();
    // // was the thing on the left created using the blueprint on the right?
    // if ( d instanceof Date ) {
    //     console.log( 'it is a Date!' );
    // }

})();
