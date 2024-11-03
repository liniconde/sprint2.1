// Operador ternario en un bucle //

const parOlmpar = (Operadorternario) => {
  Operadorternario.forEach((num) => {
    return num % 2 == 0
      ? console.log(`${num} es par`)
      : console.log(`${num} es impar`);
  });
};

const OperadorternarioArray = [1, 2, 3, 4, 5, 6, 7];
parOlmpar(OperadorternarioArray);
