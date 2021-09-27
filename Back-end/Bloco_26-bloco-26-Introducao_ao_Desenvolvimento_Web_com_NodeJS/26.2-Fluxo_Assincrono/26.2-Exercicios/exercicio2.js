const { exerciseOne } = require('./exercicio1');

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

exerciseOne(randomNumber(), randomNumber(), randomNumber())
  .then(result => console.log(result))
  .catch(err => console.log(err.message));