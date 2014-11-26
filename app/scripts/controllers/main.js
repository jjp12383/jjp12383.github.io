'use strict';

/**
 * @ngdoc function
 * @name rooftopRoastersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rooftopRoastersApp
 */
angular.module('rooftopRoastersApp')
    .controller('MainCtrl', function ($scope, $window) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
