const { Book } = require('../models');

const findAllBooks = async () => {
  try {
    const books = await Book.findAll();
    return { code: 200, result: books}
  } catch (error) {
    return ({ code: 500, result: { message: 'Algo deu errado' } });
  };
};

const findBookById = async (id) => { 
  try {
    const bookById = await Book.findByPk(id);
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

const createBook = async (title, author, pageQuantity) => {
  const dateNow = new Date();
  try {
    const bookCreated = await Book.create({
     title, author, pageQuantity, createdAt: dateNow
    });
    return { code: 200, result: bookCreated }
  } catch (error) {
    return ({ code: 500, result: { message: 'Algo deu errado' } });
  };
}

const updateBookById = async (id, book) => {
  try {
    const bookUpdated = await Book.update(
      { ...book },
      { where: { id } }
    );
    return { code: 200, result: { id, ...book} }
  } catch (error) {
    return ({ code: 500, result: { message: 'Algo deu errado' } });
  };
}

module.exports = {
  findAllBooks,
  findBookById,
  createBook,
  updateBookById,
}

