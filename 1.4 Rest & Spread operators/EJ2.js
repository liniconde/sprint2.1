// Operador Rest que retorna a la suma //

function suma(...num) {
return num.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

}

console.log(suma(1, 2, 3, 4, 5));
