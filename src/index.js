
// Traer elementos HTML
const codificar = document.getElementById("codificar");
const clave = document.getElementById("clave");
const btnencrip = document.getElementById("btnencrip");
const btncrypto = document.getElementById("btncrypto");


// agregar evento
btnencrip.addEventListener("click", () => {
    let string = codificar.value;
    let offset = clave.value;
    let msjFinal= window.cipher.encode (offset, string);
    document.getElementById('resultado').value= msjFinal;
   
});

btncrypto.addEventListener("click", () => {
    let string = codificar.value;
    let offset = clave.value;
    let msjDecod= window.cipher.decode (offset, string);
    document.getElementById('resultado').value= msjDecod;
   
});
