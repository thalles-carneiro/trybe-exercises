require('dotenv').config();
const express = require('express');

const Ping = require('./controllers/Ping');
const Cep = require('./controllers/Cep');
const ErrorHandler = require('./middlewares/ErrorHandler');

const app = express();

app.use(express.json());

app.get('/ping', Ping);

app.get('/cep/:cep', Cep.findAddressByCep);
app.post('/cep', Cep.create);

app.use(ErrorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});