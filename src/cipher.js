//acá debes implementar el objeto cipher, el cual debe estar exportado en el objeto global (window).
// Este objeto (cipher) debe contener dos métodos://
//cipher.encode(offset, string): offset es el número de posiciones que queremos mover a la derecha en
// el alfabeto y string el mensaje (texto) que queremos cifrar.//
//cipher.decode(offset, string): offset es el número de posiciones que queremos mover a la izquierda
//en el alfabeto y string el mensaje (texto) que queremos descifrar.//
//declaracion de variables y arreglos vacios

window.cipher = {
  encode: (offset, string) => {
    let lugar = parseInt(offset);
    //se guarda el cifrado//
    let fin ="";
    //iterar la palabra
    for(let i=0; i < string.length; i++){
    //encontrar el valor en el codigo ascii//
      let ascii = ascii[i].charCodeAt(i);
      //que salte los caracteres especiales y numeros//
      if (ascii >= 65 && ascii <= 90 ) {
        //poner la formula para mayusculas//
        let formula = (ascii - 65 + lugar) % 26 + 65;
        //obtener letra del descifrado//
        let resultado = String.fromCharCode(formula);
        //que se sume la oración//
        fin += resultado;
      } else if (ascii >=97 && ascii<=122) {
        //poner la formula para minusculas//
        let formula = (ascii - 97+ lugar)%26+97;
        //obtener letra del descifrado//
        let resultado = String.fromCharCode(formula);
        //que se sume la oración//
        fin += resultado;
      } else {
        let resultado = String.fromCharCode(ascii);
        fin += resultado;
      }
    }
    return fin;
  },

  decode: (offset, string) => {
     let lugar = parseInt(offset);
    //el lugar en donde se guarda el mensaje descifrado//
        let fin="";
    //iterar la palabra//
    for (let i = 0; i < string.length; i++) {
      //que agarre esa letra//
      let ascii= string.charCodeAt(i);
      //para saltar caracteres especiales y numeros//
      if(ascii >= 65 && ascii <= 90 ){
        //poner la formula para mayusculas//
        let formula = (ascii + 65 - lugar) % 26 + 65;
        //obtener letra del descifrado//
        let resultado = String.fromCharCode(formula);
        //que se sume la oración//
       fin += resultado;
      } else if (ascii >=97 && ascii<=122){
        //poner la formula para minusculas//
        let formula = (ascii - 122 - lugar)% 26 + 122;
        //obtener letra del descifrado//
        let resultado = String.fromCharCode(formula);
        //que se sume la oración//
        fin +=resultado;
      } else {
        let resultado = String.fromCharCode(ascii);
        resultado = fin + resultado;
      }
    }
    return  fin;
  }
};
