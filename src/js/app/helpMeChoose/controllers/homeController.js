HomeController.$inject = ['$scope', '$timeout', '$http', 'trainApi'];

function HomeController($scope, $timeout, $http, trainApi) {

  var api = trainApi.retrieve();

  api.$promise.then(function(data) {
    $scope.stations = data.stations;
  });

}
