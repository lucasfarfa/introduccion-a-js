// Funciones

// Declaracion de la funcion
function  sumar() { // function nombreFunc (argunments) { cuerpo de la funcion }
    console.log(10+10);
}

sumar(); // llamado de funcion


// Expresion de funcion
const sumar2 = function() {
    console.log (3 + 3);
}
sumar2();

// IIFE, funcion que se llama sola
(function() { // no se usar para reutilizarse, permite que no sep euda usar en otro archivo.
    console.log('Esto es una funcion');
})();// se llama sola aqui