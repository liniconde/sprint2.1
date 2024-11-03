// Operación en un sola línea //

const numeros = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

const resultado = numeros
.filter (num => num >= 10)
.map (num => num * 2)
.reduce((acum, num) => acum + num, 0);

console.log(resultado);