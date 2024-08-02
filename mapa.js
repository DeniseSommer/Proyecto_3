function initMap() {
  // Coordinates for Barcelona
  const barcelona = { lat: 41.3851, lng: 2.1734 };

  // Create a map object and specify the DOM element for display
  const map = new google.maps.Map(document.getElementById("map"), {
    center: barcelona,
    zoom: 13,
  });
}

// Call the initMap function when the page loads
window.onload = initMap;
