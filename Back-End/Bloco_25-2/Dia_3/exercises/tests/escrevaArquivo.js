const fs = require('fs');

function escrevaArquivo(nomeArquivo, conteudoArquivo) {
  fs.writeFileSync(`./${nomeArquivo}`, conteudoArquivo);
  return 'ok';
}

module.exports = escrevaArquivo;
