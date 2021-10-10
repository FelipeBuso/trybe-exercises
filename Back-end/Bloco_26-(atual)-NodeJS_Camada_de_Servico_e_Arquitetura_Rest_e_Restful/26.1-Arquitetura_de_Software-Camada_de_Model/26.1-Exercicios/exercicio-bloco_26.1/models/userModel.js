const { connectionMongoDB } = require('../models/connectionsMongoDB');
const { ObjectID } = require('mongodb');

function isValid(firstName, lastName, email, password) {
  if (!firstName || !lastName || !email || !password) return false;
  return true;
}

function checkPassword(password) {
  if (password.split('').length < 6 || typeof password !== 'string') return false;
  return true;
};

const insertUser = async (firstName, lastName, email, password) => {
  return await connectionMongoDB()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }) );
  };

module.exports = { insertUser, isValid, checkPassword };