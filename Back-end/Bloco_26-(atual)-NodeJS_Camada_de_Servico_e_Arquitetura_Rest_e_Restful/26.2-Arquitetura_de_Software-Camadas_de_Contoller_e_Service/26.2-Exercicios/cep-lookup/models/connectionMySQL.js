const mysql = require('mysql2/promise');

const connectionMySQL = mysql.createPool({
  host: 'localhost',
  user: 'felipe',
  password: 'F17S11f02!',
  database: 'cep_lookup',
});

module.exports = {connectionMySQL};
