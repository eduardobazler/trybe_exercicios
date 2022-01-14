const URL_CRPITO = 'https://api.coincap.io/v2/assets';

function criaFrase (moeda, simbolo, valor) {
  return `${moeda} (${simbolo}): $ ${Number.parseFloat(valor).toFixed(2)} Dólares.`
}

function insereLista (listaObjetoMoeda, elementoPai, quantidadeLista = 10) {

  for (let i = 0; i < quantidadeLista; i += 1) {
    const item = document.createElement('li');
    item.textContent = criaFrase(listaObjetoMoeda[i].id, listaObjetoMoeda[i].symbol, listaObjetoMoeda[i].priceUsd );
    elementoPai.appendChild(item);
  }
}

async function getlistaCriptoMoedas () {
  const listaHTML = document.querySelector('#lista');
  const { data } = await fetch(URL_CRPITO).then((response) => response.json())
  
  const dataRefactor = data.map(({ id, symbol, priceUsd }) => {
    const objectReturn = {
      id, 
      symbol,
      priceUsd,
    }
    return objectReturn;
  });

  insereLista(dataRefactor, listaHTML, 50);

}



getlistaCriptoMoedas();