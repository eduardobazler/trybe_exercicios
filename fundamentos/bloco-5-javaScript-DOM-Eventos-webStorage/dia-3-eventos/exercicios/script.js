function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//   Exercício 1:

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let listaPai = document.querySelector('#days');

for (let i = 0; i < dezDaysList.length; i++) {

    let day = document.createElement('li');

    day.innerText = dezDaysList[i];
    day.classList.add('day');

    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
        day.classList.add('holiday');
    }

    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
        day.classList.add('friday');
    }

    listaPai.appendChild(day);

}

//2


function exercicio2(string) {

    let paiExc2 = document.querySelector('.buttons-container');

    let botao = document.createElement('button');

    botao.innerText = string;

    botao.id = 'btn-holiday'

    paiExc2.appendChild(botao);
}

exercicio2('Feriados');

//3

let btnHoliday = document.querySelector('#btn-holiday');

btnHoliday.addEventListener('click', exercicio3);

let botaoFeriado = 'desligado';

function exercicio3(evento) {

    let feriados = document.querySelectorAll('.holiday');

    if (botaoFeriado === 'desligado') {
        for (let i = 0; i < feriados.length; i++) {

            feriados[i].style.backgroundColor = 'aqua';
        }

        botaoFeriado = 'ligado';

    } else {
        for (let i = 0; i < feriados.length; i++) {

            feriados[i].style.backgroundColor = 'unset';
        }

        botaoFeriado = 'desligado';
    }

}

//depois pensar em como melhorar esse código


//4

function exercicio4(string) {
    let friday = document.createElement('button');
    friday.innerText = string;

    friday.classList.add("btn-friday");

    let pai = document.querySelector('.buttons-container');

    pai.appendChild(friday);
}

exercicio4("Sexta-feira");

//5

let estadoBtnSextaFeira = 'desligado'

let btnSextaFeira = document.querySelector('.btn-friday');

btnSextaFeira.addEventListener('click', exercicio5);

function exercicio5(evento) {
    let sextaFeiras = document.querySelectorAll('#days .friday');

    if (estadoBtnSextaFeira === 'desligado'){

        for (let i = 0; i < sextaFeiras.length; i++) {

            sextaFeiras[i].innerText = 'sextou';
    
        }

        estadoBtnSextaFeira = 'liagado'

    } else {

        let dias = [4, 11, 18, 25]

        for (let i = 0; i < sextaFeiras.length; i++) {

            sextaFeiras[i].innerText =  dias[i] ;
    
        }

        estadoBtnSextaFeira = 'desligado';
    }
}

//melhorar esse código!! ^^^^^


//6

let listaDias = document.querySelectorAll('.day');

//adicionando um escutador em todos os dias 
for (let i = 0; i < listaDias.length; i++){

    listaDias[i].addEventListener('mouseover', aumentaZoom);
    listaDias[i].addEventListener('mouseout', retornaZoom);

}

function aumentaZoom(evento){

    evento.target.style.fontSize = '40px';
    evento.target.style.fontWeight = '600';

}

function retornaZoom(evento){

    evento.target.style.fontSize = 'unset';
    evento.target.style.fontWeight = 'unset';

}


//7

function exercicio7(string){

    let tarefa = document.createElement('span');

    let elementPai = document.querySelector('.my-tasks');

    tarefa.innerText = string
    

    elementPai.appendChild(tarefa);

}



//8

function exercicio8(cor){

    let corLegenda = document.createElement('div');
    corLegenda.classList.add('task');

    corLegenda.style.backgroundColor = cor;

    elementPai = document.querySelector('.my-tasks');

    elementPai.appendChild(corLegenda);

}
