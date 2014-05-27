angular.module('Metro.Services', [])
.factory('trainApi', ['$resource', function($resource) {

  var defaults = {
    service : '@service',
    id : '@id'
  };

  return $resource('/api/:service/:id', defaults, {
    'retrieve': { method : 'GET' }
  });

}]);