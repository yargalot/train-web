StationController.$inject = ['$scope', '$timeout', '$http', '$location', 'trainApi'];

function StationController($scope, $timeout, $http, $location, trainApi) {

  var api = trainApi.retrieve({
    service: 'stations'
  });

  api.$promise.then(function(data) {
    var log =[];

    $scope.stations = data.stations;

    angular.forEach($scope.stations, function(value, key) {
       this.push(value.line);
    }, log);

    $scope.lines = _.uniq(log);

  }, function(data){
    // Error handler

    console.log(data);

    $scope.loadError = true;
  });


  $scope.changeLine = function() {
    console.log($scope.selectLine);
  };

}
