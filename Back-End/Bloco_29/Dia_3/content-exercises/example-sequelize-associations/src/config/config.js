require('dotenv').config();

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_TEST_DATABASE, MYSQL_DATABASE, HOSTNAME } = process.env;

module.exports = {
  development: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: HOSTNAME,
    dialect: 'mysql'
  },
  test: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_TEST_DATABASE,
    host: HOSTNAME,
    dialect: 'mysql',
    // adicione essa linha a sua configuração para omitir mensagens de log no orm
    logging: false
  },
  production: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: HOSTNAME,
    dialect: 'mysql'
  }
}
