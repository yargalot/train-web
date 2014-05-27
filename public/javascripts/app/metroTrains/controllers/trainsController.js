TrainsController.$inject = ['$scope', '$timeout', '$http', '$routeParams', 'trainApi'];

function TrainsController($scope, $timeout, $http, $routeParams, trainApi) {

  var api = trainApi.retrieve({
    service : 'trains'
  });

  api.$promise.then(function(data) {
    $scope.trains = data.trains;
  }, function(data){
    // Error handler
  });


  $scope.mapsMoveToLocation(37.5651,126.98955);

}
