module.exports = (req, _res, next) => {
  const { admin } = req.user;

  if (admin) {
    return next();
  }

  return next({ statusCode: 403, message: 'Restricted access' });
};
