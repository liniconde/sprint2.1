// Enlaces operadores ternarios //

const Operadorternario = (a, b, c) => {
  return a > b
    ? a > c
      ? `${a} es mayor`
      : `${c} es mayor`
    : b > c
    ? `${b} es mayor`
    : `${c} es mayor`;
};

const maximo = (a, b, c) => {
  a > b ? (a > c ? a : c) : b > c ? b : c;
};

console.log(Operadorternario(21, 77, 800));
