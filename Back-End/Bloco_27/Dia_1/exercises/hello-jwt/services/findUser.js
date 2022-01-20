const readUsersData = require('../models/readUsersData');

module.exports = async (username) => {
  const users = await readUsersData();

  const user = users.find((u) => u.username === username);

  if (!user) return null;

  return user;
};