const imc = (high, weight) => {
  return weight / Math.pow(high, 2);
}

const rateImc = (imc) => {
  if (imc < 18.5) {
    return 'Abaixo do peso (magreza)';
  } else if ( imc <= 24.9) {
    return 'Peso normal';
  } else if (imc <= 29.9 ){
    return 'Acima do peso (sobrepeso)'
  } else if ( imc <= 34.9) {
    return 'Obesidade grau 1';
  } else if ( imc <= 39.9) {
    return 'Obesidade grau 2';
  }
  return 'Obesidade grau 3';
  
}

module.exports = {imc, rateImc}