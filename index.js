
function encriptar(){
    var texto = document.getElementById("texto").value;
    var mensajeEncriptado = document.getElementById("mensaje-encriptado");
    var parrafo = document.getElementById("parrafo");
    
    
    
    var textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        mensajeEncriptado.textContent = "Texto ecriptado con éxito";
        parrafo.textContent = "";
        
    }

    else {

        mensajeEncriptado.textContent = "Ningun mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algun texto");
    }
}

    function desencriptar() {
        var texto = document.getElementById("texto").value;
        var mensajeEncriptado = document.getElementById("mensaje-encriptado");
        var parrafo = document.getElementById("parrafo");

        var textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")

        if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            mensajeEncriptado.textContent = "Texto desecriptado con éxito";
            parrafo.textContent = "";
             }

        else {

            mensajeEncriptado.textContent = "Ningun mensaje fue encontrado"
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            alert("Debes ingresar algun texto");
        }
    }
  
        
   