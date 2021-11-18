// let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
// ondeVoceEsta.parentElement.style.backgroundColor = 'darkviolet'
// console.log(ondeVoceEsta.parentNode)

// ondeVoceEsta.firstElementChild.innerHTML = 'Adicionando Algum texto no priimeiro elemento filho - Do elemtento atual que é na verdade o filho do filho.';

// let pai = document.querySelector('#pai');
// pai.firstElementChild.innerHTML = '<p>Filho do pai</p>';
// pai.firstElementChild.style.border = 'solid blue';

// ondeVoceEsta.firstElementChild.style.border = 'solid red';

let nomes = [
    'eduardo', 
    'sabrina',
    'Simone', 
    'Beatriz'
];

let listaNomes = document.querySelector('.nomes');

for (let i = 0; i < nomes.length; i++){
    let nome = nomes[i];
    let nomeItemLista = document.createElement('li');
    nomeItemLista.innerText = nome;

    console.log(nomeItemLista);

    listaNomes.appendChild(nomeItemLista);
}

let nomesItens = document.querySelectorAll('.nomes li');

listaNomes.removeChild(nomesItens[0]);


