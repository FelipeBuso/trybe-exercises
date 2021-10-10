const { readFile, writeFile } = require('fs').promises;

async function removeCharacters () {
  const arraySimpsons = await readFile('./simpsons.json', 'utf-8');
  // console.log(arraySimpsons)
  const simpsonsJson = JSON.parse(arraySimpsons);
  // console.log(simpsonsJson)
  const filteredSimpson = simpsonsJson.filter((character) => parseInt(character.id) !== 10 && parseInt(character.id) !== 6);
  console.log(filteredSimpson)

  await writeFile('./simpsonsFiltered.json', JSON.stringify(filteredSimpson));
}

removeCharacters();