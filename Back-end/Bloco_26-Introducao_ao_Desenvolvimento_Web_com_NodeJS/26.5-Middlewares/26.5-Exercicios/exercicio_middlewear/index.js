const express = require('express');
const bodyParser = require('body-parser');

const routerRegister = require('./routerRegister');
const routerLogin = require('./routerLogin');


const app = express();

app.use(bodyParser.json());

app.use('/user/register', routerRegister);
app.use('/user/login', routerLogin);

app.listen(3000, (req, res) => {
  console.log('Ouvindo porta 3000');
})