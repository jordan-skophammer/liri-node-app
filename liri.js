require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var userCommand = process.argv[2];

var params = {screen_name: 'jordan_bootcamp'}

// client.get('status/user_timeline', params, function(error, tweets, response) {
	
// 		console.log(tweets);

// })

spotify.search({ type: 'track', query: 'Bloody Sunday', limit: '1'}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.tracks.items[0].artists[0].name);
console.log(data.tracks.items[0].name);
console.log(data.tracks.items[0].external_urls.spotify) 
});
