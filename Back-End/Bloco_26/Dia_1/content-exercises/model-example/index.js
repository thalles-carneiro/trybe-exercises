const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Author not found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    res.status(400).json({ message: 'Invalid data' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Successfully created author!' })
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = (author_id)
    ? await Book.getByAuthorId(author_id)
    : await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!await Book.isValid(title, author_id)) {
    res.status(400).json({ message: 'Invalid data' });
  }

  await Book.create(title, author_id);

  res.status(201).json({ message: 'Successfully created book!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Run on server http://localhost:${PORT}`);
});
