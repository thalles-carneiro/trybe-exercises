const Author = require('../models/Author');
const Book = require('../models/Book');

const getAll = async () => Book.getAll();

const getByAuthorId = async (authorId) => {
  const book = await Book.getByAuthorId(authorId);

  if(!book) {
    return {
      error: {
        code: 'notFound',
        message: `Could not find a book with the author_id ${authorId}`,
      },
    };
  }

  return book;
};

const findById = async (id) => {
  const book = await Book.findById(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: `Could not find a book with the id ${id}`,
      },
    };
  }

  return book;
};

const create = async (title, authorId) => {
  const author = await Author.findById(authorId);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Could not find an author with the id ${authorId}`,
      },
    };
  }

  return Book.create(title, authorId);
};

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  create,
};