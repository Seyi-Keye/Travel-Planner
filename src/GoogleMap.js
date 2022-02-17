import React, { useEffect, useState } from 'react';

function GoogleMap({location}) {

  let map;
  let service;
  let infowindow;
  const [places, setPlaces] = useState([]);

  function initMap() {
    const sydney = new window.google.maps.LatLng(-33.867, 151.195);

    infowindow = new window.google.maps.InfoWindow();
    map = new window.google.maps.Map(document.getElementById("map"), {
      center: sydney,
      zoom: 15,
    });

    const request = {
      query: location ? `things to do + ${location}` : "things to do waterloo",
      fields: ["name", "geometry"],
    };

    service = new window.google.maps.places.PlacesService(map);
    service.textSearch(request, (results, status) => {
      console.log('result', results);
      setPlaces(results);
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
    <>
      {places.map(place =><p>{place.name}</p>)}
      <div id='map'></div>
    </>
  );
}

export default GoogleMap;
