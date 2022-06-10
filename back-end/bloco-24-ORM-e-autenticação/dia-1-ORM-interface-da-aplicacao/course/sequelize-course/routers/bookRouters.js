const express = require('express');
const bookController = require('../controllers/bookController');

const route = express.Router();

route.get('/', bookController.getAll);

route.get('/:id', bookController.getById);

route.post('/', bookController.createBook);

route.put('/:id', bookController.editBook);

route.delete('/:id', bookController.deleteBook);

module.exports = route;