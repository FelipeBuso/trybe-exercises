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
  const simpsons = await getSimpsons()

  if (!simpsons) return res.status(500).json('Internal Server Error')
  
  res.status(200).json(simpsons);
})

app.listen(3000, () => console.log('Aplicação ouvindo porta 3000'));