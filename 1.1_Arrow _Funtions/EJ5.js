// Generar mensaje con timeout //

const generarMensaje = (saludo) => {
  setTimeout(() => {
    console.log(`este mensaje aparece después de 3 segundos: ${saludo}`);
  }, 3000);
};

generarMensaje("Hola");
