const writeUserData = require('../models/writeUserData');

module.exports = async (content) => {
  await writeUserData(content);
};