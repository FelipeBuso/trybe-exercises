const { questionInt } = require('readline-sync');

console.log('Vamos calcular a velocidade.')

const dist = questionInt("Qual a distância em metros?");
const tempo = questionInt("Qual o tempo em segundos?")

function velocidade(dist, tempo) {
  
  const v = dist / tempo
  return `a velocidade é ${v} m/s`
}

console.log(velocidade(dist, tempo));