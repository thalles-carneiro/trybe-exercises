module.exports = (req, res, _next) => {
  if (req.fileValidationError) {
    return res.status(403).json({ error: { message: 'Extension must be `png`' } });
  }

  if (req.fileDuplicated) {
    return res.status(409).json({ error: { message: 'File already exists' } });
  }

  if (req.file) {
    return res.status(200).json({ message: 'Arquivo salvo com sucesso' });
  }

  return res.status(204).json('Erro ao salvar o arquivo');
};