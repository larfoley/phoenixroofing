'use strict';

const express = require('express');
const app = express();
const port = 3000;
const mailer = require('express-mailer');
const bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// mailer.extend(app, {
//  from: 'no-reply@example.com',
//  host: 'smtp.gmail.com', // hostname
//  secureConnection: true, // use SSL
//  port: 465,
//  transportMethod: 'SMTP',
//  auth: {
//    user: 'larf.87@gmail.com',
//    pass: 'theowlsarenotwhattheyseem'
//  }
// });

// Home route
app.get('/', function(req, res) {

  res.render("index", {title: "Home"});

});

// app.post('/', function (req, res) {
//   console.log(req.body);
//   res.send('POST request to homepage');
// });

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


// app.get('/email', function (req, res, next) {
//   app.mailer.send('email', {
//     to: 'larf.87@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
//     subject: 'Test Email', // REQUIRED.
//     otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
//   }, function (err) {
//     if (err) {
//       // handle error
//       console.log(err);
//       res.send('There was an error sending the email');
//       return;
//     }
//     res.send('Email Sent');
//   });
// });

app.listen(port, function() {
  console.log("Serving at http://localhost:" + port);
});
