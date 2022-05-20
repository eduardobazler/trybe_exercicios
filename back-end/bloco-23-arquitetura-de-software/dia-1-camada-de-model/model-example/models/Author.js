// models/Author.js
const Joi = require('joi');
const connection = require('./connection');

// Busca todas as pessoas autoras do banco.

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
		.filter(Boolean)
		.join(' ');
  return {
    id,
    firstName, 
    middleName, 
    lastName,
    fullName,
  }
}

const serialize = (authorData) => ({
	id: authorData.id,
	firstName: authorData.first_name,
	middleName: authorData.middle_name,
	lastName: authorData.last_name});

const getAll = async () => {
	const [authors] = await connection.execute(
		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
	);
	return authors.map(serialize).map(getNewAuthor);
};

const authorDTO = Joi.object({
	first_name: Joi.string().required(),
	middle_name: Joi.string(),
	last_name: Joi.string(),
}).messages({
	// mensagem customizada para qualquer tipo de dado qdo for obrigatótio
	"any.required": "campo {{#label}} é obrigatório",
});

const validateDataAuthor = (req, res, next) => {
	const {error} = authorDTO.validate(req.body, { abortEarly: false });

	if(!error) {
		return next();
	}

	const messages = error.details.map(e => e.message); // retira apenas a mensagem de erro do array details de todos os erros
	return res.status(400).json({errors: messages});
}

const createAuthor = async ({ first_name, middle_name, last_name }) => {
	const [row] = await connection.execute("INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)",
	[first_name, middle_name, last_name]);

	const result = {
		id: row.insertId,
		first_name,
		middle_name,
		last_name
	}

	return result;

}	

module.exports = {
	getAll,
	validateDataAuthor,
	createAuthor,
};