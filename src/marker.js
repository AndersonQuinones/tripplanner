const mapboxgl = require("mapbox-gl");

const markerURL = {activity: 'http://i.imgur.com/WbMOfMl.png',
hotel:'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
restaurant: 'http://i.imgur.com/cqR6pUI.png' }


function itinerary(coords, place){
  new mapboxgl.Marker(place).setLngLat(coords).addTo(map);
}
module.exports = {markerURL, itinerary}
