// Read and set environment variables
require("dotenv").config();


//OMDB API 

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// ...
var axios = require("axios");

// Grab or assemble the movie name and store it in a variable called "movieName"
var query = process.argv.slice(3).join("+"); //slice: if you don't specify ending index number (eg slice(2, 4)), it'll go through the entire array
var command = process.argv[2];
var moment = require('moment');



// Then run a request with axios to the OMDB API with the movie specifiedvar queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

function movies(movieName) {
   
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // console.log(movieName);
    // console.log(queryUrl);process.argv.length === 3
    if (process.argv[2] === "do-what-it-says"){
        axios.get(queryUrl).then(
            function (response) {
                console.log("-----------------------");
                console.log(`\nTitle: ${response.data.Title}`);
                console.log(`Year: ${response.data.Year}`);
                console.log(`Rating: ${response.data.imdbRating}`);
                console.log(`Rotten Tomatoes rating: ${response.data.Ratings[1].Value}`);
                console.log(`Country: ${response.data.Country}`);
                console.log(`Language: ${response.data.Language}`);
                console.log(`Plot: ${response.data.Plot}`);
                console.log(`Actors: ${response.data.Actors}\n`);
                console.log("-----------------------");
            });

    }
    else if (!query) {
        axios.get("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy").then(
            function (response) {
                console.log("-----------------------");
                console.log(`\nTitle: ${response.data.Title}`);
                console.log(`Year: ${response.data.Year}`);
                console.log(`Rating: ${response.data.imdbRating}`);
                console.log(`Rotten Tomatoes rating: ${response.data.Ratings[1].Value}`);
                console.log(`Country: ${response.data.Country}`);
                console.log(`Language: ${response.data.Language}`);
                console.log(`Plot: ${response.data.Plot}`);
                console.log(`Actors: ${response.data.Actors}\n`);
                console.log("-----------------------");

            })
    } else {
        axios.get(queryUrl).then(
            function (response) {
                console.log("-----------------------");
                console.log(`\nTitle: ${response.data.Title}`);
                console.log(`Year: ${response.data.Year}`);
                console.log(`Rating: ${response.data.imdbRating}`);
                console.log(`Rotten Tomatoes rating: ${response.data.Ratings[1].Value}`);
                console.log(`Country: ${response.data.Country}`);
                console.log(`Language: ${response.data.Language}`);
                console.log(`Plot: ${response.data.Plot}`);
                console.log(`Actors: ${response.data.Actors}\n`);
                console.log("-----------------------");
            });
    }
}
//////// concert-this function has a bug - the function doesn't work with "do-what-it-says"

function concert(artist) {
    
    var artistdQueryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(artistdQueryUrl).then(
        function (response) {
            // if (process.argv[2] === "do-what-it-says")
            // {console.log("-----------------------");
            // console.log("Artist: " + artist);
            // console.log(`Name of the venue: ${response.data[0].venue.name}`);
            // console.log(`Venue location: ${response.data[0].venue.city}, ${response.data[0].venue.region}`);
            // console.log("Date of the event: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
            // console.log("----------------------");
            if (!response.data.length) {
                console.log("-----------------------");
                console.log(`\nNo information for this artist available at this time\n`);
                console.log("-----------------------");
            } else {
                // console.log(response);
                for (var i = 0; i < response.data.length; i++) {

                    console.log("-----------------------");
                    console.log("Artist: " + artist);
                    console.log(`Name of the venue: ${response.data[i].venue.name}`);
                    console.log(`Venue location: ${response.data[i].venue.city}, ${response.data[i].venue.region}`);
                    console.log("Date of the event: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
                    console.log("----------------------");
                }
            }
        }
    ).catch(function (error) {
            console.log("-----------------------");
            console.log(`Please enter artist's name`);
            console.log("-----------------------");
            // console.log(error.response);
        }

    )
};
////////////// spotify function //////////
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

function spotifyNow(userInput) {
    
    // var fs = require("fs");
    if (process.argv[2] === "do-what-it-says") {
        spotify.search({
            type: 'track',
            query: userInput,
            limit: 1
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("-----------------------");
            console.log(`\nArtist(s): ${data.tracks.items[0].artists[0].name}`);
            console.log(`Song: ${data.tracks.items[0].name}`)
            console.log(`Preview: ${data.tracks.items[0].preview_url}`)
            console.log(`Album: ${data.tracks.items[0].album.name}\n`)
            console.log("-----------------------");
        })
    } else if (process.argv.length > 3) {
        var userInput = process.argv.slice(3).join(" ");
        spotify.search({
            type: 'track',
            query: userInput,
            limit: 1
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("-----------------------");
            console.log(`\nArtist(s): ${data.tracks.items[0].artists[0].name}`);
            console.log(`Song: ${data.tracks.items[0].name}`)
            console.log(`Preview: ${data.tracks.items[0].preview_url}`)
            console.log(`Album: ${data.tracks.items[0].album.name}\n`)
            console.log("-----------------------");
        })

    } else {
        spotify.search({
            type: 'track',
            query: "the sign, ace of base",
            limit: 1
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("-----------------------");
            console.log(`\nArtist(s): ${data.tracks.items[0].artists[0].name}`);
            console.log(`Song: ${data.tracks.items[0].name}`)
            console.log(`Preview: ${data.tracks.items[0].preview_url}`)
            console.log(`Album: ${data.tracks.items[0].album.name}\n`)
            console.log("-----------------------");
        })
    }
}

//////////// do-what-is -says function 

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Edit the text in random.txt to test out the feature for movie-this and concert-this.

function whatItSays() {

    var fs = require("fs");
    fs.readFile("random.txt", "utf8", function (error, data) {
        console.log(data);
        if (error) {
            return console.log(error);
        }
    
        var dataArr = data.split(","); // turn string from random.txt into array
        choice(dataArr[0], dataArr[1]);

    })
    // fs.appendFile("log.txt", choice, function(err) {
    //     if (err) throw err;
       
    //   });
}





var choice = function (command, query) {
    switch (command) {
        case "movie-this":
            movies(query);
            break;
        case "concert-this":
            concert(query);
            break;
        case "spotify-this-song":
            spotifyNow(query);
            break;
        case "do-what-it-says":
            whatItSays();
            break;
        default:
            console.log("not a valid action");

    }
    
}
choice(command, query);