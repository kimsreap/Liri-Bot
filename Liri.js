
    
const dotenv = require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var request = require('request');

const {appendFile,readFile} = require('fs');
const [, ,command,search] = process.argv;

//Spotify API keys 
// I don't know how to get the API key for the sportify to work
SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret


const doThis = _ => {
    readFile('random.txt', 'utf8', (e, data) => {
      if (e){  
        console.log(e)
    } else {
        let doIt = data.split(', ')
        doIt.pop()
        console.log(doIt)
    }
    })
}

switch (command) {
    case 'concert-this':
    concert();
    break;

	case 'spotify-this-song':
	spotify(userSearch);
	break;

	case 'movie-this':
	movie();
	break;

	case 'do-what-it-says':
	doThis ();
	break;
};

// need to figure it out how to create a function for the concert (don't know how to do it)
// function for the sportify (not sure where to start)

// movie function
const axios = require('axios');
const [, , movie] = process.argv
axios.get(`htpp://www.omdbapi.com/?t=${movie}&apikey=trilogy`)
.then(({ data: {Title, Year, Rated, Actors, Plot, Language, Country,imdbRating} }) => {
    console.log(`
        Title of the movie: ${Title}
        Year the movie came out: ${Year}
        Rotten Tomato Rating: ${Rated}
        Actors in the movie: ${Actors}
        Plot of the movie: ${Plot}
        Language of the movie: ${Language}
        Country where the movie was produced: ${Country}
        IMDB Rating of the movie: ${imdbRating}

    `)
})
.catch(e => console.log(e))


