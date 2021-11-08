let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// for (let direita = 1; direita < array.length; direita++) {
//     for (let esquerda = 0; esquerda < direita; esquerda++) {
//         if (array[direita] < array[esquerda]){
//             let auxiliar = array[esquerda];
//             array[esquerda] = array[direita];
//             array[direita] = auxiliar;
//         }
//     }
// }

let modificado = [];
direita = 1;

for (let esquerda = 0; esquerda < array.length; esquerda++){

    if (direita >= array.length){             //significa que a lista chegou ao final
        modificado.push(array[esquerda] * 2);
        break
    }

    modificado.push(array[esquerda] * array[direita]);
    
    direita += 1;
}

console.log(modificado);