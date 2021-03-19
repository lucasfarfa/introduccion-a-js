// Array methods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [ //array con objetos
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Television 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Auriculares', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Parlantes', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// forEach
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }// chequeo entodo el array si existe marzo
});

// Includes, equivalente al codigo de arriba
// funciona solo en array planos
let resultado = meses.includes('Diciembre');

// Some ideal para array de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular'
})// busca en carrito el producto con nombre CELULAR


// Reduce
// suma todos los precios
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0); // VALOR INICIAL


// Filter, sirver para filtrar elementos
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
}); // que filtre todos los productos $ >400

console.log(resultado); //devuelve true or false