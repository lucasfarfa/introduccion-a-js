//For Loop

//inicializacion, condicion, accion
for (let i = 0; i <= 5; i++) { //inicializacion, condicion, accion
    if(!(i%2)){ // chequear si un numero es par i%2 ===0 tambien
        console.log(`El numero ${i} es par.`)
    } else {
        console.log(`El numero ${i} es impar.`)
    }
}
// uso de For para iterar sobre un array.
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
                // n < largo carrito
for(let n = 0; n < carrito.length; n++) {
    console.log(carrito[n].nombre); //imprime los elementos del carrito
}

// While Loop. Ejecuta mientras la condicion es verdadera. tipo if

let j = 0;
while(j < 5) {
    console.log(j);
    j++;
}


// Do While loop. Hace y despues evalua si sigue

let f = 10;

do {
    console.log(f);
    f ++
} while ( f < 5);
// ejecuta el console.log, luego evalua y sigue