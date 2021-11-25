const express = require('express');
const bodyParse = require('body-parser');

const BookController = require('./src/controllers/bookController');

const app = express();

app.use(bodyParse.json());

const PORT = process.env.PORT || 3000

app.get('/book/:id', BookController.findBookById);
app.get('/books', BookController.findAllBooks);
app.post('/book/:id', BookController.updateBookById);
app.post('/book', BookController.createBook);
app.delete('/book/:id', BookController.excludeBookById);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));