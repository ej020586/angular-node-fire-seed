'use strict';

define([
    'angular',
    'app/js/controllers/HomeController'
    /**  Controller files references go here
     *  ex
     *  'app/js/controllers/firstController.js',
     *  'app/js/controllers/firstController.js'
     */
], function (angular,
             HomeController
             /**
              * Reference to the controllers comma seperated
              * ex
              *     FirstController,
              *     SecondController
              */
    ) {
    /**
     * Adding all the controller files to the 'appName' Application
     *
     * Note : AppName should be replaced by the actually application name you are creating
     *
     * @type {module}
     */
    var controllers = angular.module('appName.controllers', []);
    /**
     * Adding the file referecnes as controllers
     * ex
     * controllers.controller('FirstController', FirstController);
     * controllers.controller('SecondController', SecondController);
     *
     */

    controllers.controller('HomeController', HomeController);

    return controllers;
});