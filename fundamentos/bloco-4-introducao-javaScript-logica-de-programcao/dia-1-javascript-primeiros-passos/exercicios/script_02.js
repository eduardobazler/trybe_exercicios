function compara_maior(a, b, c){
    let maior = a;
    if (b > maior){
        maior = b;
    }
    if(c > maior){
        maior = c;
    }

    return maior;
}

let num = compara_maior(50, 14, 30);

console.log(num);