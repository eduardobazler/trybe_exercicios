/* const carros = ['gol', 'hb20', 'focus'];
const motos = ['biz', 'R1'];
 
const veiculos = ['F40',...carros, ...motos];
console.table(veiculos); */

const conhecimentos = {
  softSkills: true,
  trabalho: true,
}

/* const pessoa = {
  nome: 'Nádia',
  idade: '24',
  cidade: 'BH',
}

const newPerson = {
  ...conhecimentos,
  ...pessoa,
}

console.log(newPerson); */

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo));