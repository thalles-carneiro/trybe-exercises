const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const teamRouter = require('./routers/teamRouter');
const { errorHandler } = require('./middlewares/errorHandler');
const PORT = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/teams', teamRouter);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Run on server http://localhost:${PORT}`));
