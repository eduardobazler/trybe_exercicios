// //array com atribuição hibrida

// let var1 = "maça";
// let var2 = "banana";
// let var3 = 'abacaxi';

// let frutas = [var1, var2, var3];


// //saida de dados;

// console.log('saida: ', frutas);

// for (let index of frutas) {
//     console.log(index);
// }

// //entradada de dados em arrays ->

// let outras_frutas =[];

// outras_frutas.push('maça');
// outras_frutas.push('abacaxi');
// outras_frutas.push('banana');

// console.log(outras_frutas);

// // propriedades ->

// console.log(outras_frutas.length);

// for (let i = 0; i < 3; i++) {
//     console.log(i ** 4);
// }

let frutas = ['maça', 'laranja', 'abacaxi', 'limao', 'melancia'];
let frutas_citricas = ['laranja', 'limao'];
let arrayFinal = [];

for (let i = 0; i < frutas.length; i++){
    
    if((frutas[i] == frutas_citricas[0] || frutas[i] == frutas_citricas[1])){
        arrayFinal.push(frutas[i]);
    }
    
}

console.log(arrayFinal);