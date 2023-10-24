
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    
}
const listadeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < listadeTeclas.length){
    const efeito = listadeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listadeTeclas[contador].onclick = function(){
        tocaSom(idAudio)
    }
    contador = contador + 1;
    console.log(contador);
}
