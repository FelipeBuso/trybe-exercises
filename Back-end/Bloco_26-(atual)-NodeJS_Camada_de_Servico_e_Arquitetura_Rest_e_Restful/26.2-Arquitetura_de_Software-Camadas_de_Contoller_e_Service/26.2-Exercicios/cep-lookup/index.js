const express = require('express');
const bodyParser = require('body-parser');

const pingRoute = require('./routes/pingRoute');
const cepRoute = require('./routes/cepRoute');

const { connectionMySQL } = require('./models/connectionMySQL');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use('/ping', pingRoute);

app.use('/cep', cepRoute);

app.listen(PORT, () => console.log(`Ouvindo porta ${PORT}`))