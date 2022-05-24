const CEP_REGEX = /\d{5}-?\d{3}/;

const validateCep = (req, res, next) => {
  const { cep } = req.params;
  console.log(cep)
  if(!CEP_REGEX.test(cep)) {
    const errorWithStatus = new Error('CEP invalido');
    errorWithStatus.status = 400;
    errorWithStatus.code = 'invalidData';
    next(errorWithStatus);
  }

  next();

}

module.exports = validateCep;