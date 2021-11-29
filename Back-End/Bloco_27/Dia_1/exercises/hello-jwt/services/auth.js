const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const JWT_OPTIONS = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const signContent = ({ username, admin }) => {
  const payload = { username, admin };

  const token = jwt.sign(payload, JWT_SECRET, JWT_OPTIONS);

  return token;
};

module.exports = {
  signContent,
};