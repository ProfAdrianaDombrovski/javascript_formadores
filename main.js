
function tocaSomaplausos()
{
    document.querySelector('#som_tecla_aplausos').play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < listaDeTeclas.length )
{
    listaDeTeclas[contador].onclick = tocaSomAplausos;
    contador = contador + 1;
    console.log(contador);

}
