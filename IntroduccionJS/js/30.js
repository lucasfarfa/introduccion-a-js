// PROMISES
const usuarioAutenticado = new Promise((resolve, reject) => { // promise pasa parametros RESOLVE, REJECT
    const auth = true;

    if (auth) {
        resolve('Usuario autenticado'); // PROMISE SE CUMPLE
    } else {
        reject('No se pudo iniciar sesion'); // PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado
    .then( resultado => { // si se cumple el promise
        console.log(resultado); // 'USUARIO AUTENTICADO'
    })
    .catch( (error) => console.log(error)); // que hace si falla promise

// En promises existen 3 valroes
/* PENDING: No se ha cumplido pero tampoco se ha rechazado
   FULFILLED:  que yase cumplio el promised
   REJECTED: cuando no se pudo cumplir*/