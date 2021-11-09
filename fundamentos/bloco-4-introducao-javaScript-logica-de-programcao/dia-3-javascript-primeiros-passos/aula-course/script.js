let fruits = [3, 4, 10, 1, 12];

let soma = 0;

for (let number of fruits){
    soma += number;
}

if (soma > 15){
    console.log(soma);
} else {
    console.log("valor menor que 16");
}
