'use strict';

angular.module('streamingApp')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('streamingApp.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });