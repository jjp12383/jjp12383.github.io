'use strict';

/**
 * @ngdoc overview
 * @name rooftopRoastersApp
 * @description
 * # rooftopRoastersApp
 *
 * Main module of the application.
 */
angular
    .module('rooftopRoastersApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/catalog', {
                templateUrl: 'views/catalog.html',
                controller: 'CatalogCtrl'
            })
            .when('/offerings', {
              templateUrl: 'views/offerings.html',
              controller: 'OfferingsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
