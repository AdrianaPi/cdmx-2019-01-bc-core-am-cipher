//window.cipher = {
//const encode = () => {
    //mensaje
let mensajeInicial = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    //recorrer mensaje inicial
    for (i=0; i<mensajeInicial.length; i++) {
        console.log (mensajeInicial.charAt(i))

    //Conocer ASCII 
let msjAsc = (mensajeInicial.charCodeAt(i));
console.log (msjAsc); 

//Aplicar fórmula para codificar

let cesarCod = ((msjAsc-65+33)%26+65);
console.log (cesarCod)

mensajeInicial.push (String.fromCharCode(cesarCod))

    }
 //}; // ...
/*decode : () => {s

}*/
//};
