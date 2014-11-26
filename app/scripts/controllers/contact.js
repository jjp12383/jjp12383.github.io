'use strict';

/**
 * @ngdoc function
 * @name rooftopRoastersApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the rooftopRoastersApp
 */
angular.module('rooftopRoastersApp')
    .controller('ContactCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.contactInfo = {
            email: 'rooftoproasters@gmail.com',
            phone: '1-603-986-4375',
            road: '85 Union Hall Rd.',
            town: 'South Tamworth',
            state: 'NH',
            zip: '03883'
        };
    });
