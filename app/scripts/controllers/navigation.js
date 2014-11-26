'use strict';

/**
 * @ngdoc function
 * @name rooftopRoastersApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the rooftopRoastersApp
 */
angular.module('rooftopRoastersApp')
    .controller('NavigationCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.closeMenu = function () {
            var menu = angular.element('.navbar-collapse');
            menu.collapse('hide');
            console.log('clicked');
        };

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });
