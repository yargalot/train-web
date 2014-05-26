HomeController.$inject = ['$scope', '$timeout', '$http'];

function HomeController($scope, $timeout, $http) {

  $http.get('http://mysterious-mountain-3628.herokuapp.com/stations',{})
    .success(function(data, status) {
      $scope.stations = data;
    })
    .error(function(data, status) {
      $scope.stations = data || "Request failed";
      $scope.status = status;
    });

}
