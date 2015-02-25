'use strict';

define(['./app'], function (app) {
    var appConfig = function ($stateProvider, $urlRouterProvider) {

        /**
         * Help on defining state configuration to be found in the UI Router Repo - https://github.com/angular-ui/ui-router
         */

        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'main': {
                        controller: 'HomeController',
                        controllerAs: 'HomeCtrl',
                        templateUrl: '../app/views/home.html'
                    }
                }
            })

        $urlRouterProvider.otherwise('/home');

    };
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    return app.config(appConfig);
});