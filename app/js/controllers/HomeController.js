'use strict';

define(function () {
    var controller = function ($scope, $state) {
        this.title = "Home Controller";
        this.description = "You have made it to the base controller, Congraduations!!";

    };
    controller.$inject = ['$scope', '$state'];
    return controller;
});