// FORMA ANTIGUA DE ESCRIBIRLA
// function heredaDe(prototipoHijo, prototipoPadre){

//     var fn = function() {}

//     fn.prototype = prototipoPadre.prototype

//     prototipoHijo.prototype = new fn

//     prototipoHijo.prototype.constructor = prototipoHijo

// }

class Persona {
    constructor(nombre, apellido, altura) {

        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }


    saludar(fn) {

        var {nombre, apellido} = this

        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.9
    }

}



// Persona.prototype.Altura = function(){
//     this.altura > 1.80 
//         ?console.log(`Hola, mi nombre es ${this.nombre} y soy alto`):
//         console.log(`Hola, me llamo ${this.nombre} soy bajo`)

// }

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }


    saludar(fn) {
        var {nombre, apellido} = this

        console.log(`hola, me llamo ${nombre} ${apellido} soy desarrollador`)

        if (fn) {
            fn(nombre, apellido, true)
        }
    }

}

function responderSaludo(nombre, apellido, esDev) {

    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {

        console.log(`ah mirá, no sabia que eras desarrollador`)
    }

}
var Kim = new Persona('Kim', 'Garces', '1.90')
var Erica = new Persona('Erica', 'Estrella', '1.70')
var Camilo = new Desarrollador('Camilo', 'Garces', '1.50')

Kim.saludar()
Erica.saludar(responderSaludo)
Camilo.saludar(responderSaludo)
