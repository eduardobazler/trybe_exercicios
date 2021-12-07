const sum = (n1, n2) => {
  if (typeof n1 !== Number || typeof n1 !== Number ){
    throw Error('Os parametros devem ser um número');
  }
};

try {
  console.log(sum(1, '4'));
} catch (error) {
  console.log(error.message);
}