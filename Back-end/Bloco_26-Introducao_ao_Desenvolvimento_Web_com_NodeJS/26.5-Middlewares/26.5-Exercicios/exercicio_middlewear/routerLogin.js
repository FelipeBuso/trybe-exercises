const router = require('express').Router();
const { genRandomToken } = require('./genToken');

router.post('/', (req, res) => {
  const { email, password } = req.body;
  if (email !== 'email@mail.com' || password.length < 4 || password.length > 8){
    return res.status(400).json({ message: "email ou password is incorrect" })
  }
  const generateToken = genRandomToken(12);
  res.status(200).json({ "token": generateToken });
})

module.exports = router;
