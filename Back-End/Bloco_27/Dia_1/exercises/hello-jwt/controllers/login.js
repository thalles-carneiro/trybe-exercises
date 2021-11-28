const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const JWT_OPTIONS = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

module.exports = (req, res, next) => {
  const { username, password } = req.body;

  const { error } = Joi.object({
    username: Joi.string().alphanum().min(5).required(),
    password: Joi.string().min(5).required(),
  }).validate({ username, password });

  if (error) {
    return next(error);
  }

  let admin = false;
  if (username === 'admin' && password === 's3nh4S3gur4???') {
    admin = true;
  }

  const payload = { username, admin };

  const token = jwt.sign(payload, JWT_SECRET, JWT_OPTIONS);

  return res.status(200).json({ token });
};