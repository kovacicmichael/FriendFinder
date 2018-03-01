
var express = require('express');

var router = express.Router();
var path = require("path");

var friendList = require("../data/friends.js")

// var friendList = [
// 	{
// 		name: "William",
// 		photo: "url",
// 		scores: [1, 4, 5, 2, 3]
// 	}

// ];


// ===============================================================================
// ROUTING
// ===============================================================================

  // API GET/POST Requests
  // ---------------------------------------------------------------------------
	router.post("/friends", function(req, res) {
	  //console.log(req.body);
	  friendList.push(req.body);
	  console.log(friendList)
	});

	router.get("/friends", function(req, res){
		//console.log("works")
		res.json(friendList);
	});


module.exports = router;

