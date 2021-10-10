const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => { console.log(`Ouvindo a porta ${PORT}`)});