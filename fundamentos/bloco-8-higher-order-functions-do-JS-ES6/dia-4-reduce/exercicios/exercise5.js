const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(acc, current) {
  acc += current.toLowerCase().split('').reduce((acc2, current2) => {
    if (current2 === 'a'){
      acc2 += 1;
    }
    return acc2
  }, 0);
  console.log(acc);
  return acc;
}

const resultado = names.reduce(containsA, 0)
console.log(resultado);
