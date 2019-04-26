const axios = require('axios')


axios.get('htpp://www.omdbapi.com/?t=Roma&apikey=trilogy')
.then(({ data: {Title, Year, Rated, Runtime, Director} }) => {
    console.log(`
        Title: ${Title}
        Year: ${Year}
        Rated: ${Rated}
        Runtime: ${Runtime}
        Director: ${Director}
    `)
})
.catch(e => console.log(e))
