// try catch. si hay un error, el codigo sigue funcionando pero te infroma si hay error

const n1 = 20;
const n3 = 30;

console.log(n1);

try { //intenta hacer esto
    console.log(n2);
} catch (error) { //si hay error decime cual es
    console.log(error); // nos informa que n2 no esta definido
}
// se utiliza para solo algunas partes especificas, ej iniciar sesion, pagos, etc.
// COSAS CRITICAS QUE NO TENGA QUE DEJAR LA APLICACION

console.log(n3);