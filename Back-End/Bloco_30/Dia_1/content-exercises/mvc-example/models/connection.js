const mysql = require('mysql2/promise');

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, HOSTNAME } = process.env;

const connection = mysql.createPool({
  host: HOSTNAME,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

module.exports = connection;