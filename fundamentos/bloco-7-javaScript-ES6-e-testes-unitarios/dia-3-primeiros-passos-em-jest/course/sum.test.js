const math = require('./math');

test('A somatória de 5 é 15', () => {
  expect(math.somatoria(5)).toBe(15);
})