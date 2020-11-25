
// Map initialisieren 
function init() {
    var map = L.map('map').setView([49.755, 6.639], 141); //Trier Koordinaten
    // add the OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'

    }).addTo(map);

    // show the scale bar on the lower left corner
    L.control.scale().addTo(map);

    // show a marker on the map
    const marker = L.marker([49.755, 6.639]).addTo(map);

    //map.setView() --> Map zentrieren



}
   








//GET - fordert Daten vom Server an
//POST - übermittelt Daten an den Server