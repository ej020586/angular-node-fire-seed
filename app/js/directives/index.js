'use strict';

define([
    'angular',
    'app/js/directives/ExampleDirective',
], function (angular,
            ExampleDirective) {
    var directives = angular.module('appName.directives', []);
    directives.directive('ExampleDirective', ExampleDirective);

    return directives;
});