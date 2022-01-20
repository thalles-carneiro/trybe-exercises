const rescue = require('express-rescue');

const UserModel = require('../models/User');

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;

  const user = await UserModel.findById(id);

  if (!user) return res.status(404).json({ error: true, message: 'User not found' });

  res.status(200).json(user);
});
