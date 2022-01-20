const path = require('path');
const fs = require('fs').promises;

const DATA_PATH = path.join(__dirname, 'data', 'users.json');

module.exports = async () => (
  fs.readFile(DATA_PATH, 'utf-8').then(JSON.parse)
);