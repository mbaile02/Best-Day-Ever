// Initialize and add the map
function initMap() {
  // The location of deerhurst resort
  const deerhurstresort = { lat: 45.34742, lng: -79.13173 };
  // The map, centered at deerhurst resort
  const map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 12,
    center: deerhurstresort,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: deerhurstresort,
    map: map,
  });
}

window.initMap = initMap;