require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'uploads')));

app.get('/ping', controllers.ping);

app.post(
  '/upload',
  middlewares.upload.single('file'),
  controllers.upload,
);
app.post(
  '/multiple',
  middlewares.multiple.array('files'),
  controllers.multiple,
);

app.post(
  '/profile',
  middlewares.profile.single('profilePic'),
  controllers.profile,
);

app.get(
  '/profile/:id',
  controllers.getProfile,
);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
