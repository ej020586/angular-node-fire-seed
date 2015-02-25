'use strict';

define(['angular',
        'ngResource',
        'uiRouter',
        'uiBootstrap',
        /**
         * The index files below are used as a central location to add filters, services, directives & controllers. To add them see the index files for instructions
         *
         * DO NOT : add references to any of these parts of angular here
         *
         */
        'app/js/filters/index',
        'app/js/services/index',
        'app/js/directives/index',
        'app/js/controllers/index'], function (angular) {
    /**
     * Instructions
     *
     * 'appName' should be replace with the actual app name
     */
    return angular.module('appName', [
        'ngResource',
        'ui.router',
        'ui.bootstrap',
        'appName.filters',
        'appName.services',
        'appName.directives',
        'appName.controllers'
    ]);
});
