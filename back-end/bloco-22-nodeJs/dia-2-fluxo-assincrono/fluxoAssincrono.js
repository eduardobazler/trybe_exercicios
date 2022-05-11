const dividirNumeros = (num1, num2) => {
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error('Não pode haver divisão por zero'));

    const result = num1 / num2;
    resolve(result);
  })

  return promise;
}

dividirNumeros(50, 4)
  .then((resultado) => console.log(`Sucesso: ${resultado}`))
  .catch((err) => console.log(`Erro: ${err.message}`));