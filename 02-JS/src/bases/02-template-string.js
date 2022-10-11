//template string

const nombre = "miguel";
const apellido = "terrazas";

//concatenacion
//const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

/* function getSaludo() {
  return "hello there";
} */

function getSaludo(nombre) {
  return "Hola " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
