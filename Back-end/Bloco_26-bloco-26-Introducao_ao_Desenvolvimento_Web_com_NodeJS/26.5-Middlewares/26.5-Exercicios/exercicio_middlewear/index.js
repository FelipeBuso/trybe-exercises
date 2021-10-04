const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body;
  if ( username.length < 4 || email !== 'email@mail.com' || password.length < 4 || password.length > 8)
    return res.status(400).json({ message: 'invalid data '});
  
  res.status(201).json({ message: 'user created'});
})

app.listen(3000, (req, res) => {
  console.log('Ouvindo porta 3000');
})