var Kimberly = {

    nombre: 'Kimberly',
    apellido: 'GarcesPerez',
    edad: 25,
    peso: 50
  
}
console.log(` Al inicio del año ${Kimberly.nombre} pesa ${Kimberly.peso} kg`)

const INVREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentaDePeso = (persona) => persona.peso += INVREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INVREMENTO_PESO


for (var i = 1; i <= DIAS_DEL_ANO; i++) {

    var random = Math.random()

    if (random < 0.25){
        // aumenta de peso

        aumentaDePeso(Kimberly)

    }else if ( random < 0.5)   
    {
        //adelgaza

        adelgazar(Kimberly)

    }

}

console.log(` Al final del año ${Kimberly.nombre} pesa ${Kimberly.peso.toFixed(1)} kg`)