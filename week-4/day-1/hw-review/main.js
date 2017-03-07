
let fetch = require('node-fetch');

console.log('STARTING THE FETCH');

let promise = fetch(
    'https://jordankasper.com',
    {
        method: 'GET',
        // headers: { /* I could have multiple things here */ }
    }
);

console.log('THE REQUEST IS SENT!');

promise.then(function handleResponse( response ) {
    console.log('HANDLING THE RESPONSE');
    console.log(response.status, response.statusText);
    console.log(response.headers);
    response.text().then( function printOutTheData( theHTMLForMySite ) {
        console.log('GOT THE CONTENT');
    } );
    console.log('AFTER THE CONTENT PROMISE');
});

console.log('AFTER THE RESPONSE PROMISE');
