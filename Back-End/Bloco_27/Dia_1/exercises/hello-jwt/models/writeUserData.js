const path = require('path');
const fs = require('fs').promises;

const readUsersData = require('./readUsersData');

const DATA_PATH = path.join(__dirname, 'data', 'users.json');

module.exports = async (content) => {
  const users = await readUsersData();

  const contentFile = [...users, content];

  await fs.writeFile(DATA_PATH, JSON.stringify(contentFile), 'utf-8');
};