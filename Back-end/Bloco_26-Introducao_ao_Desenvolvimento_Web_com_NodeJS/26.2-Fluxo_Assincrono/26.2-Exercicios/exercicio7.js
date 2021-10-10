const { readFile, writeFile } = require('fs').promises;

async function newArray () {
  const arraySimpsons = await readFile('./simpsons.json', 'utf-8');
  // console.log(arraySimpsons)
  const simpsonsJson = JSON.parse(arraySimpsons);
  // console.log(simpsonsJson)
  const filteredSimpson = simpsonsJson.filter((character) => ["1","2","3","4"].includes(character.id));
  console.log(filteredSimpson)

  await writeFile('./simpsonsFamily.json', JSON.stringify(filteredSimpson));
}
newArray()