class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  comer() {
    console.log(`${this.nombre} está comiendo!`);
  }

  pedirComida() {
    console.log(`${this.nombre} pide comida!`);
  }
}

class Gato extends Animal {
  constructor(nombre, genero, tamano) {
    super(nombre, genero);
    this.tamano = tamano;
  }
  comer() {
    console.log(`Soy el gato que mas come y me llamo ${this.nombre}`);
  }
}

const abigail = new Animal("Abigail", "Hembra");
const nimbo = new Gato("Nimbo", "Macho", "Grande");

console.log(abigail);
console.log(nimbo);

abigail.comer();
abigail.pedirComida();

nimbo.comer();
