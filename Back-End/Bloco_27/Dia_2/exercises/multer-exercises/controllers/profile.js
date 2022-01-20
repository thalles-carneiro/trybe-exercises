const { getProfileData, saveProfileData, getProfileById } = require('../helpers/profile');

const getProfile = (req, res, next) => {
  const { id } = req.params;

  const profile = getProfileById(id);

  if (!profile) {
    next({ statusCode: 404, message: 'Perfil não encontrado' });
  }

  return res.status(200).json(profile);
};

const profile = (req, res, _next) => {
  const { name, email, password, bio } = req.body;
  const { file: { filename } } = req;

  const profileData = {
    id: filename,
    name,
    email,
    password,
    bio,
  };

  const profiles = getProfileData();
  profiles.push(profileData);
  saveProfileData(profiles);
  return res.status(200).json({ profileData });
};

module.exports = {
  profile,
  getProfile,
};