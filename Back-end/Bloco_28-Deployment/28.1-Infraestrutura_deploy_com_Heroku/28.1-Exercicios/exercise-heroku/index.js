const express = require ('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send(`Está vivo na ${PORT} ${process.env.SERVER_ENV || 'não achou'}!!!`);
});

app.listen(PORT, console.log(`rodando na porta: ${PORT}`));