(function() {
    'use strict';

    angular.module('bb').controller('MovieController', MovieController);


    function MovieController() {
        let vm = this;

        // --------- all the data
        vm.newMovie = {};
        vm.movies = [];

        // --------- all the methods

        /**
         * Add a movie to the list
         * @param {Object} movie Should have `title`, `genre`
         * @return {void}
         */
        vm.addMovie = function addMovie(movie) {
            console.log(movie);
            if (typeof(movie) !== 'object' || typeof(movie.title) !== 'string') {
                return;
            }

            vm.movies.push({
                title: movie.title,
                genre: movie.genre
            });
            vm.newMovie = {};
        };
    }

})();
