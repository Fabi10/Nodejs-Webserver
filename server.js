console.log('This is a Node App');

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 3000;

server.listen(port,function(){
    console.log(`Example app listening at http://localhost:${port}`)
});

app.use(express.static(__dirname + '/public'));