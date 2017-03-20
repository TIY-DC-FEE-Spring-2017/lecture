(function() {
    'use strict';

    let Person = window.school.Person;
    let Student = window.school.Student;
    let Teacher = window.school.Teacher;

    let me = new Person('Jordan');
    console.log( me );
    me.changeWhatIAmCalled('Foobar');

    let nadia = new Student('Nadia', new Date('1/1/1963'), new Date());
    console.log( nadia );
    nadia.changeWhatIAmCalled('John');
    console.log( nadia.name );
    // To use a STATIC method, we just use the class name, NOT the specific Student
    console.log( Student.getSchool() );

    let jordan = new Teacher('Jordan', new Date('1/1/2006'));
    jordan.printName();

})();
