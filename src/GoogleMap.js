import React, { useEffect } from 'react';

function GoogleMap() {

  let map;
  let service;
  let infowindow;

  function initMap() {
    const sydney = new window.google.maps.LatLng(-33.867, 151.195);

    infowindow = new window.google.maps.InfoWindow();
    map = new window.google.maps.Map(document.getElementById("map"), {
      center: sydney,
      zoom: 15,
    });

    const request = {
      query: "Museum of Contemporary Art Australia",
      fields: ["name", "geometry"],
    };

    service = new window.google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }

        map.setCenter(results[0].geometry.location);
      }
    });
  }

  function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;
  
    const marker = new window.google.maps.Marker({
      map,
      position: place.geometry.location,
    });

    console.log({marker});
  
    window.google.maps.event.addListener(marker, "click", () => {
      infowindow.setContent(place.name || "");
      infowindow.open(map);
    });
  }

  useEffect(() => {
    initMap();
  }, [])

  return(
    <div id='map'></div>
  );
}

export default GoogleMap;
