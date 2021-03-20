// Arrays
// sirven para agrupar elementos relacionados

const numeros = [10,20,30,40,50];
console.table(numeros); //te presenta el array en forma de tabla

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses);

// Acceder a lo vales del array
//console.log(numeros[4]); //accedo al 50, indice 4.
//console.log(meses[3]);

// Conocer la extension de un array
//console.log(numeros.length);
//console.log(meses.length);

//Acceder a todos los elementos a la vez del array
//numeros.forEach( function (numero){
//    console.log(numero); //es practicamente un for que recorre el array
//})

// Agregar elemento nuevo a arrays
//numeros[5] = 60;// como el indice 5no existe, lo crea y le asigna 6
// no es muy comun porque primero hay que conocer la extension del array
//numeros.push(70); //agrega un nuevo elemento al final del array
 //push es poco utilizada
//numeros.unshift(-10,-20,-30); // agrega nuevos elementos al principio del array


// Eliminar elementos del array
//meses.pop(); // elimina el ultimo elemento del array
//meses.shift(); //elimina el primer elemento del array
//meses.splice(2,1); // indice de donde empezar a eliminar , cuantos eliminar

// Rest Operator o Spread Operator

//const nuevoArray = [...meses, 'Diciembre']; // =push
//const nuevoArray = ['Octubre', ...meses]; // =unshift
console.log(nuevoArray)

console.table(meses);
