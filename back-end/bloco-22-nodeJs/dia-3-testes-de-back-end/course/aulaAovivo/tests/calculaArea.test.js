const { expect } = require('chai');
const sinon = require('sinon');
const readline = require('readline-sync');
const calculaArea = require('../calculaArea')

describe("Executa o script calculaArea", () => {
  describe('Quando o valor informado for maior ou igual a zero', () => {

    before(() => {
      sinon.stub(readline, 'questionInt').returns(10);
    });

    after(() => {
      readline.questionInt.restore();
  })

    it('É um number?', () => {
      const resposta = calculaArea();

      expect(resposta).to.be.a('number')
    });

    it('é igual a 100 quando o lado for 10', () => {

      const resposta = calculaArea();
      expect(resposta).to.be.equal(100);
    });
  });

  describe('Quando o valor informado for negativo', () => {

    it('deve estourar um erro com a mensagem "valor invalido"', () => {

      sinon.stub(readline, 'questionInt').returns(-2);

      // assim é bom pra passar parametros na hora da execução da função dentro do teste
      expect(() => calculaArea()).to.throw('Valor invalido')

      readline.questionInt.restore();

    })
  })
})