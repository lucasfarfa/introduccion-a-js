const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//accedo a valor del objeto FORMA VIEJA
//const precioProducto = producto.precio; //accedo a precio
//const nombreProducto = producto.nombreProducto; //accedo a nombre
// no hay problema con nombreProducto, porque la var se llama producto y su PROPIEDAD nombre.Producto
//console.log(precioProducto);
//console.log(nombreProducto);

// Destructuring de objetos. FORMA NUEVA
const {precio, nombreProducto} = producto;
// accedo a precio y a nnombreproducto

console.log(precio);
console.log(nombreProducto);