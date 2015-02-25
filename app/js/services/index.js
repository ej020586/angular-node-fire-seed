'use strict';

define([
    'angular',
    'app/js/services/Config',
], function (angular,
             Config) {
    var services = angular.module('appName.services', []);
    services.service('Config', Config);

    return services;
});