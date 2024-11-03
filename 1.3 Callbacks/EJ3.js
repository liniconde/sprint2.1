// Esperar saludar 2 segundos //

function esperarISaludar(nombre, Callbac) {
  setTimeout(() => {
    Callbac(nombre);
  }, 2000);
}

function saludar(nombre) {
  console.log(nombre);
}

esperarISaludar("Henry", saludar);
