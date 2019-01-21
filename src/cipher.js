window.cipher = {
    encode: (offset, string) => {
        let mensajeInicial = "";
        
        for (let i=0; i<string.length; i++) {
            
            let msjAsc = (string.charCodeAt(i));

            let cesarCod = ((msjAsc-65+offset)%26+65);

            let cadena=(String.fromCharCode (cesarCod));

            mensajeInicial +=cadena;
        }
        return mensajeInicial;
    },
    decode: (offset, string) => {
        let mensajeInit = "";
        
        for (let i=0; i<string.length; i++) {
         
            let msjAsc = (string.charCodeAt(i)); 
    
            let cesarCod = ((msjAsc-65-offset+26*2)%26+65);
    
            let cadena=(String.fromCharCode (cesarCod));
        
            mensajeInit +=cadena;
        }
        return mensajeInit;
    }
};
