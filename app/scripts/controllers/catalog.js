'use strict';

/**
 * @ngdoc function
 * @name rooftopRoastersApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the rooftopRoastersApp
 */
angular.module('rooftopRoastersApp')
    .controller('CatalogCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
