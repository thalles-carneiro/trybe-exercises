const fs = require('fs').promises;

const readContentFile = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8').then(JSON.parse);
    return content;
  } catch(err) {
    return null;
  }
};

const writeContentFile = async (path, newContent) => {
  try {
    const oldContent = await readContentFile(path);

    oldContent.push(newContent);
    await fs.writeFile(path, JSON.stringify(oldContent));

    return newContent;
  } catch(err) {
    return null;
  }
};

module.exports = { readContentFile, writeContentFile };
