const rescue = require('express-rescue');
const Joi = require('joi');

const Book = require('../services/Book');

const getAll = rescue(async (req, res) => {
  const { author_id } = req.query;
  const books = (author_id)
    ? await Book.getByAuthorId(author_id)
    : await Book.getAll();

  res.status(200).json(books);
});

const findById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (book.error) return next(book.error);

  res.status(200).json(book);
});

const create = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    author_id: Joi.string().not().empty().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { title, author_id } = req.body;

  const newBook = await Book.create(title, author_id);

  if (newBook.error) return next(newBook.error);

  res.status(201).json(newBook);
});

module.exports = {
  getAll,
  findById,
  create,
};