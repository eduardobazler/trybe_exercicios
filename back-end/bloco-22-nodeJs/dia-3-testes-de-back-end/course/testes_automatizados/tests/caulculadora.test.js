/**
 * Arquivo: calculadora-test.js
 * Author: Glaucia Lemos
 * Description: arquivo responsável por realizar os testes do arquivo: 'calculadora.js'
 * Data: 30/03/2018
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */

 const chai = require('chai');
 const calculadora = require('../cauculadora');
 
/*  const assert = chai.assert; */
 
/*  describe('TDD de Operações da Calculadora', () => {
   it('Teste: Deve Somar 2 Números', () => {
     assert.equal(calculadora.adicionar(5, 5), 10);
   });
 
   it('Teste: Deve Subtrair 2 Números', () => {
     assert.equal(calculadora.subtrair(10, 5), 5);
   });
 
   it('Teste: Deve Multiplicar 2 Números', () => {
     assert.equal(calculadora.multiplicar(10, 5), 50);
   });
 
   it('Teste: Deve dividir 2 Números', () => {
     assert.equal(calculadora.dividir(18, 2), 9);
   });
 }); */

 describe('Testando outras formas de usar o chai', () => {
   it('teste: deve somar 2 números', () => {
     chai.expect(calculadora.adicionar(5, 5)).to.be.equals(10);
   })
 });