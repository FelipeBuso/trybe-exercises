const express = require('express');

const app = express();

const { PORT } = process.env;

app.get('/', (req, res) => {
  res.send(`Está vivo na porta ${PORT}!!!`)
});

app.listen(PORT, () => `logado na porta ${PORT}`);