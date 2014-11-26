'use strict';

/**
 * @ngdoc function
 * @name rooftopRoastersApp.controller:OfferingsCtrl
 * @description
 * # OfferingsCtrl
 * Controller of the rooftopRoastersApp
 */
angular.module('rooftopRoastersApp')
    .controller('OfferingsCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.offerings = [
            {
                source: 'brazilian',
                type: 'dark roast',
                description: 'Cinnamon, pumpkin pie, black tea, black cherry, currant, bergamot, Silky, creamy, and multidimensional.'
            },
            {
                source: 'bolivian',
                type: 'medium roast',
                description: 'Grapefruit, lavender, floral, vanilla flavors, hints of almond and hazelnut mixed in, well balanced bean.'
            },
            {
                source: 'costa rican',
                type: 'light roast',
                description: 'Cinnamon, cardamom, orange, dried apricot, blackcurrant, vanilla, dark berry undertones, an elegant long fruity finish.'
            },
            {
                source: 'decaf bolivian',
                type: 'medium roast',
                description: 'Tones of green apple, lime, and orange, currant, hazelnut, vanilla, full body bean, the acidity combined with it makes it well balanced.'
            }
        ];
    });
