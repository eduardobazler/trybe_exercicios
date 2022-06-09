const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      "INSERT INTO movies (title, directed_by, release_year) VALUES (?, ?, ?)",
      [title, directedBy, releaseYear]
    );

  return {
    id: result.insertId,
  };
};

const getById = async (idParam) => {
  const [result] = await connection
  .execute(
    "SELECT id, title, directed_by, release_year FROM movies WHERE id = ?",
    [idParam]
  );
  
  const { id, title, directed_by, release_year } = result[0];
  return {
    id,
    title,
    directedBy: directed_by,
    releaseYear: release_year
  }
};

module.exports = {
  create,
  getById,
};