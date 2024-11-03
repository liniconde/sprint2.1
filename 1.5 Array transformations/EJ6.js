// elementos del Array mayor a 10 // 

const numeros = [11, 12, 13, 14];

const mayor10 = numeros.every (num => num > 10);

const algunoM10 = numeros.some (num=> num > 10);

console.log(mayor10);
console.log(algunoM10);