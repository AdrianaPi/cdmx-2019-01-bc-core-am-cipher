let string;
let offset;
let resultado;

// Traer elementos HTML
const codificar = document.getElementById("codificar");
const clave = document.getElementById("clave");

const decodificar = document.getElementById("decodificar");

console.log (codificar, clave, decodificar);

// agregar evento
const encrip = document.getElementById("encrip").addEventListener("click", () => {
    let string = codificar.value;
    let offset = clave.value;
    window.cipher.encode (offset, string)
})
console.log ("Deberá tomar el mensaje del usuario, ajustarlo acorde con el offset y /n mostrar el resultado en el espacio asignado")
