const connection = require('./connection');

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  const query =
  `SELECT
    id, first_name, middle_name, last_name
  FROM
    authors;`;
  const [authors] = await connection.execute(query);

  return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const query =
  `SELECT
    id, first_name, middle_name, last_name
  FROM
    authors
  WHERE
    id=?`;
  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  return authorData.map(serialize).map(getNewAuthor)[0];
};

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
  [firstName, middleName, lastName],
);

module.exports = {
  getAll,
  findById,
  create,
  isValid,
};
