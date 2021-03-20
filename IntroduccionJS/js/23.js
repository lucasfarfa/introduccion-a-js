// SWITCH, se usa en menus.
const metodoPago = 'efectivo';

switch(metodoPago) { //es un buen sustituto a una buena cantidad de ELSEIF
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'efectivo':
        console.log('El usuario paga con efectivo');
        break;
    case 'bitcoin':
        console.log('El usuario paga con bitcoin');
        break;    
    default: //accion por deefault en caso que no se use ningun caso
        console.log('aun no pagaste');
        break;
}