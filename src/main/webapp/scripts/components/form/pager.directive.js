/* globals $ */
'use strict';

angular.module('streamingApp')
    .directive('streamingAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
