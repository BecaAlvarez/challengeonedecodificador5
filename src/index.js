const textArea1 = document.querySelector(".areaTexto1");
const textArea2 = document.querySelector(".areaTexto2");
//
const btnCopy = document.querySelector(".btn-copiar");

//Botão criptografar
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea1.value);

    if(textoEncriptado == ''){
        alert('Campo vazio. Digite o texto a ser criptografado')
    }else{
        textArea2.value = textoEncriptado;
        return
    }
    
}

//Areatext 01
function encriptar(encryptedText){
    let arrayCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encryptedText = encryptedText.toLowerCase();

    for(let i = 0; i < arrayCode.length; i++){
        if(encryptedText.includes(arrayCode[i][0])){
            encryptedText = encryptedText.replaceAll(arrayCode[i][0], arrayCode[i][1]);
        }
    }

    return encryptedText;
}

//Botão Desencriptografar
function btnDesencriptar(){
    const decryptedText = decrypt(textArea1.value);
    
    if(decryptedText == ''){
        alert('Campo vazio. Digite o texto a ser descriptografado')
    }else{
        textArea2.value = decryptedText;
        return
    }

}

//Areatext 02
function decrypt(decryptedText){
    let arrayCode = [["e" , "enter"], ["i" ,"imes"], ["a" , "ai"], ["o" , "ober"], ["u", "ufat"]];
    decryptedText =  decryptedText.toLowerCase();

    for(let i = 0; i < arrayCode.length; i++){
        if(decryptedText.includes(arrayCode[i][1])){
           decryptedText = decryptedText.replaceAll(arrayCode[i][1], arrayCode[i][0]);
        }
    }
    return decryptedText;
}


//Copiar
function copyContent() {
    var copiedText = textArea2.value;

    if(copiedText == ''){
        alert('Campo vazio. Não há texto para ser copiado')
    }else{
        navigator.clipboard.writeText(copiedText).then(function(){
            alert('Texto copiado com sucesso');
        }).catch(function(err){
            alert('Falha ao copiar o conteúdo', err);
        });
    }
    
    
}

//Desabilitar acentuação
textArea1.addEventListener('input', function(){
    var texto = textArea1.value;
    var semacentuacao = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    textArea1.value = semacentuacao;

});

//Desabilitar input areatext 02
window.onload = function() {
    textArea2.readOnly = true;
}

