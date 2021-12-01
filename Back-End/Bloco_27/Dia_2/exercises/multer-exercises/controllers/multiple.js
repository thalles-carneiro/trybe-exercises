module.exports = (req, res, _next) => {
  const { files } = req;
  const multipleFiles = files.map((file) => (
    { file: file.originalname, url: `http://localhost:3000/${file.path}` }
  ));

  return res.status(200).json(multipleFiles);
};