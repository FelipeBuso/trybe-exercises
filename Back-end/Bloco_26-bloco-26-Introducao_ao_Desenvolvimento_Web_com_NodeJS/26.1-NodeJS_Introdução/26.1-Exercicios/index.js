const { questionInt } = require('readline-sync');






function escolhaFuncao() {
  const funcao = questionInt('Digite 1 para calcular IMC, 2 para calcular a velocidade ou 3 para jogar sorteio')
  if ( funcao === 1) {
    const { calcIMC } = require('./imc');
    calcIMC();
  } else if ( funcao === 2) {
    const { velocidade } = require('./velocidade');
    velocidade();
  } else if ( funcao === 3) {
    const { sorteio }= require('./sorteio');
    sorteio();
  } else {
    return 'Número inválido';
  }
}

escolhaFuncao();
