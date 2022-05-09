const { question, questionFloat } = require('readline-sync');

const askName = () => {
  const userName = question('Qual é o seu nome? ');
  return userName;
}

const askAnyNumber = (message) => {
  const anyNumber = question(message);
  return anyNumber;
}

module.exports = {
  askName,
  askAnyNumber,
}