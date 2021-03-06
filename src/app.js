'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');


// Home route
app.get('/', function(req, res) {
  res.render("index", {title: "Home", scripts: ["/js/loading-screen.js"]});

});

// About route
app.get('/about', function(req, res) {

  res.render("about", {title: "About"});

});

// Services route
app.get('/services', function(req, res) {

  res.render("services",{title: "Services"});

});

// Contact route
app.get('/contact', function(req, res) {

  res.render("contact", {title: "Contact"});

});

app.use(function(req, res) {
  res.render("404");
});

app.use(function(req, res) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send("500 - Server Error");
});

app.listen(port, function() {
  console.log("Serving at http://localhost:" + port);
});
