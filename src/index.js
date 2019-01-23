// Traer elementos HTML
const ciec = document.getElementById("ciec");
const llave = document.getElementById("llave");
const btncifrar = document.getElementById("btncifrar");
const btndecifrar = document.getElementById("btndecifrar");

// agregar evento
btncifrar.addEventListener("click", () => {
    let string = ciec.value;
    let offset = parseInt(llave.value);
    let msjFinal = window.cipher.encode (offset, string);
    document.getElementById('datos').innerHTML= msjFinal;
});

btndecifrar.addEventListener("click", () => {
    let string = ciec.value;
    let offset = parseInt(llave.value);
    let msjDecod= window.cipher.decode (offset, string);
    document.getElementById('datos').innerHTML= msjDecod;
});


