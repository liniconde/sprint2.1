// Calculadora //

function Calculadora (num1, num2, Callbac) {
 return Callbac (num1, num2);
}
const sumar = (a,b)=> a + b; 
const resultado = Calculadora(15, 21, sumar);
console.log (`El resultado de la suma es:`, resultado);







