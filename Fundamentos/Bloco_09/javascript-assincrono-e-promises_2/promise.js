const createArrayNumbers = () => {
  const arrayNumbers = [];
  for (let index = 0; index < 10; index += 1) {
    arrayNumbers.push((Math.floor(Math.random() * 50)) ** 2);
  }
  return arrayNumbers;
};

const promise = new Promise((resolve, reject) => {
  const arrayOfNumbers = createArrayNumbers();
  const sumArray = arrayOfNumbers.reduce((acc, array) => acc + array);
  if (sumArray >= 8000 ) {
   return reject(sumArray);
  }
  resolve(sumArray);

  
})
.then(sumArray => console.log('Promise resolvida ' + sumArray))
.catch(sumArray => console.log('Fracasso ' + sumArray));