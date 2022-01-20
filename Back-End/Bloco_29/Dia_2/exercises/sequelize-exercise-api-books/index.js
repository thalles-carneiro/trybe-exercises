const express = require('express');
const bodyParser = require('body-parser');

const booksController = require('./src/controllers/booksController');

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());

app.get('/books', booksController.getAll);
app.get('/book/:id', booksController.getById);
app.post('/book', booksController.createNew);
app.put('/book/:id', booksController.updateById);
app.delete('/book/:id', booksController.deleteById);

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });