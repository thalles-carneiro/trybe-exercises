const express = require('express');
const bodyParser = require('body-parser');

const plantsModule = require('./plants.js');

const app = express();

app.use(bodyParser.json());

app.get('/plants', (_req, res) => {
  const plants = plantsModule.getPlants();
  res.send(plants);
});

app.get('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.getPlantById(id);
  res.send(plant);
});

app.delete('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.removePlantById(id);
  res.send(plant);
});

app.put('/plant/:id', (req, res) => {
  const { id } = req.params;
  const { plant: newPlant } = req.body;
  const plant = plantsModule.editPlant(id, newPlant);
  res.send(plant);
});

app.post('/plant', (req, res) => {
  const { plant: newPlant } = req.body;
  const plant = plantsModule.createNewPlant(newPlant);
  res.send(plant);
});

app.get('/sunny/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.getPlantsThatNeedsSunWithId(id);
  res.send(plant);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));