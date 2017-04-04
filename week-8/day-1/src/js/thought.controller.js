(function() {
    'use strict';

    angular.module('thoughter')
        .controller('ThoughtController', ThoughtController);

    ThoughtController.$inject = ['$state', 'ThoughtService'];
    function ThoughtController($state, ThoughtService) {
        let vm = this;

        vm.hasError = false;
        vm.message = null;
        vm.thoughts = [];
        vm.page = -1;
        vm.newThought = {};

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
        };
        vm.getThoughts();

        /**
         * Adds a thought from the user and adds the new thought
         * to the page at the top. Uses the ThoughtService for
         * actual persistence of data.
         * @param {String} text  The content of the new thought REQUIRED
         * @return {void}
         */
        vm.addThought = function addThought(text) {
            ThoughtService.addThought(text)
                .then(function changeStates(data) {
                    $state.go('home');
                });
                // TODO catch with a message
        };

    }

})();
