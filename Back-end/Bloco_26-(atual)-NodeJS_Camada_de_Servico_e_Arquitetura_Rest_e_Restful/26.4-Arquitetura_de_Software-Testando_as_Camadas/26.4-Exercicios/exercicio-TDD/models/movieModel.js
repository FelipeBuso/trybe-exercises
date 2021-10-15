const mongoConnection = require('./connection');
const { ObjectID } = require('mongodb');

const getAll = async () => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const movies = await moviesCollection
    .find()
    .toArray();

  return movies.map(({ _id, ...movieData }) => ({
    id: _id,
    ...movieData,
  }));
};

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
    title, 
    directedBy, 
    releaseYear
  };
};

const findById = async (id) => {
  const movieCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));
    
  const movie = await movieCollection
    .findOne({ _id: ObjectID(id) });
    
  return movie;
}

module.exports = {
  create,
  getAll,
  findById,
};