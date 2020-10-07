var Kimberly = {

    nombre: 'Kimberly',
    apellido: 'GarcesPerez',
    edad: 25,
    peso: 50
  
}
console.log(` Al inicio del año ${Kimberly.nombre} pesa ${Kimberly.peso} kg`)

const INCREMENTO_PESO = 0.3

const aumentaDePeso2 = persona => persona.peso += INCREMENTO_PESO
const adelgazar2 = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizadeporte = () => Math.random() < 0.4

const META = Kimberly.peso -3
var dias = 0

while (Kimberly.peso > META){

        if(comeMucho()){
            //AUMENTA PESO
            aumentaDePeso2(Kimberly)
        }
        if(realizadeporte()){
            // ADELAGAZA
            adelgazar2(Kimberly)
        }

        dias += 1

}

console.log(` pasaron ${dias} hasta que ${Kimberly.nombre} bajo 3 kg`)