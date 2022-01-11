//Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...args) => args.reduce((acc, current) => {
  return acc + current;
}, 0)

console.log(sum(2, 4, 10, 20, -6));