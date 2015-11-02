/* globals $ */
'use strict';

angular.module('streamingApp')
    .directive('streamingAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
