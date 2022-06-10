const bookService = require('../services/bookService');

const getAll = async (req, res) => {
  const { author } = req.query;  

  if (author) {
    books = await bookService.getByAuthor(author);
  } else {
    books = await bookService.getAll();
  }

  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.getById(id);
  res.status(200).json(book);
}

const createBook = async (req, res) => {
  const book = await bookService.createBook(req.body);
  res.status(200).json(book);
}

const editBook = async (req, res) => {
  const { id } = req.params;
  const bookUpdated = await bookService.editBook(id, req.body);
  res.status(200).json(bookUpdated);
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.deleteBook(id);
  res.status(200).json(book);
}


module.exports = {
  getAll,
  getById,
  createBook,
  editBook,
  deleteBook,
}