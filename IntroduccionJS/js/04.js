// Tipos de datos

// Strings: representan texto que se puede asignar a la variable
const tweet = "Aprendiendeo JavaScript con el curso de Desarrollo Web completo"; // producto será un string
// con el \ puedo escapear caracteeres como " para que se muestren.
const producto2 = "Monitor HD";



console.log(tweet.length); 
console.log(producto2); 

// indexof permite encontrar una palabara en un string
console.log(tweet.indexOf('JavaScript')); //devuelve n>0 si encuentra o n<0 sino. retorna posicion

// include, retorna true o false y no posicion
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('JavaScript'));
// se suele usar con emails validando si hay @ o no