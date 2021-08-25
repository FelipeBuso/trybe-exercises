function random() {
  return Math.random();
};

function numRandom (num) {
  return Math.round(random() * num);
}

// console.log(numRandom(10));

module.exports = {
  numRandom,
  random,
};
