const jwt = require('jsonwebtoken');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({ statusCode: 401, message: 'Token not found' });
  }

  try {
    const { JWT_SECRET } = process.env;
    const { username, admin } = jwt.verify(authorization, JWT_SECRET);
    req.user = { username, admin };
    return next();
  } catch (err) {
    return next({ ...err, statusCode: 401 });
  }
};
