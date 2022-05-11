/* const fs = require('fs').promises;

Promise.all([
  fs.readFile('../arquivo.txt'),
])
  .then(([file1]) => {
    const fileSizeSum = file1.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  }); */


const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.log(err.message);
  });