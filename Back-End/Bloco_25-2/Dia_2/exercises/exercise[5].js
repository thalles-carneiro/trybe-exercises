const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const fileNames = await Promise.all(
    strings.map((string, index) => {
      fs.writeFile(`./file${index + 1}.txt`, string, { flag: 'wx' });
      return `./file${index + 1}.txt`;
    })
  );

  const filesContent = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  );
  const newFileContent = filesContent.join(' ');

  await fs.writeFile('./fileAll.txt', JSON.stringify(newFileContent), { flag: 'wx' });
}
// arrayToFile();
