// Async / await. base de react, vuejs, etc. CAP 135
// podemos decirle a js como priorizar codigo segun el tiempo que tarda cada tarea

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( () => {
            resolve ('Los clientes fueron descargados');
        }, 5000)
    })
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout( () => {
            resolve ('Los pedidos fueron descargados');
        }, 3000)
    })
}

//
async function app() { 
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos(); // como haria para que las dos se ejecuten al mismo tempo sin esperar a que termine una?
        // console.log(clientes);
        // asi se soluciona
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);

        // con un promise.all se optimiza el llamado de un async await
    } catch (error) {
        console.log(error)
    }
    // se ejecuta un codigo hasta que el otro haya sido completado 
}
app();



//setTimeout( function () {
  //  console.log('set time out')
//}, 1000) // pasa el tiempo definido y luego ejecuta el codigo. es en ms

//setInterval( function () {
 //   console.log('set time out')
//}, 2000) // cada que pasa el tiempo manda el codigo, lo manda en intervalos todo el tiempo