LineController.$inject = ['$scope', '$timeout', '$http', '$routeParams', 'trainApi'];

function LineController($scope, $timeout, $http, $routeParams, trainApi) {

  $scope.lineName = $routeParams.lineId;

  var api = trainApi.retrieve({
    service : 'stations',
    id : $scope.lineName
  });

  api.$promise.then(function(data) {
    $scope.stations = data.stations;
  }, function(data){
    // Error handler
  });

}
