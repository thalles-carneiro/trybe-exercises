const Joi = require('joi');

const connection = require('./connection');

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'any.required': 'O campo {{#label}} é obrigatório',
  'string.min': 'O campo {{#label}} deve ter, pelo menos, {{#limit}} caracteres',
  'string.email': 'Informe um email válido no campo {{#label}}',
});

const isValid = (userData) => userSchema.validate(userData);

const formatUser = ({ id, first_name: firstName, last_name: lastName, email }) => ({
  id,
  firstName,
  lastName,
  email,
})

const create = ({ firstName, lastName, email, password }) => connection.execute(
  'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);',
  [firstName, lastName, email, password],
).then(([result]) => ({ id: result.insertId, firstName, lastName, email }));


const findAll = () => connection.execute('SELECT * FROM users;')
  .then(([results]) => results.map(formatUser));

const findById = async (id) => {
  const user = await connection
    .execute('SELECT * FROM users WHERE id = ?;', [id])
    .then(([result]) => (result.length ? result[0] : null));

  if (!user) return null;

  return formatUser(user);
};

const updateUser = async (id, { firstName, lastName, email, password }) => {
  await connection.execute(
    'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;',
    [firstName, lastName, email, password, id],
  );

  return findById(id);
};

module.exports = {
  isValid,
  create,
  findAll,
  findById,
  updateUser,
};
