(function() {
    'use strict';

    window.calc = window.calc || {};

    try {
        console.log( window.calc.sum([1,2,3]) );
        // console.log('after the first sum call');
    } catch(err) {
        if (err instanceof TypeError) {
            // console.warn(err);  // this won't happen
        } else {
            throw err;
        }
    } finally {
        // console.log('I will ALWAYS execute');
    }

    try {
        console.log( window.calc.sum('foobar') );  // error produced here
        console.log('after the second sum call');  // thus this line will not happen
    } catch(err) {

        console.warn( err.message );
        // console.warn( err.stack );
        // console.warn( err.errorCode );

    } finally {
        // console.log('I will ALWAYS execute');
    }


    fetch('https://api.github.com/users/sjhdgfjhkasdgfjhkagsdf')
        .then(function handleResponse(response) {
            if (response.status < 200 || response.status > 299) {
                return Promise.reject('Bad status code!');
            }
            // handle the response data...
            // console.log('successful fetch!');
        })
        .catch(function handleErrors(err) {
            // console.log('There was an error!', err);
        });


    // console.log('at the bottom of playground');

})();
