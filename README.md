# liri-node-app
******************************

liri.js can take in one of the following commands:

1. concert-this + artis/band name and show the following info: 

- Name of the venue
- Venue location
- Date of the Event (use moment to format this as "MM/DD/YYYY")

<img width="694" alt="concert-this" src="https://user-images.githubusercontent.com/44987476/55132881-7ad6a480-50e9-11e9-8d5c-a7c8f233f6f9.png">


2. spotify-this-song + song name and show the following info: 

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from

*** If no song is provided then your program will default to "The Sign" by Ace of Base.***

<img width="697" alt="spotify-this-song" src="https://user-images.githubusercontent.com/44987476/55132991-c9843e80-50e9-11e9-8ca6-08be13f6e1ef.png">

3. movie-this + name of the movie.

This will output the following information to your terminal/bash window:
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

*** If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.' ***

<img width="704" alt="movie-this" src="https://user-images.githubusercontent.com/44987476/55133068-03554500-50ea-11e9-812d-85f7debc223b.png">

4. do-what-it-says.

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Edit the text in random.txt to test out the feature for movie-this and concert-this.
