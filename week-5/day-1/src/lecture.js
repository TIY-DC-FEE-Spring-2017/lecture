(function() {
    'use strict';

    /**
     * Adds the collection of numbers provided together and gives back
     * the result in the promise resolution
     *
     * @param  {Array} numbers The numbers to sum up
     * @return {Promise}       The promise will resolve with the data including the original array and the totalValue
     */
    function sum(numbers) {

        let additionPromise = new Promise(function addPromise( resolve, reject ) {
            if (!Array.isArray(numbers)) {
                // we are telling the promise that the desired action
                // did NOT complete sucessfully
                reject('Hey! Gimme an array of numbers!');
                return;  // we don't want to keep going!!
            }

            let total = 0;
            numbers.forEach(function doAddition(eachNumber) {
                total += eachNumber;
            });

            // I'm ready to inform the Promise that everything went well
            // so we execute the `resolve` function with our resulting data
            resolve( { totalValue: total, numbers: numbers } );
        });

        return additionPromise;
    }

    sum([1, 2, 3])
        .then(function handleTotalValue(theSummingData) {
            console.log('addition complete', theSummingData);
            let newNumbers = [theSummingData.totalValue, 10];

            // returning a Promise from INSIDE a .then() callback
            // will allow you to chain ANOTHER .then() later...
            let aNewPromise = sum(newNumbers);
            return aNewPromise;
        })
        .then(function printFinalResult(moreSummingData) {
            // this SECOND .then() handles the SECOND Promise ("aNewPromise" above)
            // the data will be the result of the SECOND call to sum()
            console.log('more summing data', moreSummingData.totalValue);
            // now a THIRD call to sum() which will REJECT because it is not an array of numbers
            if (moreSummingData.totalValue > 10) {
                return sum('foo');
            }
        })
        .then(function handleThirdSum(theDataFromSumCallNumberThree) {
            console.log('this will not happen');
        })
        .catch(function handleErrors(error) {
            // this catch will catch ANY rejections in the Promise chain
            console.error('we should never get in here!');
        });

    sum('foo')
        // .then() represents the SUCESSFUL case (resolution)
        .then(function didItWork(summingData) {
            console.log('this should not happen!', summingData);
        })
        // we EXPECT this promise to reject (fail), so this callback should execute
        .catch(function handleErrors(error) {
            console.error(error);
            console.info('this is an info message');
            console.warn('this is a warning');
        });


    /**
     * Retrieves data from GitHub for a user
     * @return {Promise} The promise from the API call to GitHub with the data
     */
    function getData() {
        // this whole thing, returns a Promise... the one returned by response.json()
        return fetch('https://api.github.com/users/jakerella')
            .then(function handleResponse(response) {
                if (response.status > 199 && response.status < 300) {
                    return response.json();
                } else {
                    // creating a new promise and immediately rejecting it
                    return Promise.reject('Looks like a bad status code');
                }
            });
    }

    /**
     * Logs out the result of getting the data
     *
     * @return {void}
     */
    function putDataInThePage() {
        getData()
            // this .then() is handling the SECOND promise above...
            // the one returned by response.json()
            .then(function handleTheRsponseData(userData) {
                console.log(userData);
            })
            .catch(function handleErr(err) {
                console.error(err);
            });
    }

    putDataInThePage();

})();
