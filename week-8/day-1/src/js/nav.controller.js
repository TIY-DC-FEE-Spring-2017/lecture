(function() {
    'use strict';

    angular.module('thoughter')
        .controller('NavController', NavController);

    NavController.$inject = ['UserService'];
    function NavController(UserService) {
        let vm = this;

        vm.logout = function logout() {
            UserService.logout();
        };

        /**
         * Is the user currently logged in?
         * @return {Boolean}
         */
        vm.isLoggedIn = function isLoggedIn() {
            return !!UserService.getToken();

            // if (typeof(UserService.getToken()) === 'undefined') {
            //     return false;
            // } else {
            //     return true;
            // }
        };
    }

})();
