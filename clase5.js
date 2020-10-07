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

var Daniel = {

    nombre: 'Daniel',
    apellido: 'Vasquez',
    edad: 16,
    ingeniero: false,
    cocinero: false,
    dj: false,
    guitarrista: true,
    drone: true
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

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD


function imprimirSiesMayorDeEdad(persona){

    if(esMayorDeEdad(persona)){

        console.log(`${persona.nombre} 'Es mayor de edad'`)
    }else

        console.log(`${persona.nombre} 'Es menor de edad'`)

}

function peromitirAcceso(persona){

    if(!esMayorDeEdad(persona)){

        console.log("ACCESO DENEGADO")
    }else{
        console.log("ACCESO PERMITIDO")

    }
}

// imprimirSiesMayorDeEdad(Kimberly)