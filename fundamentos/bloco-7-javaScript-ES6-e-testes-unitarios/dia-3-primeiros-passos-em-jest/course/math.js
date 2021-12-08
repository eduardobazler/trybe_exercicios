/* const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70 */

function somatoria(n){
  let conta = 0;
  for (let i = 0; i <= n; i += 1) {
    conta += i;
  };
  return conta;
}

math = {
  somatoria: somatoria,
}

module.exports = math;