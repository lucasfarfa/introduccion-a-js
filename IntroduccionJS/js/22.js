// Estructuras de control, condiciones.

const puntaje = '1000';

if (puntaje == 1000) {
    console.log("Si el puntaje es 1000");
}// si es str, int o float imprime

if (puntaje === 1000) { //imprime solo si es NUMERO.
    console.log("Si el puntaje es 1000");
} // === chequea tambien TIPO DE DATO ADEMAS DE VALOR
else{
    console.log('No es igual')
}

// ==, ===, !==, > <, >= <=

const rol ='EDITOR'

if(rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if(rol === 'EDITOR') { //revisa una segunda condicion
    console.log('Eres editor puedes entrar');
} else {
    console.log('Acceso denegado.');
}

