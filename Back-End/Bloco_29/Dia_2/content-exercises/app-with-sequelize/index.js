const express = require("express");
const bodyParser = require('body-parser');

const userController = require('./src/controllers/userController');

const app = express();

app.use(bodyParser.json());

app.use('/user', userController);

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;