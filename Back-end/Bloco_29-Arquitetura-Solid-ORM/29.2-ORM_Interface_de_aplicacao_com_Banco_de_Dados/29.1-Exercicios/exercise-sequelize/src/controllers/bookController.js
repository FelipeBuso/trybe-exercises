const BookService = require('../services/bookService');

const findAllBooks = async (req, res) => {
  const result = await BookService.findAllBooks();
  res.status(result.code).json(result.result)
};

module.exports = {
  findAllBooks,
}