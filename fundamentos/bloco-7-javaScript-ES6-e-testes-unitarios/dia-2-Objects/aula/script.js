const person = {
  name: 'Eduardo',
  lastName: 'Bazler',
};

console.table(person);


console.log(`Olá querido ${person['lastName']}`);
//Vantagem desta anotações ->  recebendo as propriedades de outra fonte;

function getPropertiesToShow() {
  return ['name', 'lastName'];
}

const keys = getPropertiesToShow();

for (let key of keys) {
  console.log(person[key]);
}
//essa é a vantagem de se usar essa anotação para recuperar os valores de um objeto! 