//const { json } = require('express');
const express = require('express')
const app = express() //Express-Application erstellen
const port = 8080

// Statische Express Files angeben
app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/geodata'));

// Server lädt die statische html index Seite
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html')     
});

app.get('/allData', (req, res) => {
    var allData = req.get('geodata');
    res.send(allData)
});

app.get('/bitburg_konz', (req, res) => {
    res.send();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  
});

function getData(){
    
}