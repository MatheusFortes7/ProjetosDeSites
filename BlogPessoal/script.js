var texto = "Bem vindo ao meu blog!";
var result;

var count = 0;
function digitar() {
  result = document.getElementById("escrita");
  window.setTimeout(function() { inserir(texto[count]) }, 100);
}

function inserir(letra) {
  result.innerHTML += letra;
  count++;
  if(count < texto.length)
    window.setTimeout(function() { inserir(texto[count]) }, 80);
}

window.onload = digitar;