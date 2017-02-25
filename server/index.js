var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname + '/../public/' });
});

app.get('/assets/bundle.js', function(req, res) {
    res.sendFile('bundle.js', { root: __dirname + '/../public/assets' }); 
});

app.listen('3000', function() {
    console.log('The server is running on 3000');
});