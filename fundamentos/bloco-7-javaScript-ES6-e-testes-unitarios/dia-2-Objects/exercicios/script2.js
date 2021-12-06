const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function criaEntradas(objeto={}, chave='vazio', valor='vazio') {
  objeto[chave] = valor;
}

criaEntradas(lesson2, 'turno', 'noite');
/* 
console.log(lesson2); */

function listChavesObjetos(obj={}) {
  const lista = Object.keys(obj);
  for (let item of lista) {
    console.log(`A chave é: ${item}`);
  }
}

/* listChavesObjetos(lesson2); */

function listaValoresObjetos (obj={}) {
  const lista = Object.values(obj);
  for (let item of lista) {
    console.log(item);
  }
}

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3),
}

/* console.log(allLessons); */

function totalEstudantes(obj) {
  let total = 0;
  const totalAula = Object.keys(obj);
  for (let aula of totalAula) {
    total += obj[aula].numeroEstudantes;
  }

  return total;

}

