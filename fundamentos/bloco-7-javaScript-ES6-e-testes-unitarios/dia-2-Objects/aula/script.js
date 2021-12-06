/* const person = {
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
} */
//essa é a vantagem de se usar essa anotação para recuperar os valores de um objeto! 

//para adicionar tanto faz a anotações as duas funcionam

/* person.age = 24;


person['isBeautiful'] = true;

console.table(person);
 */

const person = {
  name: 'eduardo',
  lastName: 'Bazler',
};

const skills = {
  logica: true,
  css: true,
  python: true,
};

const fullPerson = Object.assign({}, person, skills);

console.table(fullPerson);