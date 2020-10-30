function heredaDe(prototipoHijo, prototipoPadre){

    var fn = function() {}

    fn.prototype = prototipoPadre.prototype

    prototipoHijo.prototype = new fn

    prototipoHijo.prototype.constructor = prototipoHijo

}

function Persona(nombre, apellido, altura){

    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.Altura = function(){
    this.altura > 1.80 
        ?console.log(`Hola, mi nombre es ${this.nombre} y soy alto`):
        console.log(`Hola, me llamo ${this.nombre} soy bajo`)

}


function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido

}

heredaDe(Desarrollador, Persona)


Desarrollador.prototype.saludar = function() {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido} soy desarrollador`)
}



// var Kim = new Persona('Kim', 'Garces', '1.90')
// var Erica = new Persona('Erica', 'Estrella', '1.70')
// var Camilo = new Persona('Camilo', 'Garces', '1.50')

