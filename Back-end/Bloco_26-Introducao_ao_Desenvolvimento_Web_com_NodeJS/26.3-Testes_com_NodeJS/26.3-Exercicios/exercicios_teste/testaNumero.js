function testaNumero(num) {
  if ( num > 0 ) return 'positivo';
  if ( num < 0 ) return 'negativo';
  if ( num === 0 ) return 'neutro';
  if (typeof num !== 'number') return 'o valor deve ser um número'
  
}

module.exports = { testaNumero };

// console.log(testaNumero(3))