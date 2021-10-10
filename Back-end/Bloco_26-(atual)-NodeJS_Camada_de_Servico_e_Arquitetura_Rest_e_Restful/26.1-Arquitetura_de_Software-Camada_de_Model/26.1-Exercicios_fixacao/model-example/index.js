const express = require('express');
const Authors = require('./models/Authors')
const Book = require('./models/Book');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/authors', async (_req, res) => {
  const authors = await Authors.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
  const books = await Book.getAllBooks();
  res.status(200).json(books);
})

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});