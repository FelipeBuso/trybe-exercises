const jwt = require('jsonwebtoken');

const secret = 'hello-jwt';

const jwtConfig = {
  expiresIn = '1h',
  algorithm: 'HS256',
};

const token = (username) => {
  return jwt.sign(use)
}