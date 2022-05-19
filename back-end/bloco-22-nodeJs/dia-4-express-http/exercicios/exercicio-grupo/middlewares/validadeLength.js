const validadeLength = (req, res, next) => {
  console.log('entrei aqui  ?')
  const { productName } = req.body;
  if (!productName) {
    throw {status: 400, message: "Produto invalido"}
  } 

  if (productName.length < 4) {
    throw {status: 400, message: "Produto invalido com titulo pequeno"}
  }

  next();
};

module.exports = validadeLength;