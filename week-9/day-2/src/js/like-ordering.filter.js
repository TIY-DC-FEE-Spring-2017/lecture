(function() {
    'use strict';

    angular.module('lecture')
        .filter('likeOrdering', likeOrdering);

    function likeOrdering() {
        return function doLikeOrdering(collection) {
            if (!Array.isArray(collection)) {
                return collection;
            }

            return collection.sort(function doLikeSorting(a, b) {
                // if a comes before b, return ANY negative number
                // if b comes before a, return ANY positive number
                // if we can't tell (or they're equal), return 0

                // a.likes is 75
                // b.likes is 50
                // b.likes - a.likes is -25
                return b.likes - a.likes;

                // This is the LOOOONG way to do it
                // if (a.likes > b.likes) {
                //     return -1;
                // } else if (b.likes > a.likes) {
                //     return 1;
                // } else {
                //     return 0;
                // }
            });
        };
    }
})();
