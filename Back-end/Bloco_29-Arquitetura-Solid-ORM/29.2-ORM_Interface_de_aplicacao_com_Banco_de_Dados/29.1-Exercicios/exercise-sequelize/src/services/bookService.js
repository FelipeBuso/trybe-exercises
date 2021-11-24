const { Book } = require('../models');

const findAllBooks = async () => {
  try {
    const books = await Book.findAll({
      attributes: ['id', 'author', 'page_quantity', 'created_at']
    });
    return { code: 200, result: books}
  } catch (error) {
    return ({ code: 500, result: { message: 'Algo deu errado' } });
  };
};

const findBookById = async (id) => { 
  try {
    const bookById = await Book.findByPk(id, {
      attributes: ['id', 'author', 'page_quantity', 'created_at'],
    });
    console.log(bookById)
    if (bookById === null) {
      return { code: 204, result: { message: 'Livro não encontrado' } };
    } else {
      return { code: 200, result: bookById }
    }
  } catch (error) {
    return ({ code: 500, result: { message: 'Algo deu errado' } });
  }
}

module.exports = {
  findAllBooks,
  findBookById,
}

