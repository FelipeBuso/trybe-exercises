const { questionFloat } = require('readline-sync');

function calcIMC (peso, altura) {
  let situação = '';
  const imc = peso / (altura * altura)
  if (imc < 18.5 ) {
    situação = 'Abaixo do peso (magreza)';
  } else if ( imc >= 18.5 && imc < 25 ) {
    situação = 'Peso normal';
  } else if ( imc >= 25 && imc < 30 ) {
    situação = 'Acima do peso (sobrepeso)';
  } else if ( imc >= 30 && imc < 35 ) {
    situação = 'Obesidade grau I ';
  } else if ( imc >= 35 && imc < 40 ) {
    situação = 'Obesidade grau II ';
  } else {
    situação = 'Obesidade grau III ';
  }
  return ` Seu IMC é ${imc} - ${situação}`
};

const userPeso = questionFloat("Qual seu peso?");
const userAltura = questionFloat("Qual sua altura?");

console.log(calcIMC(userPeso, userAltura));