const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    attributes: ['id', 'title', 'author', 'pageQuantity'],
    order: [['title', 'ASC']],
  });
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const createBook = async ({ title, author, pageQuantity }) => {
  const bookCreated = await Book.create({ title, author, pageQuantity });
  return bookCreated;
}

const editBook = async (id, { title, author, pageQuantity }) => {
  // retorna 1 se editou, retorna 0 se não
  const [bookUpdate] = await Book.update({
    title,
    author,
    pageQuantity
  }, {
    where: { id },
  });

  return bookUpdate;
};

const deleteBook = async (id) => {
  const book = await Book.destroy({
    where: { id },
    order: [['title', 'ASC']],
  });
  return book;
};

const getByAuthor = async (author) => {
  const books = await Book.findAll({ where: { author }});
  return books;
}

module.exports = {
  getAll,
  getById,
  createBook,
  editBook,
  deleteBook,
  getByAuthor,
}