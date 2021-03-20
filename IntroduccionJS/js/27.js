// Programacion orientada a objetos en js

/* Object Literal */ // el mas usado pero no dinamico
const producto = {
    nombre: 'Tablet',
    precio: 500
}

/* Object constructor */ // Mas dinamico pero no tan comun.

// clase es la forma de almacenar la forma que va a tener un objeto en especifico
//contiene forma, datos, metodos y funciones que contiene un objeto
function Producto(nombre, precio, disponible) { // el nombre de la clase debe iniciar en mayus. 
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
function Cliente(nombre, apellido) { // el nombre de la clase debe iniciar en mayus. 
    this.nombre = nombre;
    this.apellido = apellido;
}

const producto2 = new Producto('Monitor de 40', 800, true);
const producto3 = new Producto('PC', 1000, false);
const cliente1 = new Cliente('Lucas', 'Farfa')


// Prototype nos permite crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function () {
    return `${this.nombre} tiene un precio de: $${this.precio}`;
}// funcion que solo se peudde usar en Producto.
Cliente.prototype.formatearCliente = function () {
    return `${this.nombre} ${this.apellido}`;
}// funcion que solo se peudde usar en Producto.


console.log(producto2.formatearProducto())
console.log(producto3.formatearProducto());
console.log(cliente1.formatearCliente());


