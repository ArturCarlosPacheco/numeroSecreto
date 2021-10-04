var numeroSecreto = 0;
var tentativas = 3;

function init() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;
}
init();

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");

  if (numeroSecreto == chute) {
    elementoResultado.innerHTML = "Você Acertou! ";
    init();
    return;
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digite um numero entre 0 e 10";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "O número secreto é maior";
  } else {
    elementoResultado.innerHTML = "O número secreto é menor";
  }

  tentativas--;
  console.log(tentativas);
  if (tentativas == 0) {
    elementoResultado.innerHTML =
      "Suas tentativas acabaram. O número secreto era " + numeroSecreto;
    init();
  }
}