(function() {
    'use strict';

    window.mathModule = window.mathModule || {};

    window.mathModule.sum = function sum(x, y = 0) {
        x = Number(x);
        y = Number(y);
        return x + y;
    };

    function multiply(x, y) {
        return x * y;
    }

})();
