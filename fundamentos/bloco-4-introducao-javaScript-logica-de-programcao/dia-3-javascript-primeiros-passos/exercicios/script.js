function faz_matriz(n) {
    let linha = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            linha = linha + '*';
        }
        console.log(linha); //"imprime" a primeira linha;
        linha = ''; //linha volta a ser vazia
    }
}


function faz_triangulo(n) {
    let linha = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            linha = linha + '*';
            if (j >= i) {
                break;
            }
        }
        console.log(linha);
        linha = '';
    }
}




function triangulo_inverso(n) {

    for (let i = 1; i <= n; i++) {
        let linha = '';
        for (let j = 1; j <= n; j++) {
            if (i < n) {
                linha = linha + ' ';
            }

            if (i + j >= n) {
                for (let k = 0; k < i; k++) {
                    linha = linha + '*';
                }
                break;
            }

        }
        console.log(linha);

    }
}



// // EXEMPLO FOR DENTRO DE FOR
// let qtd = 10;
// let ingredientes = ["queijo", "presunto", "maionese"];
// let sacola = [];
// for (let index = 0; index < 10; index += 1) {
//     //console.log('exectuou fora: ', index)

//     let pao = [];

//     for (let index = 0; index < ingredientes.length; index += 1) {
//         // console.log('exectuou dentro: ', index);
//         pao.push(ingredientes[index])
//     }
//     sacola.push(pao);

// }

// // for (let i = 0; i < sacola.length; i++){
// //     sacola[i].splice(2,1);
// // }

// sacola[3].splice(2,1);
// let linha = '';
// for (let i = 0; i < sacola.length; i++){
//     console.log('pão: ', sacola[i]);
// }

function piramede(n){

    for (let i = 1; i <= n; i++){
        let linha = '';
        for (let j = 1; j <= n; j++){
            if (i % 2 != 0){
                console.log('teste')
            }
            else{
                linha = linha + '';
            }
        }
        console.log(linha);
    }
}


piramede(5);