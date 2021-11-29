const findUser = require('../services/findUser');
const createUser = require('../services/createUser');
const validateUser = require('../validations/validateUser');
const { signContent } = require('../services/auth');

const randomAuthAdmin = () => {
  const rndNum = Math.floor(Math.random() * 100);

  if (rndNum > 50) return true;
  return false;
};

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  const { error } = validateUser({ username, password });
  if (error) return next(error);

  const user = await findUser(username);

  if (user) {
    return next({ statusCode: 409, message: 'user already exists' });
  }

  const admin = randomAuthAdmin();

  await createUser({ username, password, admin });

  const token = signContent({ username, admin });

  return res.status(200).json({ token });
};