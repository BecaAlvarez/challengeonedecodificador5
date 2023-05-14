const textArea = document.querySelector("areaTexto1");
const mensagem =document.querySelector("areaTexto2");

const copiado = "";

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    return
}


function encriptar(stringEncript){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncript = stringEncript.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncript.includes(matrizCodigo[i][0])){
            stringEncript = stringEncript.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncript;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    return

}


function desencriptar(stringDesencriptado){
    let matrizVogais = [["e" , "enter"], ["i" ,"imes"], ["a" , "ai"], ["o" , "ober"], ["u", "ufat"]];
    stringDesencriptado =  stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizVogais.length; i++){
        if(stringDesencriptado.includes(matrizVogais[i][1])){
           stringDesencriptado = stringDesencriptado.replaceAll(matrizVogais[i][1], matrizVogais[i][0]);
        }
    }
    return stringDesencriptado;
}


function btnCopy(){
    copiado = mensagem.value;
    mensagem.value = "";
    return
}
