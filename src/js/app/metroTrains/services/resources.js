angular.module('Metro.Services', [])
.factory('trainApi', ['$resource', function($resource) {

  var defaults = {
    lineId : '@lineId'
  };

  return $resource('/api/stations/:lineId', defaults, {
    'retrieve': { method : 'GET' }
  });

}]);