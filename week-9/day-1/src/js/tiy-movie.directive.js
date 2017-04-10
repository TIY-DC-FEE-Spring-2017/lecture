(function() {
    'use strict';

    angular.module('lecture')
        .directive('tiyMovie', tiyMovie);  // angular knows to look for... tiy-movie

    function tiyMovie() {
        return {

            templateUrl: 'templates/movie.template.html',
            restrict: 'EA',  // can be used as an "E"lement OR as an "A"ttribute
            scope: {
                // left side: variable to use in YOUR directive
                // right side (with "=") the name of the attribute in the parent template
                feature: '=movie',
                collection: '='  // with just "=" we are saying that the attribute when using the directive is the SAME as the name of the variable in OUR diretive's scope
            }

        };
    }

})();
