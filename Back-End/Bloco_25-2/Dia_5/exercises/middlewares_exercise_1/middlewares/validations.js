const isValidUsername = (req, res, next) => {
  const { username } = req.body;

  if(!username || username.length <= 3) {
    next('Erro');
  }

  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\w+@\w+\.com/;

  if(!emailRegex.test(email)) {
    next('Erro');
  }

  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;
  const passwordRegex = /^\d+$/;

  if(!passwordRegex.test(password) || password.length <= 3 || password.length >= 9) {
    next('Erro');
  }

  next();
};

module.exports = {
  isValidUsername,
  isValidEmail,
  isValidPassword,
};
