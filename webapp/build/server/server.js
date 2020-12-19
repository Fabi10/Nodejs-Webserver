
const express = require('express');
const app = express(); // Express-Application erstellen
const port = 8080;

// Statische Express Files angeben
app.use(express.static('./webapp/build'));

app.use(express.static('./webapp/build/server/geo_data'));

// Server lädt die statische html Seite
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/allData', (req, res) => {
  const allData = req.get('geodata');
  res.send(allData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
