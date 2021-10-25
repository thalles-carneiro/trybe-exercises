const Joi = require('joi');
const { ObjectId } = require('mongodb');

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

const formatUser = (userData) => {
  const { _id, password, ...user } = userData;
  const formattedUser = { id: _id, ...user };
  return formattedUser;
};

const create = ({ firstName, lastName, email, password }) =>
  connection()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))
    .then((user) => ({ id: user.insertedId, firstName, lastName, email }));

const findAll = () =>
  connection()
    .then((db) => db.collection('users').find().toArray())
    .then((users) => users.map(formatUser));

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const user = await connection()
    .then((db) => db.collection('users').findOne(ObjectId(id)));

  if (!user) return null;

  return formatUser(user);
}

const updateUser = async (id, { firstName, lastName, email, password }) => {
  if (!ObjectId.isValid(id)) return null;

  const updatedUser = await connection()
    .then((db) => {
      const userId = new ObjectId(id);
      const newData = { firstName, lastName, email, password };
      return db.collection('users')
        .findOneAndUpdate({ _id: userId }, { $set: newData }, { returnDocument: 'after' })
        .then((result) => result.value);
    });

  if (!updatedUser) return null;

  return formatUser(updatedUser);
};

module.exports = {
  isValid,
  create,
  findAll,
  findById,
  updateUser,
};
