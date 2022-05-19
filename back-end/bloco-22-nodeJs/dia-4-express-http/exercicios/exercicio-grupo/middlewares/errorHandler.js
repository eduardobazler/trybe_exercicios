const errorHandler = ({message, status}, req, res, next) => {
  console.log("Errrouuuuu");
  res.status(status).json({message});
};

module.exports = errorHandler;