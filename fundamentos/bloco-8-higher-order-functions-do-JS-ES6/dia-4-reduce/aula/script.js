/* const numbers = [2, 3, 5];

const funcaoReducer = (acumulador, valorCorrente, index, array) => {
  console.log('acumulador ', acumulador);
  return acumulador;
}


numbers.reduce(funcaoReducer); 

O VALOR DO ACUMULADOR O É O O VALOR RETORNADO FUNÇÃO

*/

const numbers = [2, 4, 5, 6, 8, 9, 10, 3, 12, 5,  -6];

/* const sumNumbers = (acc, atual) => acc + atual;

console.log(numbers.reduce(sumNumbers, 0)); */

/* O VALOR DO ACUMULADOR O É O O VALOR RETORNADO FUNÇÃO */

const getBigger = (acumulador, atual) => {
  if (atual > acumulador){
    return atual;
  }
  return acumulador
}

/* O VALOR DO ACUMULADOR O É O O VALOR RETORNADO FUNÇÃO */

const maior = numbers.reduce(getBigger);
console.log(maior);