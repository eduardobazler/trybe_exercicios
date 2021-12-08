const numeros = require('./verificaNumeros');

describe('Requisito 1', () => {
  
  it('A função recebe [1,2,4,5] e retorna true', () => {
    expect(true).toEqual(numeros([1,2,4,5]));
  })
  
})