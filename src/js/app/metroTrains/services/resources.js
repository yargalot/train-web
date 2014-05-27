angular.module('Metro.Services', [])
.factory('trainApi', ['$resource', function($resource) {
  return $resource('/api/stations', null, {
    'retrieve': { method:'GET' }
  });
}]);