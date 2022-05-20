const connection = require('./connection');

const getAll = async (authorId) => {
  const [books] = await connection.execute("SELECT * FROM model_example.books WHERE author_id=?;", [authorId]);
  
  return books.map(({ id, title, author_id} ) => ({
    id,
    title,
    authorId: author_id,
  }));
}

module.exports = {
  getAll,
};