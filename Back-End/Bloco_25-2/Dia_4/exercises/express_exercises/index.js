const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const simpsonsUtils = require('./fs-utils');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if(age <= 17) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  res.status(200).json({ message: `Hello, ${name}!` });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', rescue(async (_req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();

  res.status(200).json(simpsons);
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const simpsons = await simpsonsUtils.getSimpsons();
  const simpson = simpsons.find((s) => s.id === id);

  if(!simpson) {
    return res.status(404).json({ message: 'Simpson Not Found' });
  }

  return res.status(200).json(simpson);
}));

app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await simpsonsUtils.getSimpsons();

  if(simpsons.some((s) => s.id === id)) {
    return res.status(409).json({ message: 'Id already exists' });
  }

  await simpsonsUtils.setSimpsons([...simpsons, { id, name }]);
  return res.status(204).end();
}));

app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`)
});

app.listen(3001, () => console.log('Aplicação ouvindo na porta 3001'));
