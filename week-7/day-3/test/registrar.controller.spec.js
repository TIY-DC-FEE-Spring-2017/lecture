(function() {
    'use strict';

    let expect = chai.expect;

    describe('registar controller', function() {
        let RegistrarController;
        let mockStudentService = {};

        beforeEach(module('school'));  // this is your ng-app

        beforeEach(module(function($provide) {
            $provide.value('StudentService', mockStudentService);
        }));

        // we can't inject controllers, but we CAN inject a SERVICE
        // that knows HOW to create controllers... this is called a PROVIDER
        beforeEach(inject(function($controller) {
            mockStudentService.getAllStudents = function getAllStudents() {
                return [
                    { name: 'jordan', grade: 1000, paid: false }
                ];
            };
            mockStudentService.addStudent = function addStudent(argOne) {
                // this is called a "SPY"
                mockStudentService.addStudent.numTimesCalled++;
                return;
            };
            mockStudentService.addStudent.numTimesCalled = 0;

            RegistrarController = $controller('RegistrarController');

        }));

        it('should do stuff', function() {
            expect(RegistrarController.newStudent).to.be.an('object');
            expect(RegistrarController.all).to.be.an('array');
            expect(RegistrarController.add).to.be.a('function');
        });

        it('should call addStudent when adding', function() {
            expect(mockStudentService.addStudent.numTimesCalled).to.equal(0);
            RegistrarController.add({});
            expect(mockStudentService.addStudent.numTimesCalled).to.equal(1);
            // assert that the newStudent object was cleared
        });

    });

})();
