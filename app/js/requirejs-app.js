'use strict';

require.config({
    baseUrl: '../',
    callback: function () {
        require(['angular',
                'app/js/app',
                'app/js/config'], function (angular, app) {
            angular.bootstrap(document, [app['name']]);
        });
    },
    paths: {
        angular: 'lib/angular/angular',
        jquery: 'lib/jquery/dist/jquery.min',
        q: 'lib/q/q',
        ngResource: 'lib/angular-resource/angular-resource',
        uiBootstrap: 'lib/angular-bootstrap/ui-bootstrap-tpls.min',
        uiRouter: 'lib/angular-ui-router/release/angular-ui-router',
        underscore: 'lib/underscore/underscore'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'jquery': {
            'exports': '$'
        },
        'ngResource': {
            'deps': ['angular']
        },
        'uiBootstrap': {
            'deps': ['angular']
        },
        'uiRouter': {
            'deps': ['angular']
        },
        'underscore': {
            'exports': '_'
        }
    }
});