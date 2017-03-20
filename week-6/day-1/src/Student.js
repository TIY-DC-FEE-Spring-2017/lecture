(function() {
    'use strict';

    window.school = window.school || {};

    let Person = window.school.Person;

    window.school.Student = class Student extends Person {
        constructor(name, dateOfBirth, enrollmentDate) {
            // first execute the `constructor` of my parent class (Person)
            super(name, dateOfBirth);

            // now we can add whatever Student-specific stuff we need
            this.grade = 'A';
            this.enrollmentDate = enrollmentDate;
            console.log('creating a student!');
        }

        changeGrade(grade) {
            this.grade = grade;
        }

        static getSchool() {
            return 'The Iron Yard';
        }
    };


})();
