const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => { cb(null, 'uploads'); },
});

module.exports = multer({ storage });