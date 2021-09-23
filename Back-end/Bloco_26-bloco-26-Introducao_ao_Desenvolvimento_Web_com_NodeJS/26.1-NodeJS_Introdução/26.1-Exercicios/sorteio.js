const { questionInt, question } = require('readline-sync');

function jogarNovamente() {
  const jogarnovamente = question("Jogar novamente? (sim/não) ")
  if ( jogarnovamente === 'sim') {
    sorteio();
  } 
  return 'Até a próxima!';
}

function sorteio() {
  const numeroSorteado = Math.round(Math.random() *10, 0);
  const seuNumero = questionInt("Escolha um número de 0 a 10: ");
  if ( numeroSorteado === seuNumero ) {
    console.log('Parabéns, número correto!');
    jogarNovamente();
  } 
  console.log(`Opa, não foi dessa vez. O número era ${numeroSorteado}`)
  jogarNovamente();
}

console.log(sorteio());

module.exports = { sorteio };