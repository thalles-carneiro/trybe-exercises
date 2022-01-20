const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios').default;

const { isValidToken } = require('./middlewares/validations');

const PORT = 3002;
const ENDPOINT_EXTERNAL_API = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get(
  '/btc/price',
  isValidToken,
  async (_req, res) => {
    const { data } = await axios.get(ENDPOINT_EXTERNAL_API);
    res.status(200).json(data);
  },
);

app.listen(PORT, () => console.log(`Run server http://localhost:${PORT}`));
