const Author = require('../models/Author');

const getAll = async () => Author.getAll();

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Could not find an author with the id ${id}`,
      },
    };
  }

  return author;
};

const create = async (firstName, middleName, lastName) => {
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Already exists an author with that full name'
      },
    };
  }

  return Author.create(firstName, middleName, lastName);
};

module.exports = {
  getAll,
  findById,
  create,
};