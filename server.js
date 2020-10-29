const express = require('express')
const app = express()
const port = 8080

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/allData', (req, res) => {
    var allData = //read all 65 files 
    res.send(allData)
})

app.get('/bitburg_konz', (req, res) => {
    res.send(pathPoints);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});