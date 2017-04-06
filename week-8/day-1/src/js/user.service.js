(function() {
    'use strict';

    angular.module('thoughter')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {

        let token = localStorage.getItem('token');
        // we are able to use this variable LATER
        // inside the functions below, because functions
        // in JavaScript are CLOSURES

        function getToken() {
            return token;
        }

        function logout() {
            token = null;
            localStorage.removeItem('token');

            // TODO: send an API call to the server to logout
            //       but we have to tell the server who we are
            //       by sending ... the TOKEN in the Authorization header
        }

        /**
         * Log in a user with the API given the credentials supplied
         * @param  {String} username
         * @param  {String} password
         * @return {Promise}
         */
        function login(username, password) {

            // TODO: this is where we do the Ajax call!
            //       and then HOLD ONTO the token given back
            token = '123456787654323456786543212345';
            localStorage.setItem('token', token);

            // this is us being lazy and NOT calling the API
            // and instead using fake data for now...
            return Promise.resolve({ name: 'Jordan', id: '4hbdf784ebf' });

        }

        return {
            login: login,
            logout: logout,
            getToken: getToken
        };
    }

})();
