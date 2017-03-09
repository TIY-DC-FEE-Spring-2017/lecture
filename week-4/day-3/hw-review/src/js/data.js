(function() {
    'use strict';

    window.emailApp = window.emailApp || {};

    console.log('data module');

    window.emailApp.submitEmail = function submitEmail(url, data) {

        console.log('data to send', url, data);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(function handleResponse(response) {
            // check the response status code
            response.text().then(function printResult(result) {
                console.log('submit result:', result);
            });
        });

    };

})();
