"use strict"; //Correr JS en modo estricto
// Object Freeze
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); // permite freezear el objeto y que no se agreguen nuevas propiedades
// freeze no permite modifcar valres, borrar propiedades o valores
// ni agregar nuevos

Object.seal(producto);// igual que freeze pero si permite MODIFICAR
console.log(Object.isFrozen(producto));