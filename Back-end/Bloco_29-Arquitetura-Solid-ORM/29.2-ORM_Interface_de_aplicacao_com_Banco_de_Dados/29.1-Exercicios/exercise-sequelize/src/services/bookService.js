const { Book } = require('../models');

const findAllBooks = async () => {
  try {
    const books = await Book.findAll({
      attributes: ['id', 'author', 'page_quantity', 'created_at']
    });
    return { code: 200, result: books}
  } catch (error) {
    return ({ code: 500, result: { message: 'Algo deu errado'}})
  };
};

module.exports = {
  findAllBooks,
}

