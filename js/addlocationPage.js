// Code for the Add Location page.
function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 3.065686,lng: 101.600921},
          zoom: 14
        });
        var geocoder = new google.maps.Geocoder();
          geocodeAddress(geocoder, map);
      }

function geocodeAddress(geocoder, resultsMap) 
{
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } 
        });
      }

function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('address'),
        {types: ['geocode']});
      }

function Multicall(){
    initAutocomplete()
    initMap()
}
