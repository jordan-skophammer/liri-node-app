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


var params = {id:'jskophammer'}

client.get('statuses/user_timeline', params, function(error, tweets, response) {
	
		console.log(tweets);

})

// spotify.search({ type: 'track', query: userQuery, limit: '1'}, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log("Artist: " + data.tracks.items[0].artists[0].name);
// console.log("Album: " + data.tracks.items[0].name);
// console.log("Song Link: " + data.tracks.items[0].external_urls.spotify) 
// });

// var queryUrl = "http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=trilogy";

// console.log(queryUrl);

// request(queryUrl, function(error, response, body) {

//   if (!error && response.statusCode === 200) {
// 	console.log("Title: " + JSON.parse(body).Title);
// 	console.log("Release Year: " + JSON.parse(body).Year);
// 	console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
// 	console.log("Rotten Tomatoes Score: " + JSON.parse(body).Ratings[1].Value);
// 	console.log("Country Produced: " + JSON.parse(body).Country);
// 	console.log("Language: " + JSON.parse(body).Language);
// 	console.log("Plot: " + JSON.parse(body).Plot);
// 	console.log("Actors: " + JSON.parse(body).Actors);
//   }
// });
