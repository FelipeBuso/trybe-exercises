const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'felipe',
    password: 'F17S11f02!',
    database: 'model_example' });

module.exports = connection;