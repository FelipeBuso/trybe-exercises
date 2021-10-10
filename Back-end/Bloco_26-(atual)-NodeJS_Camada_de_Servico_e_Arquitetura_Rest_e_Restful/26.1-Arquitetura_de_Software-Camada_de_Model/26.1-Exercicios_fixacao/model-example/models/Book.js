const connection = require('./connection');

const getAllBooks = async () => {
  const [books] = await connection.execute(
    'SELECT id, title FROM model_example.books;'
  );
  return books;
}

module.exports = { getAllBooks };