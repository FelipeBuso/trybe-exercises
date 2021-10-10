const fs = require('fs').promises;
const sinon = require('sinon');
const { expect } = require('chai');
const { writeReadFile } = require('../writeReadFile');



describe('Quando chama a função', () => {
  writeReadFile('exercicio4.txt', 'esse é um texto teste');

  describe('ela salva o arquivo', async () => {

    const retorno = await fs.readFile('exercicio4.txt', 'esse é um texto teste');

    it('o arquivo existe', () => {
      
      expect(retorno).to.not.be(null);
    });

    it('com o  texto esperado', () => {
      expect(retorno).to.be.equal('esse é um texto teste')
    });

    it('com o tipo string', () => {
      expect(retorno).to.be.a('string');
    });
  });

  describe('ela salva o arquivo', () => {

    it('com o valor errado', () => {});

    it('com o tipo errado', () => {});
  });

  describe('ela não salva o arquivo', () => {

    it('o arquivo não exirte', () => {});
  });
});