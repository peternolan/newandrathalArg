var https = require('https')
  , fs   = require('fs')
  , url  = require('url')
  , SqlString = require('sqlstring')
  , port = 8080
  , debug = true;
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var app = express();

function send (res, content) {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.end(content, 'utf-8');
}
//server.listen(process.env.PORT || port);
app.listen(port, () => console.log('listening on ' + port));

/**
 * Brings the user to the home page, frontPage.html.
 */
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/frontPage.html'));
});

app.get('/img/Placeholder.png', function (req, res) {
  res.sendFile(path.join(__dirname + '/img/Placeholder.png'));
});

app.get('/css/styles.css', function (req, res) {
  res.sendFile(path.join(__dirname + '/css/styles.css'));
});

