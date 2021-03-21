// FETCH API
async function obtenerEmpleados() {
    const archivo ='js/empleados.json'; 
    // fetch(archivo) // traigo el archivo json
    //     .then( resultado => resultado.json()) //si cumple, que devuelta resultado,hson
    //     //tipo json o tipo text
    //     .then( datos => {
    //         const { empleados } = datos;
    //         console.log(empleados);

    //         empleados.forEach( empleado => { //imprimo los empleaddos en consola
    //             console.log(empleado.id);
    //             console.log(empleado.nombre);
    //             console.log(empleado.puesto);
    //         });
    //     }) //imprime los datos

    //con awaiy async es mas corto que con promises
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados()