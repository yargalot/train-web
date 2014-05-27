MainController.$inject = ['$scope', '$timeout', '$http', '$window'];

function MainController($scope, $timeout, $window) {

  $scope.test = 'OMG PIE';

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(35.8615204,127.096405),
      zoom: 8
    };

    $window.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    $window.mapService = new google.maps.places.PlacesService($window.map);
  }

  google.maps.event.addDomListener(window, 'load', initialize);


  $scope.mapsMoveToLocation = function(lat, lng){
    var center = new google.maps.LatLng(lat, lng);
    // using global variable:
    $window.map.panTo(center);
  };


  $scope.mapsSearchForPlace = function(place) {
    console.log(place);

    var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

    var map = {
      location : pyrmont,
      radius : 50000,
      query : place
    };

    $window.mapService.search(map, function(data, status) {
      console.log(data);
    });
  };

}
