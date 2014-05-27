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
    templateUrl: '/home/index.html'
  }).when('/stations', {
    controller: StationController,
    templateUrl: '/stations/index.html'
  }).when('/stations/:lineId', {
    controller: LineController,
    templateUrl: '/stations/line.html'
  }).when('/trains', {
    controller: TrainsController,
    templateUrl: '/trains/index.html'
  }).when('/trains/:trainId', {
    controller: TrainSummaryController,
    templateUrl: '/trains/train.html'
  })
  .otherwise({ redirectTo: '/'});
}])
.config(function($provide, $httpProvider, $compileProvider) {

});
