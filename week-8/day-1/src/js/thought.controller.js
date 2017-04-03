(function() {
    'use strict';

    angular.module('thoughter')
        .controller('ThoughtController', ThoughtController);

    ThoughtController.$inject = ['ThoughtService'];
    function ThoughtController(ThoughtService) {
        let vm = this;

        vm.hasError = false;
        vm.message = null;
        vm.thoughts = [];
        vm.page = 0;

        vm.getThoughts = function getThoughts() {
            vm.page++;
            console.log('getting page', vm.page);

            ThoughtService.getThoughts( vm.page )
                .then(function handleThoughtData(data) {
                    vm.thoughts = vm.thoughts.concat(data);
                })
                .catch(function handleErrors(errResponse) {
                    console.warn(errResponse);
                    vm.hasError = true;
                    if (errResponse.status === 404) {
                        vm.message = 'Looks like the API URL was incorrect';
                    } else {
                        vm.message = 'There was a nasty server error!';
                    }
                });
        }
        vm.getThoughts();

    }

})();
