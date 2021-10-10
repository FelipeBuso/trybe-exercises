const router = require('express').Router();
const user = require('../models/userModel');


router.post('/', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const checkData = user.isValid(firstName, lastName, email, password);
  if (!checkData) return res.status(400).json({ message: 'Todos os campos são obrigatórios'});
  const checkPass = user.checkPassword(password);
  if (!checkPass) return res.status(400).json({
    error: 'true',
    message: 'O campo "password" deve ter pelo menos 6 caracteres'
  })
  const newUser = await user.insertUser(firstName, lastName, email, password)
  console.log(newUser);
  res.status(200).json(newUser);
});

module.exports = router;