const fs = require('fs').promises;
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => { cb(null, 'uploads'); },
  filename: (_req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    return cb(null, fileName);
  },
});

const fileFilter = async (req, file, cb) => {
  if (!/\.png$/.test(file.originalname)) {
    req.fileValidationError = true;
    return cb(null, false);
  }

  const files = await fs.readdir(`${__dirname.replace(/\/middlewares/, '/uploads')}`);
  const fileRepeated = files.some((f) => f.includes(file.originalname));

  if (fileRepeated) {
    req.fileDuplicated = true;
    return cb(null, false);
  }

  return cb(null, true);
};

module.exports = multer({ storage, fileFilter });