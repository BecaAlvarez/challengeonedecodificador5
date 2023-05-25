const textArea1 = document.querySelector(".areaTexto1");
const textArea2 = document.querySelector(".areaTexto2");
//
const btnCopy = document.querySelector(".btn-copiar");
const imagem = document.getElementById('imgareatext2');



//Desabilitar acentuação
textArea1.addEventListener('input', function(){
    const texto = textArea1.value;
    const semacentuacao = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    textArea1.value = semacentuacao;

});


//Exibição de imagem na areatext 02

function showImage(){
    imagem.style.display = 'block'
}

function hidderImage(){
    imagem.style.display = 'none'
}



//Botão criptografar
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea1.value);

    if(textoEncriptado == ''){
        alert('Campo vazio. Digite o texto a ser criptografado');
        showImage();
    }else{
        
        textArea2.value = textoEncriptado;
        hidderImage();
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
        alert('Campo vazio. Digite o texto a ser descriptografado');
        showImage();
    }else{
        textArea2.value = decryptedText;
        hidderImage();
    }
    
    return
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

    if(copiedText == ""){
        alert('Campo vazio. Não há texto para ser copiado');
        
    }else{
        navigator.clipboard.writeText(copiedText).then(function(){
            alert('Texto copiado com sucesso'); 
        });
        return
    }
    
}

//Desabilitar input areatext 02
window.onload = function() {
    textArea2.readOnly = true;

    // Verifica se existe um valor salvo no localStorage
    if(localStorage.getItem('savedText')) {
        textArea2.value = localStorage.getItem('savedText');
    }
    // Salva o valor do textarea no localStorage quando a página é atualizada
    window.onbeforeunload = function() {
        textArea2.value = ""
        localStorage.setItem('savedText', textArea2.value);
    }
}


//Limpar areatext 02 através do botão
function clearTextArea(){

    if(textArea2 !== ""){
        textArea2.value = "";
        showImage();
    }else{
        hidderImage();
    }
    
}




