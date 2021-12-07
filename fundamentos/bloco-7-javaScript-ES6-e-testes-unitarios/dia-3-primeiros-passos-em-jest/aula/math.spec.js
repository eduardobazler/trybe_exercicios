const { test, expect, describe } = require('@jest/globals');
const math = require('./math');

test('1 + 3 = 4', () => {
  expect(math.sum(1,3)).toBe(4);
})


describe('tetando a função summationOf', () => {

  test('a função summationOf existe', () => {
    expect(typeof math.summationOf).toBe('function');
  })
  
  test('o somatório de 1 tem que ser 1', () => {
    expect(math.summationOf(1)).toBe(1);
  })
  
  test('O somatório de 3 tem ser 6', () => {
    expect(math.summationOf(3)).toBe(6);
  })
  
  test('O somatório de 5 tem que ser 15', () => {
    expect(math.summationOf(5)).toBe(15);
  })

})