
var express = require('express');

var router = express.Router();
var path = require("path");

var friendList = require("../data/friends.js")
// ===============================================================================
// ROUTING
// ===============================================================================

  // API GET/POST Requests
  // ---------------------------------------------------------------------------
	router.post("/friends", function(req, res) {

		var user1 = req.body["choices[]"];
		var match;

		console.log(user1)
		console.log("----------------")
		var diffTotal = 40;

	  	for(var i = 0; i < friendList.length; i++){
	  		var user2 = friendList[i]["choices[]"];
	  		
		  	function difference(user1, user2){
		  		var diffOne = Math.abs(user1[0] - user2[0]);
		  		var diffTwo = Math.abs(user1[1] - user2[1]);
		  		var diffThree = Math.abs(user1[2] - user2[2]);
		  		var diffFour = Math.abs(user1[3] - user2[3]);
		  		var diffFive = Math.abs(user1[4] - user2[4]);

		  		newDiffTotal = diffOne + diffTwo + diffThree + diffFour + diffFive
		  		//console.log(newDiffTotal)
		  		if(newDiffTotal < diffTotal){
		  			diffTotal = newDiffTotal;
		  			match = friendList[i];
		  		}
		  	}
		  	difference(user1, user2);
	  	}

	  	friendList.push(req.body);
	  	res.json(match);

	});

	router.get("/friends", function(req, res){
		//console.log("works")
		res.json(friendList);
	});


module.exports = router;

