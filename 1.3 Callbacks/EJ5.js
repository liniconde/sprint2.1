//Procesar cadenas y convertir //

function procesarCadena(Caracter, Callbac) {
  return Callbac(Caracter);
}

function transfor(Caracter) {
  return Caracter.toUpperCase();
}
procesarCadena("henry mosquera", transfor);

console.log(procesarCadena("henry mosquera", transfor));
