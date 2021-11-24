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

module.exports = {
  findAllBooks,
  findBookById,
}