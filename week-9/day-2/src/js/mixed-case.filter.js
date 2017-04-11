(function() {
    'use strict';

    angular.module('lecture')
        .filter('mixedCase', mixedCase);

    function mixedCase() {
        // this function gets executed ONCE

        /**
         * Converts the given text to mixed case
         * @param  {String}  text             The text to convert
         * @param  {Boolean} doLowerCaseFirst Whether or not to convert ALL text to lower case first
         * @param  {String}  suffix           Some text to add to the end of the string
         * @return {String}                   The converted text
         */
        return function doMixedCase(text, doLowerCaseFirst, suffix = '') {
            // the first argument is ALWAYS the thing to the left of the pipe in the HTML

            let convertedText = text;

            if (doLowerCaseFirst) {
                convertedText = convertedText.toLowerCase();
            }

            return convertedText    //  "blood orange"
                .split(' ')         //  ["blood", "orange"]
                .map(function convertCase(word) {
                    // FIRST TIME: "Blood"
                    // SECOND TIME: "Orange"
                    return word[0].toUpperCase() + word.substring(1) + suffix;
                })  // ["Blood", "Orange"]
                .join(' '); // "Blood Orange"

        };

    }

})();
