const router = require('express').Router();
const crypto = require('crypto');

const {
  isValidUsername,
  isValidEmail,
  isValidPassword
} = require('../middlewares/validations');

router.post(
  '/register',
  isValidUsername,
  isValidEmail,
  isValidPassword,
  (_req, res) => res.status(201).json({ message: 'User created' }),
  (_err, _req, res, _next) => res.status(400).json({ message: 'Invalid data' }),
);

router.post(
  '/login',
  isValidEmail,
  isValidPassword,
  (_req, res) => {
    const token = crypto.randomBytes(6).toString('hex');
    res.status(200).json({ token });
  },
  (_err, _req, res, _next) => res.status(400).json({ message: 'Email or Password is incorrect' }),
);

module.exports = router;
