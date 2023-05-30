const textArea1 = document.querySelector(".areaTexto1");
const textArea2 = document.querySelector(".areaTexto2");



//Desabilitar acentuação
textArea1.addEventListener('input', function(){
    const texto = textArea1.value;
    const semacentuacao = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    textArea1.value = semacentuacao;

});

//Desabilitar input textarea 02
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

//Imagem de fundo textarea 02
function showImagem(show){
    const imagem = document.getElementById('imgareatext2');

    if(show){
        imagem.style.display = 'block'
    }else{
        imagem.style.display = 'none'
    }
}


//Botão criptografar
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea1.value);

    if(textoEncriptado == ''){
        alert('Campo vazio. Digite o texto a ser criptografado');
        showImagem(true)
        return
    }else{
        
        textArea2.value = textoEncriptado;
        showImagem(false)
        return
    }
    
}

//Textarea 01
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
        showImagem(true);
        return
    }else{
        textArea2.value = decryptedText;
        showImagem(false);
        return
    }
    
   
}

//Textarea 02
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
        return
    }else{
        navigator.clipboard.writeText(copiedText).then(function(){
            alert('Texto copiado com sucesso'); 
        });
        return
    }
    
}


//Limpar areatext 02 através do botão
function clearTextArea(){

    if(textArea2 !== ""){
        /*caixa de dialogo para continuar*/
        textArea2.value = "";
        showImagem(true);
    }else{
        showImagem(false);
    }
    
}




