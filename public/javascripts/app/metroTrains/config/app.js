// Declare app level module which depends on filters, and services
angular.module('metroTrains',
  [
    'ngRoute',
    'ngAnimate',
    'ngResource',
    'Metro.Services'
  ]
).config(['$routeProvider', function(routeProvider) {
  routeProvider
  .when('/', {
    templateUrl: '/stations',
    controller: StationController
  }).when('/stations', {
    controller: StationController,
    templateUrl: '/stations'
  }).when('/stations/:lineId', {
    controller: LineController,
    templateUrl: '/stations/line'
  }).when('/trains', {
    controller: TrainsController,
    templateUrl: '/trains'
  }).when('/trains/:trainId', {
    controller: TrainSummaryController,
    templateUrl: '/trains/train'
  })
  .otherwise({ redirectTo: '/'});
}])
.config(function($provide, $httpProvider, $compileProvider) {

});
