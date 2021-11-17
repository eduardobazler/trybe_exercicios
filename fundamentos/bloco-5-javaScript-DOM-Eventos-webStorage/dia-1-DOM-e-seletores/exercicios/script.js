/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 function mudaTexto(texto, novoTexto){
     texto.innerText = novoTexto
 }

 mudaTexto(document.querySelectorAll('.center-content p')[0], 'Daqui a dois eu espero estar no final da minha faculdade trabalhando na XP sendo lider de uma squad trabalhando em outro país.');

 function verdeTrybe(elemento){
     elemento.style.backgroundColor = 'rgb(76,164,109)';
 }

 verdeTrybe(document.getElementsByClassName('main-content')[0]);

 function fundoBranco(elemento){
    elemento.style.backgroundColor = 'white';
}

fundoBranco(document.querySelector('.main-content .center-content'));

document.querySelector('h1').innerText = document.querySelector('h1').innerText.replace('JavaEscripito', 'JavaScript');

function deixaTudoMaiusculo(texto){
    texto.innerText = texto.innerText.toUpperCase();
}

deixaTudoMaiusculo(document.querySelector('p'))

function exibe_Tag_p (lista){
    for (let i =0; i < lista.length; i++){
        console.log(lista[i].innerText);
    }
}

exibe_Tag_p(document.getElementsByTagName('p'))

