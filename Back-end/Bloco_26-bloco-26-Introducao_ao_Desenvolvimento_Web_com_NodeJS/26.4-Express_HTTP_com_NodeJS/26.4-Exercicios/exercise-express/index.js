const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs').promises

const app = express();

app.use(bodyParser.json());

async function getSimpsons() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const readSimpsons = JSON.parse(simpsons);

  return readSimpsons;
}

async function updateSimpsons(newSimpsons) {
  await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
};


app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello, ${name}`});
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age < 18 ) return res.status(401).json({ message: 'Unauthorized' });

  res.status(200).json({ message: `Hello, ${name}`});
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ message: `Seu nome é ${name} e tem ${age} anos de idade`});

});

app.get('/simpsons', async (req, res) => {
  const simpsons = await getSimpsons();

  if (!simpsons) return res.status(500).json('Internal Server Error');
  
  res.status(200).json(simpsons);
})

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;

  const simpsons = await getSimpsons();
  if (!simpsons) return res.status(500).json('Internal Server Error');

  const findSimpson = simpsons.find((s) => s.id === id );
  if(!findSimpson) return res.status(404).json({ message: 'simpson not found'});

  res.status(200).json(findSimpson);

})

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;

  const simpsons = await getSimpsons();
  if (!simpsons) return res.status(500).send('Internal Server Error')

  const checkSimpson = simpsons.find((s) => s.id.includes(id));
  if(checkSimpson) return res.status(409).json({ message: "id already exist"});

  const newSimpson = { 'id': id, 'name': name };
  simpsons.push(newSimpson);
  updateSimpsons(simpsons);

  res.status(204).end();
})

app.listen(3000, () => console.log('Aplicação ouvindo porta 3000'));