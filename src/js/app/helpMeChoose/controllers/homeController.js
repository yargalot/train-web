HomeController.$inject = ['$scope', '$timeout', '$http'];

function HomeController($scope, $timeout, $http) {

  $http.get('/api/stations',{})
    .success(function(data, status) {
      $scope.stations = data.stations;
    })
    .error(function(data, status) {
      $scope.stations = data || "Request failed";
      $scope.status = status;
    });

}
