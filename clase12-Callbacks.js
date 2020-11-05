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
    console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`)
}

async function obtenerPersonajes() {
    var ids = []
    for (let i = 1; i <= 10; i++) {
        ids.push(i)
    }
    var promesas = ids.map( id => obtenerPersonaje(id) )

    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()
