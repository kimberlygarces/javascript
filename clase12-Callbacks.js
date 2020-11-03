const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}


function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id' , id)}`
    
    $.get(url, opts, callback)
        .fail(()=>{
        console.log(`Sucedio un error. No se logro obtenr información`)
    })
  }


obtenerPersonaje(1, function(persona){
    console.log(`Hola yo soy ${persona.name}`)
    
    obtenerPersonaje(2, function(persona){
        console.log(`Hola yo soy ${persona.name}`)
    
        obtenerPersonaje(3, function(persona){
            console.log(`Hola yo soy ${persona.name}`)
    
            obtenerPersonaje(4, function(persona){
                console.log(`Hola yo soy ${persona.name}`)
    
                obtenerPersonaje(5, function(persona){
                    console.log(`Hola yo soy ${persona.name}`)
            })

        })

    })

})
})