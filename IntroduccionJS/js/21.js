// Arrow function, otra forma de declarar funciones y mas corta.
// Solo sirve con el tipo EXPRESION DE FUNCION.

// Expresion de funcion
const sumar2 = (n1,n2) => console.log (n1 + n2); // si se tiene una sola linea, las { son opcionales }
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`); // () en variable es opcional si solo see tiene 1
aprendiendo('JS');

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
meses.forEach(  mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// estos son sacados del 16.js, los transformamos en arrow funcion
let resultado;
resultado = carrito.some(producto => producto.nombre === 'Celular') // el return es opcional en arrow function
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);  
resultado = carrito.filter( producto => producto.precio > 400);  

console.log(resultado); //devuelve true or false