require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var userCommand = process.argv[2];

// client.get('status/user_timeline', function(error, tweets, response) {
// 	if (!error) {
// 		console.log(response);
// 	}
// })

spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });