const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}


function obtenerPersonaje(id){

    return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id' , id)}`

        $
        .get(url, opts, function(data){
            resolve(data)
        })
        .fail(()=> reject(id))
        })
}

function onError(id){

    console.log(`Suserdio un error al obtenr el personaje ID`)
}

obtenerPersonaje(1)
    .then(persona => {
        console.log(`Personaje 1 es ${persona.name}`)
        return obtenerPersonaje(2)
    })
    .then(persona => {
        console.log(`Personaje 2 es ${persona.name}`)
        return obtenerPersonaje(3)
    })
    .then(persona => {
        console.log(`Personaje 3 es ${persona.name}`)
    })
.catch(onError)