const { del } = require('express/lib/application');
const { Book } = require('../models');

const getAll = async (_req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch ({ message }) {
    console.log(message);
    return res.status(500).json({ message: 'Algo deu errado' });
  };
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    return res.status(200).json(book);
  } catch ({ message }) {
    console.log(message);
    return res.status(500).json({ message: 'Algo deu errado' });
  };
};

const createNew = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });
    return res.status(201).json(newBook);
  } catch ({ message }) {
    console.log(message);
    return res.status(500).json({ message: 'Algo deu errado' });
  };
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity = 0 } = req.body;
    const [updateBook] = await Book.update({ title, author, pageQuantity }, { where: { id } });

    if (!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso' });
  } catch ({ message }) {
    console.log(message);
    return res.status(500).json({ message: 'Algo deu errado' });
  };
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookToDelete = await Book.findByPk(id);

    if (!bookToDelete) return res.status(404).json({ message: 'Livro não encontrado' });

    await bookToDelete.destroy();

    return res.status(200).json({ message: 'Livro excluído com sucesso' });
  } catch ({ message }) {
    console.log(message);
    return res.status(500).json({ message: 'Algo deu errado' });
  };
};

module.exports = {
  getAll,
  getById,
  createNew,
  updateById,
  deleteById,
};