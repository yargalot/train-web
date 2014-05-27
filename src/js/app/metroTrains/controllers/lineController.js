LineController.$inject = ['$scope', '$timeout', '$http', '$routeParams', 'trainApi'];

function LineController($scope, $timeout, $http, $routeParams, trainApi) {

  var currentLine = $routeParams.lineId;

  var api = trainApi.retrieve({
    lineId : currentLine
  });

  console.log(currentLine);

  api.$promise.then(function(data) {
    $scope.stations = data.stations;
  }, function(data){
    // Error handler
  });

}
