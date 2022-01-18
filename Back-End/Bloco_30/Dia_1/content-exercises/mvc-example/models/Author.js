const connection = require('./connection');

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return { id, firstName, middleName, lastName, name: fullName };
};

// Serializa o nome dos campos de snake_case para camelCase

const serialize = ({ id, first_name, middle_name, last_name }) => ({
  id,
  firstName: first_name,
  middleName: middle_name,
  lastName: last_name,
});

// Busca todos os autores do banco

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors',
  );

  return authors.map(serialize).map(getNewAuthor);
};

/*
  Busca um autor específico, a partir do seu ID
  @param {String} id ID do autor a ser recuperado
*/

const findById = async (id) => {
  const [authorData] = await connection.execute(
    'SELECT first_name, middle_name, last_name FROM authors WHERE id = ?',
    [id],
  );

  if (!authorData.length) return null;

  const [{ firstName, middleName, lastName }] = authorData.map(serialize);

  return getNewAuthor({ id, firstName, middleName, lastName });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO mvc_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);


module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
