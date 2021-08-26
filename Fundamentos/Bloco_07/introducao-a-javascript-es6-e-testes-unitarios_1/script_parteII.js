const calculaFatorial = numero => {
  for (let index = numero; index > 1; index -= 1) {
    numero *= (index - 1);
  }
  return numero;
};

console.log(calculaFatorial(4));
console.log(calculaFatorial(5));

const biggerWord = str => {
  let words = str.split(' ');
  let word = words[0];
  for (let index = 1; index < words.length; index += 1) {
    if (word.length < words[index].length) {
      word = words[index];
    }
  }
  return(word);
}
console.log(biggerWord("Antônio foi no banheiro e não sabemos o que aconteceu"));