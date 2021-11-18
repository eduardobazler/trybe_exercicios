//1
let titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';

document.body.appendChild(titulo);

//2

let main = document.createElement('main');
main.className = 'main-content';

document.body.appendChild(main);

//3

let section1 = document.createElement('section');
section1.className = 'center-content';

document.querySelector("main").appendChild(section1);

//4

let paragrafoSection1 = document.createElement('p');

section1.appendChild(paragrafoSection1);

//5

let section2 = document.createElement('section');
//com a minha variável local:
main.appendChild(section2);
section2.className = 'left-content';

//6 

let section3 = document.createElement('section');
section3.className = 'right-content';

main.appendChild(section3);

//7

let imagem = document.createElement('img');
imagem.src = 'https://picsum.photos/200';
imagem.className = 'small-image';

section2.appendChild(imagem);

//8

let lista = document.createElement('ul');

for (let i = 1; i <= 10; i++){
    let itemLista = document.createElement('li');
    itemLista.innerText = i;

    lista.appendChild(itemLista);
}

section3.appendChild(lista);

//9

for (let i = 0; i <3; i++){
    main.appendChild(document.createElement('h3'));
}

//10

titulo.className = 'title';

//11

let listah3 = document.querySelectorAll('h3');

for (let i = 0; i < listah3.length; i++){
    listah3[i].className = 'description';
}

listah3[0].innerText ='Eduardo Bazler';
listah3[1].innerText ='Estuda na Faculdete de tecnologia de São Paulo';
listah3[2].innerText = 'Atualmente trabalha como engenheiro de software na XP inc'

//12

document.querySelector('main').removeChild(section2);

//13

section3.style.margin = 'auto';

//14

section3.parentElement.style.backgroundColor = 'purple';

//15

let item9 = document.querySelectorAll('.right-content li')[8];
let item10 = document.querySelectorAll('.right-content li')[9];

document.querySelector('ul').removeChild(item9);
document.querySelector('ul').removeChild(item10);
