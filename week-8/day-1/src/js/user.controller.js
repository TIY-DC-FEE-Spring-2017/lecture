(function() {
    'use strict';

    angular.module('thoughter')
        .controller('UserController', UserController);

    UserController.$inject = ['$state', 'UserService'];
    function UserController($state, UserService) {
        let vm = this;

        vm.loginInfo = {};

        /**
         * Calls login function on the Serivce to authenticate a user
         * @param {Object} loginInfo Must contain a username and password
         * @return {void}
         */
        vm.login = function login(loginInfo) {
            console.log('logging them in', loginInfo);
            UserService.login(loginInfo.username, loginInfo.password)
                .then(function sendUserToCreatePage() {
                    $state.go('createThought');
                });
        };
    }

})();
