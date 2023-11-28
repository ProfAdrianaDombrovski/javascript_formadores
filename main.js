function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log("Elemento não encontrado ou seletor inválido")
    }
}
const listadeTeclas = document.querySelectorAll(".tecla");


for(let contador = 0; contador < listadeTeclas.length; contador++){
    const tecla = listadeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`; 
    tecla.onclick = function(){
        tocaSom(idAudio)
    }
    
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
}
}