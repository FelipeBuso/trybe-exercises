function exerciseOne (num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      throw new Error("Informe apenas números");
    };
    
    const resultado = ((num1 + num2) * num3)

    if (resultado < 50) throw new Error("valor muito baixo");

    resolve(resultado)
  })

  return promise;
}


// exerciseOne(5,2,10)
//   .then(result => console.log(result))
//   .catch(err => console.log(err.message));

  module.exports = { exerciseOne } 