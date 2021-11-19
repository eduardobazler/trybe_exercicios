window.onload = function () {
    const button = document.querySelector('#start-race-btn');
    const car1 = document.querySelector('.car1');
    const car2 = document.querySelector('.car2');

    car1.style.marginLeft = '0px'
    car2.style.marginLeft = '0px'

    //1. Qual o parametro que deve ser escutado
    //2. O que faz quando "ouvir0"
    button.addEventListener('click', function () {
        
        car1.style.marginLeft = parseInt(car1.style.marginLeft)+ Math.random() * 100 + 'px';

        car2.style.marginLeft = parseInt(car2.style.marginLeft)+ Math.random() * 100 + 'px';

    });
}