'use strict';

/**
 * This service loads the configuration options from config/config.json.
 *
 * @class MyPixConfigFactory
 */
define(function () {
    var service = function ($log, $modal, $q, $resource) {
        var self = {};
        var resource = null;
        var loaded = false;
        var loadingDeferred = null;

        if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.host;
        }

        var url = window.location.origin+"/config.json";

        self.required = function (modal) {
            if (loadingDeferred === null) {
                $log.log("Configuration hasn't been loaded and is being loaded now");
                loadingDeferred = $q.defer();
                var m = (modal !== null) ? modal : true;
                loadingDeferred.resolve(self.load(m));
            }

            return loadingDeferred.promise;
        };

        Object.defineProperty(self, 'loaded', {
            get: function () {
                return loaded;
            }
        });

        self.get = function (key, default_val) {
            if (!resource) {
                $log.log("No configuration is loaded, you may receive errors getting data. use required method to validate confugration has been loaded before tryingt to use this service");
            }
            if (resource && resource['data'] && resource['data'][key]) {
                return resource['data'][key];
            } else if (self[key]) {
                return self[key];
            } else {
                return (default_val) ? default_val : false;
            }
        };

        self.load = function () {

            var r = $resource(url);

            var get = r.get({}, function (res) {
                resource = res;
                loaded = true;
            });

            return get.$promise;
        };

        return self;

    };

    service.$inject = ['$log', '$modal', '$q', '$resource'];

    return service;
});