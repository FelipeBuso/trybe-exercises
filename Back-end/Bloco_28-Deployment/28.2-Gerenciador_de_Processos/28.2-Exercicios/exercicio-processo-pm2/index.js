const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000
const { ENVIROMENT } = process.env

app.get('/', (req, res) => {
  res.send(`Rodando no ambiente ${ENVIROMENT}`)
});

app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));