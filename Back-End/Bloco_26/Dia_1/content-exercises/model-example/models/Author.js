const { ObjectId } = require('bson');
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
  const authors = await connection()
    .then((db) => db.collection('authors').find().toArray());

  return authors.map(({ _id, firstName, middleName, lastName }) => (
    getNewAuthor({ id: _id, firstName, middleName, lastName })
  ));
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)));

  if (!authorData) return null;

  return getNewAuthor({ id, ...authorData });
};

const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then((author) => getNewAuthor({ id: author.insertedId, firstName, middleName, lastName }));

module.exports = {
  getAll,
  findById,
  create,
  isValid,
};
