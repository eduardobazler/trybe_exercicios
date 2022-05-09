const { askAnyNumber, askName } = require('./perguntas');
const { imc, rateImc } = require('./calculoImc')


const userName = askName();
const userHigh = askAnyNumber('Qual a sua altura? ');
const userWeight = askAnyNumber('Qual o seu peso? ');

const userImc = imc(userHigh, userWeight);

console.log(`\n\n
Oi ${userName}, tudo bem?  \n
Sua altura é: ${userHigh} m
Seu peso é: ${userWeight} Kg
Seu IMC é ${userImc.toFixed(1)}
Situação: ${rateImc(userImc)}`);