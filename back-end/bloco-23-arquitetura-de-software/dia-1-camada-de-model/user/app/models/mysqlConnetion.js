const mysql = require('mysql2/promise');

const mysqlConnection = mysql.createPool({
  host: 'localhost',
  port: '3307',
	user: 'root',
	password: 'password',
	database: 'users_crud' });

module.exports = mysqlConnection;
