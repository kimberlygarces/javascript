//CLASE DE CONDICIONALES DE CURSO DE JAVASCRIPT DE PLATZI
var Kimberly = {

    nombre: 'Kimberly',
    apellido: 'GarcesPerez',
    edad: 25,
    ingeniero: true,
    cocinero: true,
    dj: false,
    guitarrista: false,
    drone: false
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)


    if(persona.ingeniero === true){

        console.log('es ingeniero')

    }

    if(persona.cocinero === true){

        console.log('es cocinero')

    }
    if(persona.dj === true){

        console.log('dj')

    }
    if(persona.guitarrista === true){

        console.log('guitarrista')

    }
    if(persona.drone === true){

        console.log('drone')

    }


}

// imprimirProfesiones(Kimberly)

const MAYORIA_DE_EDAD = 18

function esMayorDeEdasd(persona){
    
    return persona.edad >= MAYORIA_DE_EDAD

}


function imprimirSiesMayorDeEdad(persona){

    if(esMayorDeEdasd(persona)){

        console.log(`${persona.nombre} 'Es mayor de edad'`)
    }else

        console.log(`${persona.nombre} 'Es menor de edad'`)

}

// imprimirSiesMayorDeEdad(Kimberly)