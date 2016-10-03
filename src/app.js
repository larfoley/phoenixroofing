'use strict';

const express = require('express');
const app = express();
const port = 3005;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');


// Home route
app.get('/', function(req, res) {

  res.render("index", {title: "Home"});

});

// About route
app.get('/about', function(req, res) {

  res.render("about", {title: "About"});

});

// Services route
app.get('/services', function(req, res) {

  res.render("services");

});

// Contact route
app.get('/contact', function(req, res) {

  res.render("contact");

});

app.listen(port, function() {
  console.log("Serving at http://localhost:" + port);
});
