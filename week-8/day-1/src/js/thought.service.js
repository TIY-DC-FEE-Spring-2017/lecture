(function() {
    'use strict';

    angular.module('thoughter')
        .factory('ThoughtService', ThoughtService);

    ThoughtService.$inject = ['$http'];
    function ThoughtService($http) {

        /**
         * Gets thoughts from the data API
         * @return {Promise}
         */
        function getThoughts(page = 0) {
            let pageSize = 10;

            return $http({
                url: 'http://thoughter.herokuapp.com/api/Thoughts?filter={"limit":' + pageSize + ',"offset":' + (page * pageSize) + '}',
                method: 'get'
            })
            .then(function handleResponse(response) {
                console.log(response.status);
                return response.data;
            });

        }

        return {
            getThoughts: getThoughts
        };
    }

})();
