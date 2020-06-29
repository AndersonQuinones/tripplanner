const mapboxgl = require("mapbox-gl");
const {markerURL, itinerary}= require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXJzb25xIiwiYSI6ImNrYzBucTQ1MTBsN3oyenVyYTJwMWpleGwifQ.fuzLns-OCFnzPcORx6FEgw';


const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDom = document.createElement('div')
markerDom.style.width = "32px";
markerDom.style.height = "39px";
markerDom.style.backgroundImage = `url(${markerURL.hotel})`;
new mapboxgl.Marker(markerDom).setLngLat([-74.009151, 40.705086]).addTo(map);
