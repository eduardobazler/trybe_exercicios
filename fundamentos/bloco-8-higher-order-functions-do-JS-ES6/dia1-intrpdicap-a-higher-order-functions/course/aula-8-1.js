/* const soma = (n1, n2 ) => {
  return n1 + n2;
};

const sayHello = () => {
  return `Hello world!`
}

const printGreeting = (callback) => {
  console.log(callback());
}

printGreeting(sayHello); */

//retornar uma função dentro de outra função
/* const sumFixAmout = (amout) => {
  return (number) => amout + number;
}

const initialSum = sumFixAmout(15);
//initialSum agora é a função retornada na primeira função

console.log(initialSum(5)); */

const sum = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const multi = (n1, n2) => n1 * n2;

const calculator = (func, n1, n2) => func(n1, n2);

const calculadora = {
  soma: (a, b) => a + b,
  multi: (a,b) => a * b,
}
/* 
console.log(calculadora.multi(2, 6)); */

/* const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log); */

/* const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(10, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
}); */

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;