
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

var app = express();
var PORT = 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});