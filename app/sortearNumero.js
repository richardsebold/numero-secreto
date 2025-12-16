const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();
let tentativas = 10;

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1);
}
console.log("Número secreto:", numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');
const elementoTentativas = document.getElementById('tentativas');

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;
elementoTentativas.innerHTML = tentativas;