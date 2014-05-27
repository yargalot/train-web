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
    controller: HomeController,
    templateUrl: '/home/index.html'
  }).when('/test', {
      templateUrl: '/home/index.html',
  });
}])
.config(function($provide, $httpProvider, $compileProvider) {

});
