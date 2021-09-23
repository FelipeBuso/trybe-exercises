const { questionFloat } = require('readline-sync');
const calcIMC = (peso, altura) => peso / altura ^ 2;

const userPeso = questionFloat("Qual seu peso?");
const userAltura = questionFloat("Qual sua altura?");

console.log(calcIMC(userPeso, userAltura));