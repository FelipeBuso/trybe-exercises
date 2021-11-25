const BookService = require('../services/bookService');

const findAllBooks = async (req, res) => {
  const result = await BookService.findAllBooks();
  res.status(result.code).json(result.result)
};

const findBookById = async (req, res) => {
  const { id } = req.params;
  const result = await BookService.findBookById(id)
  res.status(result.code).json(result.result)
};

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const result = await BookService.createBook(title, author, pageQuantity);
  res.status(result.code).json(result.result)
}

const updateBookById = async (req, res) => {
  const { id } = req.params;
  const book = req.body;
  const result = await BookService.updateBookById(id, book);
  res.status(result.code).json(result.result)
}

module.exports = {
  findAllBooks,
  findBookById,
  createBook,
  updateBookById,
}