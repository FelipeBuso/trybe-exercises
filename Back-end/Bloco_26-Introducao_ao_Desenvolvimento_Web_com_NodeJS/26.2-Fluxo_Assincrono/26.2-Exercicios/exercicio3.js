const { exerciseOne } = require('./exercicio1');

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function exerciseThree() {
  try {
    const resultado = await exerciseOne(randomNumber(), randomNumber(), randomNumber())
    console.log(`resultado: ${resultado}`)
  } catch (err) {
    console.log(err.message)
  }
}

exerciseThree();