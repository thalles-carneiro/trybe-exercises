module.exports = (req, res, _next) => {
  const { username, admin } = req.user;

  return res.status(200).json({ username, admin });
};