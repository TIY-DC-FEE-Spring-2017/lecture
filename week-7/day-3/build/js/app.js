'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
    'use strict';

    angular.module('school', []);
})();

(function () {
    'use strict';

    angular.module('school').controller('FinanceController', FinanceController);

    FinanceController.$inject = ['StudentService'];

    function FinanceController(StudentService) {
        var vm = this;

        vm.students = StudentService.getAllStudents();
    }
})();

(function () {
    'use strict';

    angular.module('school').controller('RegistrarController', RegistrarController);

    RegistrarController.$inject = ['StudentService'];

    function RegistrarController(StudentService) {
        var vm = this;
        vm.newStudent = {};

        vm.all = StudentService.getAllStudents();

        vm.add = function add(student) {
            StudentService.addStudent(student);
            vm.newStudent = {};
        };
    }
})();

(function () {
    'use strict';

    angular.module('school').factory('StudentService', StudentService);

    StudentService.$inject = ['$location'];

    function StudentService($location) {
        console.log('Creating a new StudentService', $location);

        var students = JSON.parse(localStorage.getItem('students')) || [];

        /**
         * Adds a student to the "database"
         * @param {Object} student the student to add with a name and grade
         * @return {void}
         */
        function addStudent(student) {
            if ((typeof student === 'undefined' ? 'undefined' : _typeof(student)) !== 'object') {
                return;
            }

            // TODO: MORE data audits

            students.push({
                name: student.name,
                grade: student.grade,
                paid: false
            });
            // store the array in localStorage, but convert it to a String first
            localStorage.setItem('students', angular.toJson(students));
        }

        function getAllStudents() {
            return students;
        }

        // Allows access to the functions OUTSIDE the StudentService
        // (this is kind of like our module.exports)
        return {
            addStudent: addStudent,
            getAllStudents: getAllStudents
        };
    }
})();

//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
