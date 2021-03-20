// This

const reservacion = {
    nombre: 'Lucas',
    apellido: 'Farfallini',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    } // this hace referencia a que la variable esta dentro de este objeto.
}

reservacion.informacion();