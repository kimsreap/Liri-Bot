const dotenv = require("dotenv").config();
var Spotify = require('node-spotify-api');
const Twitter = require('Twitter');
var keys = require("./keys.js");
var request = require('request');
const fs = require('fs');
const axios = require('axios')


axios.get('htpp://www.omdbapi.com/?t=Roma&apikey=trilogy')
.then(({ data: {Title, Year, Rated, Runtime, Director, Language, Country} }) => {
    console.log(`
        Title: ${Title}
        Year: ${Year}
        Rated: ${Rated}
        Runtime: ${Runtime}
        Director: ${Director}
        Language: ${Language}
        Country: ${Country}
    `)
})
.catch(e => console.log(e))
