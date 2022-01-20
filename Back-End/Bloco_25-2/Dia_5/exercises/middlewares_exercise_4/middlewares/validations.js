const isValid = (req, _res, next) => {
  const { name, initials, country } = req.body;
  const nameRegex = /^.{6,}$/;
  const initialsRegex = /^[A-Z]{1,3}$/;
  const countryRegex = /^.{4,}$/;

  if(
    !name || !nameRegex.test(name) ||
    !initials || !initialsRegex.test(initials) ||
    !country || !countryRegex.test(country)
  ) {
    next({ code: 400, message: 'Invalid data' });
  }

  next();
};

module.exports = { isValid };
