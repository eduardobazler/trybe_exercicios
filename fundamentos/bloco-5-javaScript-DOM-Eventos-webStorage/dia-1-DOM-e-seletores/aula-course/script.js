let header = document.getElementById('header-container');
header.style.backgroundColor = '#3FB16A';

let section = document.getElementsByTagName('section');

for (let i = 0; i < section.length; i++){
    section[i].style.border ='solid';
}

let emegencyTasks = document.querySelectorAll('.emergency-tasks');
emegencyTasks[0].style.backgroundColor = '#FC9F84'

for (let i = 0; i < emegencyTasks[0].querySelectorAll('h3').length; i++){
    emegencyTasks[0].querySelectorAll('h3')[i].style.backgroundColor = '#A964F3'
}

let noEmgencyTasks = document.getElementsByClassName('no-emergency-tasks');
noEmgencyTasks[0].style.backgroundColor = '#F9DB5E';

for (let i =0 ; i < noEmgencyTasks[0].querySelectorAll('h3').length; i++){
    noEmgencyTasks[0].querySelectorAll('h3')[i].style.backgroundColor = '#232525';
}

document.getElementsByTagName('footer')[0].style.backgroundColor = '#083533'
