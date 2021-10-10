const { readFile } = require('fs').promises;

async function filterSimpsonId (idUser) {
  const arraySimpsons = await readFile('./simpsons.json', 'utf-8');
  // console.log(arraySimpsons)
  const simpsonsJson = JSON.parse(arraySimpsons);
  // console.log(simpsonsJson)
  const filteredSimpson = simpsonsJson.find((character) => parseInt(character.id) === idUser);
  // console.log(filteredSimpson)

  if (!filteredSimpson) {
    throw new Error("id não encontrado");
  }
  return filteredSimpson;
}

filterSimpsonId(15)
  .then((result) => console.log(result))
  .catch((e) => console.log(e.message));