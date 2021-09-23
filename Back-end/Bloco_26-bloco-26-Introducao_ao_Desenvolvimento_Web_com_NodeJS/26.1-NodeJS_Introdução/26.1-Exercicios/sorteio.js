const { questionInt } = require('readline-sync');

function sorteio() {
  const numeroSorteado = Math.round(Math.random() *10, 0);
  const seuNumero = questionInt("Escolha um número de 0 a 10: ");
  if ( numeroSorteado === seuNumero ) {
    return 'Parabéns, número correto!'
  } 
  return `Opa, não foi dessa vez. O número era ${numeroSorteado}`
}

console.log(sorteio());
