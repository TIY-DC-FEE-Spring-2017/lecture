(function() {
    'use strict';

    let expect = chai.expect;

    describe('student service', function() {
        // let x;
        let StudentService;

        beforeEach(module('school'));  // this is your ng-app

        beforeEach(inject(function(_StudentService_) {  // inject the thing matching the name of the argument
            // x = 5;
            StudentService = _StudentService_;
        }));

        describe('getting all students', function() {
            it('should be able to give us an array of students', function() {
                let result = StudentService.getAllStudents();
                expect(result).to.be.an('array');
            });
        });

        describe('adding new students', function() {
            it('should be able to add a student with correct info', function() {
                expect(StudentService.getAllStudents().length).to.equal(0);
                let now = Date.now();
                StudentService.addStudent({
                    name: 'jordan' + now,
                    grade: 110
                });
                let students = StudentService.getAllStudents();
                expect(students.length).to.equal(1);
                expect(students[0].name).to.equal('jordan' + now);
                expect(students[0].grade).to.equal(110);
            });
        });


    });


})();
