// Funciones con parametros

function  sumar(num1 = 0, num2 = 0) {  // parametro1, par2, parN
    // = 0, se llama PARAMETRO POR DEFAUTL. EN CASO QUE EEL USUARIO NO INGRESE ESE PARAMETRO
    console.log(num1+num2);
}
sumar(10);//DA 10 POR LOS PARAMETROS POR DEFAULT
sumar(3,5);
sumar(1,12);

 
const sumar2 = function(n1, n2) {
    console.log (n1 + n2);
}
sumar2(5, 10); 