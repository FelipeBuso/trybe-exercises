const { expect } = require('chai');

const { testaNumero } = require('../testaNumero');

describe('Chama a função e', () => {
  describe('o número é', () => {
    describe('maior que zero', () => {
      const retorno = testaNumero(2);
      console.log(retorno);
  
      it('ele é positivo', () => {
        expect(retorno).to.be.equal('positivo');
      });
  
      it('é uma string', () => {
        expect(retorno).to.be.a('string');
      });
    })

    describe('menor que zero', () => {
      const retorno = testaNumero(-3);

      it('ele é negativo', () => {
        expect(retorno).to.be.equal('negativo');
      });

      it('é uma string', () => {
        expect(retorno).to.be.a('string');
      });
    });

    describe('menor que zero', () => {
      const retorno = testaNumero(0);

      it('ele é neutro', () => {
        expect(retorno).to.be.equal('neutro');
      });

      it('é uma string', () => {
        expect(retorno).to.be.a('string');
      });
    });
  })

  describe('não é um número', () => {
    const retorno = testaNumero('letra');

    it('ele solicita um número', () => {
      expect(retorno).to.be.equal('o valor deve ser um número');
    });

    it('é uma string', () => {
      expect(retorno).to.be.a('string');
    });
  });
});