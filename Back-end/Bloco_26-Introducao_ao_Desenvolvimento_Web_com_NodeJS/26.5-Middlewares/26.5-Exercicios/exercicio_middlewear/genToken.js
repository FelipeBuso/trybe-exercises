function genRandomToken(size) {
  let token = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (i = 0; i < size; i++) {
    token += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  return token;
};

module.exports = { genRandomToken };