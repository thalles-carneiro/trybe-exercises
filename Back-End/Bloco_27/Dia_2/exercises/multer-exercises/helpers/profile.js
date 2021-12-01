const fs = require('fs');

const FILE_PATH = `${__dirname}/../profiles.json`;

const getProfileData = () => {
  const fileText = fs.readFileSync(FILE_PATH, 'utf-8');
  return JSON.parse(fileText);
};

const saveProfileData = (profiles) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(profiles), 'utf-8');
};

const getProfileById = (id) => {
  const profiles = getProfileData();
  const profile = profiles.find((p) => p.id === id);
  return profile;
};

module.exports = {
  getProfileData,
  saveProfileData,
  getProfileById,
};