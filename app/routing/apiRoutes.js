
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
		console.log(req.body);
		friendList.push(req.body);
		console.log("---------------")
		console.log(friendList)

		var user1 = req.body.choices;
		var match;

		console.log("-----------------")
		console.log(user1)


	  	for(var i = 0; i < friendList.length; i++){
	  		var user2 = friendList[i].choices;
	  		var diffTotal = 25;
		  	function difference(user1, user2){
		  		var diffOne = Math.abs(user1[0] - user2[0]);
		  		var diffTwo = Math.abs(user1[1] - user2[1]);
		  		var diffThree = Math.abs(user1[2] - user2[2]);
		  		var diffFour = Math.abs(user1[3] - user2[3]);
		  		var diffFive = Math.abs(user1[4] - user2[4]);

		  		newDiffTotal = diffOne + diffTwo + diffThree + diffFour + diffFive

		  		if(newDiffTotal < diffTotal){
		  			diffTotal = newDiffTotal;
		  			match = friendsList[i];
		  		}
		  	}
		  	difference(user1, user2);

	  	}

	  


	});

	router.get("/friends", function(req, res){
		//console.log("works")
		res.json(friendList);
	});


module.exports = router;

