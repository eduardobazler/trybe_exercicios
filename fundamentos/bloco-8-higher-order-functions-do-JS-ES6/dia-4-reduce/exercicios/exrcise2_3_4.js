const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//exercício 2

function reduceNames(acc, current, index, array) {
  if (index === array.length - 1) {
    acc += `${current.author.name}.`;
  }
  else {
    acc += `${current.author.name}, `;
  }
  return acc;

}

const result = books.reduce(reduceNames, '');

//exercício 3 

function averageAge(acc, current, index, array) {
  acc += (current.releaseYear - current.author.birthYear);
  return acc;
}

const avaregeRelesed = books.reduce(averageAge, 0) / books.length;

// exercício 4

function longestNamedBook(acc, current) {
  if (current.name.length > acc.name.length) {
    return current;
  }
  return acc;
}

const objectExpected = books.reduce(longestNamedBook)


