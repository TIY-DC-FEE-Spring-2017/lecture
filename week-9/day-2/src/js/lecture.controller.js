(function() {
    'use strict';

    angular.module('lecture')
        .controller('LectureController', LectureController);

    function LectureController() {
        let vm = this;
        vm.fruits = [
            { name: 'blood orange', likes: 23 },
            { name: 'raspBerry', likes: 3 },
            { name: 'mango', likes: 65 },
            { name: 'kiwi', likes: 78 },
            { name: 'pine apple', likes: 43 }
        ];

        vm.chooseFruit = function chooseFruit() {
            console.log('choosing a fruit');
        };
    }
})();
