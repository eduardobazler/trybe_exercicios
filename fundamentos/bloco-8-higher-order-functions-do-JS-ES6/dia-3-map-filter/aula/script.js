const numbers = [2, 3, 4, 5, 6, 7, 8];

const par = numbers.filter((numero) => numero % 2 === 0);
console.log(par);

/* !true === false; */

/* map ele a função que mais se usa no módulo FrontEnd */

/* par.forEach((numero) => console.log(`esse é o número: ${numero}`)); */

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeName = (nome, arrayName) => arrayName.filter((itemArray) => itemArray !== nome);


console.log(removeName('Ricardo', arrayMyStudents));