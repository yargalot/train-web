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

  var timeApi = trainApi.retrieve({
    service : 'times',
    id : $scope.trainId
  });

  timeApi.$promise.then(function(data) {
    $scope.times = data.times;
  }, function(data){
    // Error handler
    $scope.timesError = data;
  });

}
