const connection = require('./mysqlConnetion');

const getAll = async () => {
  const [rows] = await connection.execute("SELECT * FROM users_crud.users");
  return rows;
}

const formatUser = ({ id, first_name: firstName, last_name: lastName, email }) => {
  return {
    id,
    firstName,
    lastName,
    email
  };
}

const setUser = async ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  const params = [firstName, lastName, email, password]
  const [userInserted] = await connection.execute(query, params);
  return {id: userInserted.insertId, firstName, lastName, email };
}

module.exports = {
  getAll,
  setUser,
}