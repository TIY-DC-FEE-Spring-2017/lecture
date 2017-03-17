(function() {
    'use strict';

    window.lecture = window.lecture || {};

    /**
     * Add elements to the page for each repo in the dataset
     * @param {Array} data data from GitHub repos
     * @return {void}
     */
    window.lecture.addStuff = function addStuff(data) {
        if (!Array.isArray(data)) {
            return;
        }
        data.forEach(function insertElements(each) {
            if (!each.name) {
                return;
            }
            let article = document.createElement('article');
            article.innerText = each.name;
            document.querySelector('main').appendChild(article);
        });
    };


    /**
     * retrieves GitHub repo data
     * @param  {String} username The username to retrieve data for
     * @return {Promise}
     */
    window.lecture.getData = function getData(username) {
        if (!username) {
            return Promise.reject('Please provide a username!');
        }
        return fetch('https://api.github.com/users/' + username + '/repos')
            .then(function handleResponse(res) {
                if (res.status < 200 || res.status > 299) {
                    return Promise.reject('Non-200 status code!');
                }
                return res.json();
            });
    };

})();
