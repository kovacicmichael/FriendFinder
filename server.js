var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);
//var apiRoutes = require("./app/routing/apiRoutes.js")(app);

var app = express();
var PORT = 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// require("./app/routing/htmlRoutes.js")(app);
// require("./app/routing/apiRoutes.js")(app);
// app.use('/', htmlRoutes);
// app.use('/api', apiRoutes);

var friendList = [
	{
		name: "William",
		photo: "url",
		scores: [1, 4, 5]
	}

];







app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});