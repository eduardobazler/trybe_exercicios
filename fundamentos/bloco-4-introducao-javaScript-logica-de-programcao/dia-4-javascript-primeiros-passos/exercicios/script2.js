function palindromo(palavra) {
    let palavra_inversa = '';

    for (let i = palavra.length - 1; i >= 0; i--) {
        palavra_inversa += palavra[i];
    }
    if (palavra_inversa == palavra) {
        return true;
    }
    else {
        return false
    }
};

function descobrMaior(lista) {
    let maior = lista[0];

    //procura o maior
    for (valor of lista) {
        if (valor >= maior) {
            maior = valor;
        }
    }
    return lista.indexOf(maior);
}


function descobrMenor(lista) {
    let menor = lista[0];

    //procura o maior
    for (valor of lista) {
        if (valor <= menor) {
            menor = valor;
        }
    }
    return lista.indexOf(menor);
}

function maiorNome(listaDeNomes) {
    maior = listaDeNomes[0];

    for (let nome of listaDeNomes) {
        if (nome.length >= maior.length){
            maior = nome;
        }  
    }
    return maior;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));