
function tocaSomRisada()
{
    document.querySelector('#som_tecla_risada').play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomRisada;

