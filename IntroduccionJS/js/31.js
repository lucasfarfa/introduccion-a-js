//NOTIFICATION API

const boton = document.querySelector('#boton'); // seleccion el boton en el html para usarlo en el js
boton.addEventListener('click', () => { //nos permite resgistar un evento al boton
// al hacer que, que hace.
    Notification.requestPermission() // al hacer click, el navegador nos pregunta si queremos recibir notificaciones
        .then (resultado => console.log(`El resultado es: ${resultado}`)) //imprime si el usuario permitio o no
}); 

if(Notification.permission == 'granted') {
    new Notification('Esta es una notificacion', {
        icon: 'img/avataaars.png',
        body: 'Lucas en Avatar!'
    })
}