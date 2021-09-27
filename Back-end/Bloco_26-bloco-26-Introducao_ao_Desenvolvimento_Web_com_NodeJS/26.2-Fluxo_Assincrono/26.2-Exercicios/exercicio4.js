const { readFile } = require('fs').promises;

function printNames(data) {
  data.map((character) => console.log(`${character.id} - ${character.name}`));
}


readFile('./simpsons.json', 'utf-8')
  .then(result => JSON.parse(result))
  .then(data => printNames(data))
  .catch((e) => console.log(e.message));
