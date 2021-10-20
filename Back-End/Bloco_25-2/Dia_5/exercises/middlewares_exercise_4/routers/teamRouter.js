const router = require('express').Router();
const rescue = require('express-rescue');

const { readContentFile, writeContentFile } = require('../helpers/readWriteFile');
const { isValid } = require('../middlewares/validations');
const PATH_FILE = './teams.json';

router.get(
  '/',
  rescue(
    async (_req, res, next) => {
      const teams = await readContentFile(PATH_FILE);

      if(!teams) return next({ code: 404, message: 'File not found' });

      res.status(200).json({ teams });
    },
  ),
);

router.post(
  '/',
  isValid,
  rescue(
    async(req, res, next) => {
      const newTeam = { ...req.body };
      const team = await writeContentFile(PATH_FILE, newTeam);

      if(!team) return next({ code: 500, message: 'Error in writing file' });

      res.status(200).json({ team });
    },
  ),
);

module.exports = router;
