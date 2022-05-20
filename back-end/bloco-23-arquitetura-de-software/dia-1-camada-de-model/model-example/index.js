// index.js
const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const Author = require('./models/Author');
const Books = require('./models/Booke');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
})

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const dataBooks = await Books.getAll(author_id);
  res.status(200).json(dataBooks);
})

app.post('/authors', Author.validateDataAuthor, async (req, res) => {
  const author = await Author.createAuthor(req.body);

  res.status(200).json(author);
})

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});