const fs = require('fs');

const nomeDoArquivo = '../arquivo.txt';

/* try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo ${err.path}`);
  console.log(err);
}
console.log('fluxo síncrono') */

fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});

console.log('fluxo assíncrono');

