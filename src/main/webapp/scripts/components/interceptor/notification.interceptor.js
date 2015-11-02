 'use strict';

angular.module('streamingApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-streamingApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-streamingApp-params')});
                }
                return response;
            }
        };
    });
