(function() {
    'use strict';

    angular.module('lecture')
        .directive('myClock', myClock);

    myClock.$inject = [ 'dateFilter' ];
    function myClock(dateFilter) {

        return {
            templateUrl: 'templates/my-clock.template.html',
            restrict: 'E',
            link: setupClock,
            scope: {
                timeFormat: '=timeFormat',
                doSomethingWhenClicked: '&capture' // the "&" says to connect a FUNCTION versus data between the usage of the directive and the directive's template
            }
        };

        function setupClock(scope, element /*, attributes, controller */) {
            // EVERY time I USE the `<my-clock>` element, this function will be called
            console.log('this is the linked element:', element);
            let $ = angular.element;

            function updateTheTime() {
                let now = new Date();
                $(element)
                    .find('time')
                    .text( dateFilter(now, scope.timeFormat) );
                $(element).find('time')[0].style.backgroundColor = '#' + dateFilter(now, 'HHmmss');
            }

            setInterval(updateTheTime, 1000);
            updateTheTime();
        }

    }

})();
