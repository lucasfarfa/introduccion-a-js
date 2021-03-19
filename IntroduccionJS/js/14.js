// Arrays
// sirven para agrupar elementos relacionados

const numeros = [10,20,30,40,50];

console.table(numeros); //te presenta el array en forma de tabla

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses);

// Acceder a lo vales del array
console.log(numeros[4]); //accedo al 50, indice 4.
console.log(meses[3]);

// Conocer la extension de un array
console.log(numeros.length);
console.log(meses.length);

//Acceder a todos los elementos a la vez del array
numeros.forEach( function (numero){
    console.log(numero); //es practicamente un for que recorre el array
})