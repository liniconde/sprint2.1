// Procesar Elementos //

function procesarElements(Array, Callbac) {
  Array.forEach((elemento) => {
    Callbac(elemento);
  });
}
const elementos = [1, 2, 3, 4, 5, 6, 7];

const mostrarelementos = (elemento) => {
  console.log(`Elemento`, elemento);
};
procesarElements(elementos, mostrarelementos);
