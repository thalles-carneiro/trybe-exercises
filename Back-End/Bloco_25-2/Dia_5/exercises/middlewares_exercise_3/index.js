const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const postRouter = require('./routers/postRouter');
const { routerNotFound } = require('./middlewares/routerNotFound');

const PORT = 3002;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss, route not found!' }));
app.use(routerNotFound);

app.listen(PORT, () => console.log(`Run on server http://localhost:${PORT}`));
