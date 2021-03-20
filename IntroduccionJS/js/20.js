// Metodos de propiedad

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con ID: ${id}`);
    },
    pausar: function() {
        console.log(`Pausando`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo playlist: ${nombre}`);
    },
}

reproductor.borrarCancion = function(id){ // agregar desde fuera
    console.log(`Eliminando la cancion: ${id}`);
}

//objeto.metodo
reproductor.reproducir(3840); // sintaxis de metodo
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Rock');
reproductor.reproducirPlaylist('Rock');