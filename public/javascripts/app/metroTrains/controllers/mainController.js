MainController.$inject = ['$scope', '$timeout', '$http', '$window'];

function MainController($scope, $timeout, $window) {

  $scope.test = 'OMG PIE';

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(37.5651,126.98955),
      zoom: 12,
      zoomControl: false,
    };

    $window.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    $window.mapService = new google.maps.places.PlacesService($window.map);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  $scope.mapsMoveToLocation = function(lat, lng){
    var center = new google.maps.LatLng(lat, lng);
    // using global variable:
    $window.map.panTo(center);
    $window.map.setZoom(16);

    var marker= new google.maps.Marker({
      position: center,
    });

    marker.setMap($window.map);
  };

  $scope.mapsSearchForPlace = function(place) {
    console.log(place);

    var city = new google.maps.LatLng(37.5651,126.98955);

    var map = {
      location : city,
      radius : 50000,
      query : place,
      types : ['train_station']
    };

    $window.mapService.search(map, function(data, status) {
      console.log(data);

      var location = data[0].geometry.location;
      console.log(location);

      $scope.mapsMoveToLocation(location.k,location.A);

    });
  };

  function createMarker(place) {
    var placeLoc = $window.mapService.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

}
