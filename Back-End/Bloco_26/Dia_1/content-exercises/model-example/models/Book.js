const connection = require('./connection');
const Author = require('./Author');

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
};

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getAll = async () => {
  const query = 'SELECT * FROM books;';
  const [books] = await connection.execute(query);

  return books.map(serialize);
}

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM books WHERE author_id=?;';
  const [books] = await connection.execute(query, [authorId]);

  return books.map(serialize);
};

const getById = async (id) => {
  const query = 'SELECT * FROM books WHERE id=?';
  const [book] = await connection.execute(query, [id]);

  if (book.length === 0) return null;

  return book.map(serialize)[0];
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO books (title, author_id) VALUES (?, ?)',
  [title, authorId],
);

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
  isValid,
};
