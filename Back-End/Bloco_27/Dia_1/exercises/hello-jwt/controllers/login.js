const findUser = require('../services/findUser');
const validateUser = require('../validations/validateUser');
const { signContent } = require('../services/auth');

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  const { error } = validateUser({ username, password });
  if (error) return next(error);

  const user = await findUser(username);

  if (!user) {
    return next({ statusCode: 404, message: 'user not found' });
  }

  if (user.username !== username || user.password !== password) {
    return next({ statusCode: 401, message: 'Invalid username or password' });
  }

  const { admin } = user;
  const token = signContent({ username, admin });

  return res.status(200).json({ token });
};