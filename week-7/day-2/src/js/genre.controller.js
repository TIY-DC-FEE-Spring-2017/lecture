(function() {
    'use strict';

    angular.module('bb').controller('GenreController', GenreController);

    function GenreController() {
        let vm = this;

        vm.genres = [
            { id: 1, name: 'Action' },
            { id: 2, name: 'Comedy' },
            { id: 3, name: 'Drama' }
        ];

        /**
         * Retrieve a genre's name by its ID
         * @param  {Number|String} id The ID to look up
         * @return {String}           The genre's name
         */
        vm.getGenreName = function getGenreName(id) {
            let genreName = null;

            vm.genres.forEach(function findTheGenre(genre) {
                if (genre.id === Number(id)) {
                    genreName = genre.name;
                }
            });
            return genreName;
        };
    }

})();
