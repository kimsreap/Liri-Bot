
    
const dotenv = require("dotenv").config();
var Spotify = require('node-spotify-api');
const Twitter = require('Twitter');
var keys = require("./keys.js");
var request = require('request');

var client = new Twitter(keys.twitterKeys);
const {appendFile,readFile} = require('fs');
const [, ,command,search] = process.argv;

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
	case 'my-tweets':
	twitter(userSearch);
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


