TrainSummaryController.$inject = ['$scope', '$timeout', '$http', '$routeParams', 'trainApi'];

function TrainSummaryController($scope, $timeout, $http, $routeParams, trainApi) {

  $scope.trainId = $routeParams.trainId;

  var api = trainApi.retrieve({
    service : 'trains',
    id : $scope.trainId
  });

  api.$promise.then(function(data) {
    $scope.trains = data.trains;
  }, function(data){
    // Error handler
  });

}
