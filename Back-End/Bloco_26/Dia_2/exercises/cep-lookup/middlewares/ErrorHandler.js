module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res
      .status(400)
      .json({ error: { code: 'invalidData', message: err.details[0].message } });
  }

  if (err.code) {
    const statusByErrorCode = {
      notFound: 404,
      invalidData: 400,
      alreadyExists: 409,
    };
  
    const status = statusByErrorCode[err.code] || 500;
  
    return res.status(status).json({ error: { message: err.message } });
  }

  console.error(err);
  res.status(500).json({ error: { code: 'Internal', message: 'Internal server error' } });
};