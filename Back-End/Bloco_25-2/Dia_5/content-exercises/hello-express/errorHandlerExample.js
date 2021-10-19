const express = require('express');
const rescue = require('express-rescue');
const errorMiddleware = require('./errorMiddleware');
const fs = require('fs').promises;

const app = express();

app.get('/:fileName', [
  rescue(async (req, res, next) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  }),
  (err, _req, _res, next) => {
    if (err.code === 'ENOENT') {
      const newError = new Error(err.message);
      newError.code = 'file_not_found';
      newError.status = 404;
      return next(newError);
    }

    return next(err);
  }
]);

app.use(errorMiddleware);

app.listen(3002);