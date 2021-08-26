
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // let newArray = [];
  const newArray = arrays.reduce((accumulator, itemArray) => accumulator.concat(itemArray));
  return newArray;
}

// flatten();

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);