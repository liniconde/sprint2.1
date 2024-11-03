// Nombres //

class Saludo {
  constructor(nombre) {
    this.nombre = nombre;
  }

  greet() {
    console.log(`Hola bienvenido ${this.nombre}`);
  }

}

new Saludo("Linibeth Conde").greet();

