// clases
/* el nombre inicia en mayus */

class Producto {
    constructor(nombre,precio) { //   constructor(parametros) {}
        this.nombre = nombre;
        this.precio = precio;
    }
    // ahora las funciones para esta clase
    formatearProducto() {
        return `El producto ${this.nombre} cuesta $${this.precio}`;
    }
    precioProducto() {
        console.log(this.precio);
    }
}

const producto1 = new Producto("Monitor de 40\"", 800);
const producto2 = new Producto("Celular", 1000);
//console.log(producto1, producto2);
//console.log(producto2.formatearProducto());
//console.log(producto2.precioProducto());

// Herencia en JS. se puede heredar tanto el constructor como las funciones, asi no se repite codigo
class Libro extends Producto{ //extendes =hereda su constructor y funciones
    constructor(nombre, precio, isbn) {
        super(nombre, precio); //que herede del padre los valores de su constructor
        this.isbn = isbn; //ademas de usar el isbn.
    }
    formatearProducto() { // heredas formatear producto y la modificas
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }// cuando es return `super`
    precioProducto() {
        super.precioProducto(); // aca tipo .
        console.log('Si');
    }

}

const libro1 = new Libro("JavaScript la revolucion", 120, '91991919192391239');
console.log(libro1.formatearProducto(), libro1.precioProducto());
