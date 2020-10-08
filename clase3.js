var Kim = {
    nombre:'Kim', 
    apellido: 'Garcés', 
    edad: 25
}

var Dani = {

    nombre: 'Daniel',
    apellido: 'Vasquez',
    edad: 26

}


function ImprimirNombreEnMayuscula(persona)
{
    //var nombre = persona.nombre
    var { nombre } = persona

    console.log(nombre.toUpperCase())
}

//OTRA MANERA DE ESCRIBIRLO

// function ImprimirNombreEnMayuscula({ nombre })
// {
   
//     console.log(nombre.toUpperCase())
// }


function imprimirNombreYEdad({nombre,edad}) {
    console.log(` Hola, me llamo ${nombre} y tengo ${edad} años `); 
  }

ImprimirNombreEnMayuscula(Kim)
ImprimirNombreEnMayuscula(Dani)
// ImprimirNombreEnMayuscula({nombre: 'PEPITO'})

function cumpleanos(persona)
{

    return {
        ...persona, 
        edad: persona.edad + 1
    }

}
