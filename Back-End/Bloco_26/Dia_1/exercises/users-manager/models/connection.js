const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'thallescarneiro',
  password: '83137033',
  database: 'users_crud',
});

module.exports = connection;