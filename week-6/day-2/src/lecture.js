(function() {
    'use strict';

    window.calc = window.calc || {};

    /**
     * Sums all of the provided numbers together
     * @param  {Array}     numbers  All the numbers to add
     * @throws {TypeError}          When no array is provided
     * @return {Number}             The total
     */
    window.calc.sum = function sum(numbers) {
        let total = 0;

        if (!Array.isArray(numbers)) {
            let theError = new TypeError('Please provide an array of numbers');
            theError.errorCode = 418;
            throw theError;
            console.log('just after the throw'); // WILL NOT EXECUTE!
        }

        // This will produce a ReferenceError
        // console.log(x);

        numbers.forEach(function addANumber(eachNumber) {
            total += eachNumber;
        });

        return total;
    };



})();
