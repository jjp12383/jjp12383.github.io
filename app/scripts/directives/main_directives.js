'use strict';

/**
 * @ngdoc directive
 * @name rooftopRoastersApp.directive:mainDirectives
 * @description
 * # mainDirectives
 */
angular.module('rooftopRoastersApp')
    .directive('backdrop', function ($window) {
        return {
            restrict: 'A',
            link: function (scope) {
                var w = angular.element($window);
                scope.getWindowHeight = function () {
                    return {
                        'h': w.height()
                    };
                };
                scope.$watch(scope.getWindowHeight, function (newValue) {
                    scope.windowHeight = newValue.h;

                    scope.style = function () {
                        return {
                            'min-height': (newValue.h) - 90 + 'px'
                        };
                    };

                }, true);

                w.bind('resize', function () {
                    scope.$apply();
                });
            }
        };
    });
