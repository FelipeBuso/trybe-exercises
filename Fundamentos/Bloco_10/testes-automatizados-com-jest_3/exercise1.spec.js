const { test, expect } = require('@jest/globals');

function random() {
  return Math.random();
};

function numRandom (num) {
  return Math.round(random() * num);
}

describe('testa random', () => {
  beforeEach(() => {
    random = jest.fn().mockReturnValueOnce(1);
  });

  it('Testa se numero aleatório retorna 10', () => {  
    expect(numRandom(10)).toBe(10);
    expect(random).toHaveBeenCalled();
    expect(random).toHaveBeenCalledTimes(1);
  });
});

describe('Testa divisão', () => {
  beforeEach(() => {
    random = jest.fn().mockReturnValueOnce(2);
    numRandom = jest.fn().mockImplementationOnce((num) => num / random());
  });

  it('Testa se a implementação muda para divisão 1 vez', () => {
    expect(numRandom(10)).toBe(5);
    expect(random).toHaveBeenCalled();
    expect(numRandom).toHaveBeenLastCalledWith(10);
  });
});
