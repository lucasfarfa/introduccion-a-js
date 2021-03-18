// Objetos
// permite en vez de tener que crear 3 variables, crear solo 1 que contenga los 3 valores desados

/*
const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;
*/

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible :true
}

// Agregar o quitar info en objetos
producto.imagen = 'imagen.jpg'; // crea unna nueva propiedad
// esto se suele usar en NodeJS
delete producto.disponible; // elimina propiedad

console.log(producto);