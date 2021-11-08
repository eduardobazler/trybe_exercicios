let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercício 1
// for (let number of numbers){
//     console.log(number);
// }

//exercício 2

// let soma = 0;
// for (let number of numbers){
//     soma += number;
// }

// console.log(soma);

//exercício 3

// let media;
// let soma = 0;

// for (let i = 0; i < numbers.length; i++){
//     soma += numbers[i];
//     media = soma / numbers.length;
// }

// //exercício 4

// if (media > 20){
//     console.log("valor maior que vinte");
// } 
// else {
//     console.log('Menor ou igual a vinte');
// }


//exercício 5

// maior = numbers[0];

// for (let number of numbers){
//     if (number > maior){
//         maior = number;
//     }
// }

// console.log(maior);

//exercicio 6

// let impares = [];
// for (let valor of numbers){
//     if (valor % 2 !== 0){
//         impares.push(valor)
//     }
// }

// if (impares.length === 0){
//     console.log('Nenhum valor ímpar encontrado');
// } else {
//     console.log(impares.length);
//     console.log(impares)
// }


// exercício 7

// menor = numbers[0];

// for (let valor of numbers){
//     if( valor < menor){
//         menor = valor;
//     }
// }

// console.log(menor);

//exercício 8

let numeros = [];

for (let i = 1; i <= 25; i++) {
    numeros.push(i);
}
console.log(numeros);

//exercício 9

for (let valor of numeros){
    let divi = valor / 2;
    console.log(divi);
}