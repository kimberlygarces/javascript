const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'


const lukerUrl = `${API_URL}${PEOPLE_URL.replace(':id' , 1)}`
const opts = {crossDomain: true}

const onResponse = function(lukerUrl){
    console.log(`Hola yo soy ${lukerUrl.name}`)

}


$.get(lukerUrl, opts, onResponse)

