StationController.$inject = ['$scope', '$timeout', '$http', 'trainApi'];

function StationController($scope, $timeout, $http, trainApi) {

  var api = trainApi.retrieve();

  api.$promise.then(function(data) {
    $scope.stations = data.stations;
  }, function(data){
    // Error handler
  });

}
