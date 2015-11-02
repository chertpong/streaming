'use strict';

angular.module('streamingApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


