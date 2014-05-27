TrainSummaryController.$inject = ['$scope', '$timeout', '$http', '$routeParams', '$window', 'trainApi'];

function TrainSummaryController($scope, $timeout, $http, $routeParams, $window, trainApi) {

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

  $scope.mapsSearchForPlace('Aeogae');

}
