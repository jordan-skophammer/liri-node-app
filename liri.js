require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var userArgs = process.argv;
var userQuery = "";

for (var i = 2; i < userArgs.length; i++) {

	if (i > 2 && i < userArgs.length) {
		userQuery = userQuery + "+" + userArgs[i];
	}
	else {
		userQuery += userArgs[i];
	}
}

// var params = {id: 985662413080055809}

// client.get('status/user_timeline', params, function(error, tweets, response) {
	
// 		console.log(tweets);

// })

spotify.search({ type: 'track', query: userQuery, limit: '1'}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.tracks.items[0].artists[0].name);
console.log(data.tracks.items[0].name);
console.log(data.tracks.items[0].external_urls.spotify) 
});


