const { TestScheduler } = require('@jest/core');
const { test, expect} = require('@jest/globals')
const exercise1 = require('./exercise1');
const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz} = exercise1;

describe('Testes do exercício 1', () => {
  it('Testa a função soma 5 e 4', () => {
    expect(sum(5, 4)).toEqual(9);
  });

  it('Testa a função soma 0 e 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  it('Testa a função soma 4 e string(5) lança um erro', () => {
    expect(() => {sum(4, '5')}).toThrow;
  });

  it('testa se a função soma 4 e string 5 lança o erro parameters must be numbers', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });


});