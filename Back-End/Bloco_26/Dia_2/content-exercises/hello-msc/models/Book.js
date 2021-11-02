const { ObjectId } = require('mongodb');

const connection = require('./connection');

const renameId = ({ _id, title, author_id }) => ({ id: _id, title, authorId: author_id });

const getAll = () =>
  connection()
    .then((db) => db.collection('books').find().toArray())
    .then((results) => results.map(renameId));

const getByAuthorId = (authorId) =>
  connection()
    .then((db) => db.collection('books').find({ author_id: Number(authorId) }).toArray())
    .then((results) => results ? results.map(renameId) : results);

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  
  const book = await connection()
    .then((db) => db.collection('books').findOne(ObjectId(id)));

  if (!book) return null;

  return renameId(book);
};

const create = (title, authorId) =>
  connection()
    .then((db) => db.collection('books').insertOne({ title, author_id: authorId }))
    .then((result) => ({ id: result.insertedId, title, authorId }));

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  create,
};