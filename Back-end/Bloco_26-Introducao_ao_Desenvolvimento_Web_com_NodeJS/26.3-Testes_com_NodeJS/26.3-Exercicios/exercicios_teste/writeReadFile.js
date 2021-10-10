const { writeFile } = require('fs').promises;

function writeReadFile(file, text) {
  writeFile(`./${file}`, text)
    .then(() => 'arquivo salvo com sucesso')
    .catch((e) => e.message);
}

module.exports = { writeReadFile };

// writeReadFile('teste.txt', 'teste de função');

