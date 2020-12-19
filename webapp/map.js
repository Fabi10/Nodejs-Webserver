
let map;
// neu eingefügt
const L = require('leaflet');

// Map initialisieren
function init () {
  // neuer Code: habe npm Module leaflet + leaflet-map installiert
  const leafletMap = require('leaflet-map');
  map = leafletMap();

  map = L.map('map').setView([49.755, 6.639], 50); // Trier Koordinaten

  // tilelayer
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'https://openstreetmap.org/copyright',
    maxZoom: 19
  }).addTo(map);

  // add the OpenStreetMap tiles -alter Code-
  // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  // maxZoom: 19,
  // attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  // }).addTo(map);

  // show the scale bar on the lower left corner
  L.control.scale().addTo(map);

  // show a marker on the map (wird komisch angezeigt)
  const marker = L.marker([49.755, 6.639]);
  marker.addTo(map);
  marker.bindPopup('Sie befinden sich in Trier').openPopup();

  // map.setView() --> Map zentrieren
}

init();

// Name der Tracks aus JSON Dateien lesen
async function getData () {
  const jsonUrl = '1.json';
  const response = await fetch(jsonUrl);
  const data = await response.json();
  console.log(data);

  // Koordinaten ausgeben
  const coords = data.features[0].geometry.coordinates[1];
  console.log(coords);

  // Name ausgeben
  const name = data.features[0].properties.name;
  console.log(name);

  // var xhttp = new XMLHttpRequest();

  // Ansazt: Leere Layer anlegen und später feature-s hinzufügen
  // var myLayer = L.geoJSON().addTo(map);
  // myLayer.addData(geojsonFeature);

  // Dynamische Erzeugung der Tabelle mit Div Boxen
  const geoDataEntriesDiv = document.getElementById('geoDataEntries');
  const innerDiv = document.createElement('div');
  innerDiv.id = 'track_boxes';
  innerDiv.innerHTML += name;
  geoDataEntriesDiv.appendChild(innerDiv);

  // on click action auf Tabelleneinträge
  innerDiv.onclick = function (e) {
    // Weg auf Karte plotten
    const feature = data.features[0];
    // rote Linie
    const myStyle = {
      color: '#FF0000'
    };
    L.geoJSON(feature, {
      style: myStyle
    }).addTo(map);

    // Map zentrieren
    // var coords2 = data.features[0].geometry.coordinates[200][0];
    // map.setView(coords2, 5);

    // Überprüfung
    console.log('clicked that div!');
    console.log(e.currentTarget.innerHTML);
  };
}

getData();
