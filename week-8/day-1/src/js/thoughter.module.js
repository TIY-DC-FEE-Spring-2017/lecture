(function() {
    'use strict';

    angular.module('thoughter', ['ui.router'])
        .config(routerConfig);

    routerConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];
    function routerConfig($stateProvider, $urlRouterProvider) {

        // if the user goes to '' path, take them to '/'
        $urlRouterProvider.when('', '/');

        // if the URL does NOT match a state... where should it go?
        $urlRouterProvider.otherwise('/not-found');

        $stateProvider
            .state({
                name: 'home',
                url: '/',
                templateUrl: 'views/thought-list.template.html',
                controller: 'ThoughtController',
                controllerAs: 'thoughtCtrl'
            })
            .state({
                name: 'about',
                url: '/about-us',
                templateUrl: 'views/about.template.html'
            })
            .state({
                name: 'createThought',
                url: '/create',
                templateUrl: 'views/create-thought.template.html',
                controller: 'ThoughtController',
                controllerAs: 'tc'
            })
            .state({
                name: '404-not-found',
                url: '/not-found',
                templateUrl: 'views/not-found.template.html'
            });

    }

})();
