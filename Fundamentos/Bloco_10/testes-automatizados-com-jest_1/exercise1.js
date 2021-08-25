const sum = ((a, b) => {
  if (a !== 'number' || b !== 'number') {
    throw new Error('parameters must be numbers')
  }
  return a + b;
});
console.log(sum(4, '5'));

const myRemove = ((arr, item) => {
  const arraySplice = arr.splice(indexOf(item),1);
  return arraySplice;
});

const myRemoveWithoutCopy = ((arr, item) => {
  return arr.splice(indexOf(item),1);
});

const myFizzBuzz = ((num) => {
  let result = '';
  const tests = [3, 5];
  const fizzbuzz = ['fizz', 'buzz'];
  if (typeof num !== 'number') {
    return false;
  }
  const count = tests.forEach((value, index) => {
    const num_3 = 'fizz';
    const num_5 = 'buzz';
    num % value === 0 ? result += (fizzbuzz[index]) : '';
  });
  return result;
});

// const compareObj = () => {
//   const obj1 = {
//     title: 'My Title',
//     description: 'My Description',
//   };
  
//   const obj2 = {
//     description: 'My Description',
//     title: 'My Title',
//   };
  
//   const obj3 = {
//     title: 'My Different Title',
//     description: 'My Description',
//   };
  
// }

module.exports = {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
}