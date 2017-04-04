(function() {
    'use strict';

    angular.module('thoughter')
        .factory('ThoughtService', ThoughtService);

    ThoughtService.$inject = ['$http'];

    /**
     * Creates a new ThoughtService singleton
     * @param {Function} $http The service for making ajax calls
     * @return {Object}        The service's API methods
     */
    function ThoughtService($http) {

        /**
         * Gets thoughts from the data API
         * @param {Number} page The page of thoughts to retrieve
         * @return {Promise}
         */
        function getThoughts(page = 0) {
            let pageSize = 10;

            return $http({
                url: 'http://thoughter.herokuapp.com/api/Thoughts?filter={"order": "createTime DESC", "limit":' + pageSize + ',"offset":' + (page * pageSize) + '}',
                method: 'get'
            })
            .then(function handleResponse(response) {
                console.log(response.status);
                return response.data;
            });

        }

        /**
         * Adds a thought to the API data
         * @param {String} text The text of the thought
         * @return {Promise}    The resolved promise will have the data from the API
         */
        function addThought(text) {
            if (typeof(text) !== 'string' || !text.length) {
                return Promise.reject('You need to provide the text of the new thought.');
            }

            return $http({
                url: 'http://thoughter.herokuapp.com/api/Thoughts',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    content: text
                }
            })
            .then(function handleResponse(response) {
                return response.data;
            });
        }

        return {
            getThoughts: getThoughts,
            addThought: addThought
        };
    }

})();
