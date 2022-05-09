const { questionFloat } = require('readline-sync')

const distancia = questionFloat('Qual foi a distancia percorrida (metros)');
const tempo = questionFloat('Qual foi o tempo da trajetória? (segundos)');

console.log(`
A distância foi de ${distancia} metros
e o tempo foi ${tempo} segundos   

Isso gera uma velocidade de ${(distancia/tempo).toFixed(2)} metros por segundo
Ou ${((distancia/tempo) * 3.6).toFixed(2)} Quilometros por hora!`)