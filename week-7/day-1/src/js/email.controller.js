(function() {
    'use strict';

    angular.module('email')
        .controller('EmailController', EmailController);

    let counter = 0;

    function EmailController() {
        let vm = this;

        counter++;
        console.log('this is EmailController #', counter);

        // this COULD come from an API...
        // but for now we'll just use fake data
        vm.name = 'Jordan';
        vm.emails = [
            { sender: 'Russell', subject: 'I like cookies', receiveTime: Date.now() },
            { sender: 'Mom', subject: 'I sent you some cookies', receiveTime: Date.now() - 92545648 },
            { sender: 'Samara', subject: 'Did you like the cookies?', receiveTime: Date.now() - 9922122548 }
        ];

        setTimeout(function changeName() {
            // this function will execute AFTER 1500 milliseconds have passed
            console.log('changing the name');
            // this will NOT actually change the UI
            vm.name = 'Russell';
        }, 1500);

        /**
         * Formats the current date for display in the UI
         * @return {String} The formatted date suitable for display
         */
        vm.getShortDate = function getShortDate() {
            let today = new Date();
            return (today.getMonth() + 1) + '/' + today.getDate();
        };

        vm.checkEmail = function checkEmail() {
            // do some work to check for new emails...
            // like make an Ajax call for data
            vm.emails.push(
                { sender: 'Kayt', subject: 'I like gluten-free cookies', receiveTime: Date.now() }
            );
        };

    }

})();
