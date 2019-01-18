window.cipher = {
    encode: (offset, string) => {
        let mensajeInicial = " ";
        let cadena;
        // Recorrer mensaje
        let i;
        for (i=0; i<string.length; i++) {
            //console.log (string.charAt(i))
        
        //Conocer ASCII 
            let msjAsc = (string.charCodeAt(i));
            //console.log (msjAsc); 
    
        //Aplicar fórmula para codificar
           let cesarCod = ((msjAsc-65+offset)%26+65);
           //console.log (cesarCod);
    
        //Retornar cadena con la fórmula 
          cadena=(String.fromCharCode (cesarCod));
          //console.log (cadena);

       //Convertir cadena a texto alineado 
          mensajeInicial +=cadena;
          // console.log (mensajeInicial)
            }
    },
    decode: (offset, string) => {
        let mensajeInicial = " ";
        let cadena;
        let i;
        for (i=0; i<string.length; i++) {
            //console.log (string.charAt(i))
        
        //Conocer ASCII 
            let msjAsc = (string.charCodeAt(i));
            //console.log (msjAsc); 
    
        //Aplicar fórmula para codificar
           let cesarCod = ((msjAsc-65+offset)%26+65);
           //console.log (cesarCod);
    
        //Retornar cadena con la fórmula 
          cadena=(String.fromCharCode (cesarCod));
          //console.log (cadena);

       //Convertir cadena a texto alineado 
          mensajeInicial +=cadena;
          // console.log (mensajeInicial)
            }

    }

};
