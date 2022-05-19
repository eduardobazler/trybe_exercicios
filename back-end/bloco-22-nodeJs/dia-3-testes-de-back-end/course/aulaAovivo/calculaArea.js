const readLine = require('readline-sync');

const calculaArea = () => {

  const l = readLine.questionInt('Escreva um valor? ');

  if(l < 0) throw new Error('Valor invalido');

  return l * l;
} 



module.exports = calculaArea;