module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({ error: true, message: err.details[0].message });
  }

  console.error(err);

  res.status(500).json({ message: 'Internal server error' });
};