// Fusionar objetos //

const Objeto1 = {name:`Linibeth`, edad:`25`,};
const Objeto2 = {name:`Johan`, edad:`26`, country: `Barcelona`};

const Objetosjuntos = {...Objeto1,...Objeto2};

console.log(Objetosjuntos);