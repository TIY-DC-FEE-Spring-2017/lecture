(function() {  // an ANONYMOUS function (our IIFE)
    'use strict';

    // namespace is how we communicate between IIFEs
    window.emailApp = window.emailApp || {};

    console.log('ui module');

    let email = document.querySelector('#email');
    let emailNote = document.querySelector('.email-note');

    email.addEventListener('focus', function showNote() {
        emailNote.style.display = 'block';
    });
    email.addEventListener('blur', function hideNote() {
        emailNote.style.display = 'none';
    });

    document.querySelector('form')
        .addEventListener('submit', function sendData(eventObj) {
            eventObj.preventDefault();
            window.emailApp.submitEmail(eventObj.target.action, {
                email: eventObj.target.querySelector('input').value,
                timestamp: Date.now()
            });
        });

})();
