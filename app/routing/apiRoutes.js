
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
		var match;
		//the maximum difference possible between two users is the starting difference
		var diffTotal = 40;
		let differenceArray = [];

		//a for loop to loop through and compare the newUser's scores to those of the past users
	  	for(var i = 0; i < friendList.length; i++){
	  		var pastUsers = friendList[i]["choices[]"];
	  		console.log("user2 = " + pastUsers)
	  		//user who submitted the survey
	  		var newUser = req.body["choices[]"];
	  		console.log("user1 = " + newUser)
	  		//you need to clear the array before you start the next loop comparing the next past user's score
	  		differenceArray = [];
	  		//this for loop will loop through and compare each of the choices that the new and past users inputed
		  		for(let j = 0; j < pastUsers.length; j++){
		  			let difference = Math.abs(newUser[j] - pastUsers[j]);
		  			console.log("User 1 " + newUser[j])
		  			console.log("User 2 " + pastUsers[j])
		  			differenceArray.push(difference)
		  		}
		  	//gets the sum of all the integers within the array
		  	console.log("array of diff: " + differenceArray)
		  	function getSum (total, num){
		  		return total + num;
		  	}
		  	newDiffTotal = differenceArray.reduce(getSum)
		  	//sets the new user's match to the past user with the least amount of difference between their answers
		  	if(newDiffTotal < diffTotal){
		  		diffTotal = newDiffTotal;
		  		match = friendList[i];
		  	}
		  	console.log("total diff: " + diffTotal)
	  	}
	  	console.log(diffTotal)
	  	friendList.push(req.body);
	  	res.json(match);
	});

	router.get("/friends", function(req, res){
		//complete list of all user submition results
		res.json(friendList);
	});


module.exports = router;

//Another way to calculate the difference, a little easier to read, but more code...


			// function difference(user1, user2){
				// var diffOne = Math.abs(user1[0] - user2[0]);
		  		// var diffTwo = Math.abs(user1[1] - user2[1]);
		  		// var diffThree = Math.abs(user1[2] - user2[2]);
		  		// var diffFour = Math.abs(user1[3] - user2[3]);
		  		// var diffFive = Math.abs(user1[4] - user2[4]);

		  		// newDiffTotal = diffOne + diffTwo + diffThree + diffFour + diffFive
			// }
		  	//difference(user1, user2);


