const { ObjectId } = require('mongodb');

const connection = require('./connection');
const Author = require('./Author');

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || authorId.length !== 24 || !(await Author.findById(authorId))) return false;

  return true;
};

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getAll = async () => {
  const books = await connection()
    .then((db) => db.collection('books').find().toArray());

  return books.map(({ _id, title, author_id }) => ({ id: _id, title, authorId: author_id }));
}

const getByAuthorId = async (authorId) => {
  const books = await connection()
    .then((db) => db.collection('books').find({ author_id: Number(authorId) }).toArray());

  return books.map(({ _id, title, author_id }) => ({ id: _id, title, authorId: author_id }));
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  
  const bookData = await connection()
    .then((db) => db.collection('books').findOne(ObjectId(id)));

  if (!bookData) return null;

  const { _id, title, author_id } = bookData;
  return { id: _id, title, authorId: author_id };
};

const create = async (title, authorId) =>
  connection()
    .then((db) => db.collection('books').insertOne({ title, author_id: authorId }))
    .then((book) => ({ id: book.insertedId, title, author_id: authorId }));

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
  isValid,
};
