(function() {
    'use strict';

    Array.from( document.querySelectorAll('nav a') )
        .forEach(function addClickEvent( element ) {
            element.addEventListener('click', function handleNavClick(evt) {
                evt.preventDefault();

                window.history.pushState(
                    { },  // any data we want to track about the next state
                    element.innerText,  // any string of text you want (but is the title of the new state)
                    element.getAttribute('href')  // what the new path should be
                );

                // in our case... evt.target === element
                changeContent( evt.target.getAttribute('href').substring(1) );
            });
        });


    window.addEventListener('popstate', function handlesBrowserNav(evt) {
        console.log( 'the popstate event', evt, window.location.pathname );
        changeContent( window.location.pathname.substring(1) );
    });


    /**
     * Changes the content inside the content wrapper to match the
     * template that is named the same as the first argument (the page).
     * @param  {String} page The template to load
     * @return {void}
     */
    function changeContent(page) {
        if (typeof(page) !== 'string') {
            return;
        }

        if (page.length === 0) {
            page = 'home';
        }

        let filename = '/templates/' + page + '.html';

        fetch(filename)
            .then(function handleResponse(response) {
                if (response.status > 199 && response.status < 300) {
                    return response.text();
                } else if (response.status === 404) {
                    return fetch('/templates/404.html')
                        .then(function handleResponse(response404) {
                            return response404.text();
                        });
                } else {
                    return Promise.reject('Unable to find template for ' + page);
                }
            })
            .then(function handleHtml(html) {
                document.querySelector('#content-wrapper').innerHTML = html;
            })
            .catch(function handleError(err) {
                console.warn(err);
            });
    }

    changeContent('home');


})();
