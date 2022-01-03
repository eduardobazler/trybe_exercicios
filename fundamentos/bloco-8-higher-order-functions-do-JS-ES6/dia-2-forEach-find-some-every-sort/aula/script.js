//HOF sw um array


/* function duncaoParametro(elemento, index, array) {
  console.log(elemento);
}

nomeDoArray.nomeDoHOF(duncaoParametro)
*/
const nomeDoArray = [1, 2, 3, 4, 5];


const loopComFor = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    console.log(array[index])
    
  };
}

/* loopComFor(nomeDoArray); */

const loopComForEach = (arr) => {
  arr.forEach((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
  })
}

/* loopComForEach(nomeDoArray); */

/* const retornoEvery = nomeDoArray.every((elemento) => elemento % 2 === 0);

console.log(retornoEvery);

const retornoEvery = nomeDoArray.every((elemento) => elemento % 2 === 0); */

const letras = ['a', 'f', 'c'];

const letrasOrdenadas = letras.sort();

console.log(letrasOrdenadas);