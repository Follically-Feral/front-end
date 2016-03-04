var baseApp = angular.module('baseApp', ['ngRoute', 'ngResource', 'apiServices', 'homeCtrl']);

baseApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'app/views/home.html'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
]).constant('config', {
    'backendURL': 'http://192.168.0.10/imbalance/',
    'devMode': true,
    'site': 'base',
    'version': 0.1
});