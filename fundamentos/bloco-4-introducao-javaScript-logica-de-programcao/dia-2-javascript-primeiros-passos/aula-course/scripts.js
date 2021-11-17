// let pizzas =['4 queijos', 'frango', 'chocolate', 'Palmito'];

// pizzas.push('peito de peru');
// pizzas.sort();

// for (let index = 0; index < pizzas.length; index += 1){
//     console.log(pizzas[index]);
// }



function multiplica(a) {
    let numbers = [];

    for (let i = 1; i <= 10; i += 1) {
        numbers.push(a * i);
    }

    return numbers;
}

let list = multiplica(7);

for(n of list){
    console.log(n);
}