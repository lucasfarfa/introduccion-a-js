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

// ForEach --> Solo es utilizado en Arrays.
// se usa cuando queres iterar un listado y mostarlos en consola -> FOREACH
carrito.forEach(producto => console.log(producto));
//ejecuta una vez por aca elemento en el array. es como si tuvera un array.length

// Map
// si quieres crear un nuevo ARRAY
carrito.map(producto => console.log(producto.nombre));
// map te crea un nuevo array con lo que quieras que te retorne
const array2 = carrito.map(producto =>  `${producto.nombre} - \$${producto.precio}`);
// genera el array con este formato
console.log(array2);