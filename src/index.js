const textArea1 = document.querySelector(".areaTexto1");
const textArea2 = document.querySelector(".areaTexto2");
//
const btnCopy = document.querySelector(".btn-copiar");


// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea1.value);

    if(textoEncriptado == ''){
        alert('Campo vazio. Digite o texto a ser criptografado')
    }else{
        textArea2.value = textoEncriptado;
        return
    }
    
}


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

function btnDesencriptar(){
    const decryptedText = decrypt(textArea1.value);
    
    if(decryptedText == ''){
        alert('Campo vazio. Digite o texto a ser descriptografado')
    }else{
        textArea2.value = decryptedText;
        return
    }

}


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
        alert('Campo vazio. Não há teto para ser copiado')
    }else{
        navigator.clipboard.writeText(copiedText).then(function(){
            alert('Texto copiado com sucesso');
        }).catch(function(err){
            alert('Falha ao copiar o conteúdo', err);
        });
    }
    
    
}



