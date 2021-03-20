// funciones que retornan valores

function sumar(n1,n2) {
    return n1 + n2; //devuelve el valor de n1+n2
}
const resultado = sumar(2,3); //asigna a resultado el return de suamr
console.log(resultado);

let total = 0;

function agregarCarrito (precio) {
    return total += precio;
}
function calcularImpuesto (total) {
    return 1.21 * total;
}

total = agregarCarrito(200); // agrega al total 200
total = agregarCarrito(400); // agrega al total 400
total = agregarCarrito(600); // agrega al total 600

console.log(`Total sin impuesto: \$${total}`); // imprimo total sin impuesto

const totalAPagar = calcularImpuesto(total);

console.log(`Total con impuesto: \$${totalAPagar}`); //total con impuesto