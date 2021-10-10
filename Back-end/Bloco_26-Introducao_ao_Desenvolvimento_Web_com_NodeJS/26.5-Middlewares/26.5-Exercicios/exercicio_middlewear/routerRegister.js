const router = require('express').Router();

router.post('/', (req, res) => {
  const { username, email, password } = req.body;
  if ( username.length < 4 || email !== 'email@mail.com' || password.length < 4 || password.length > 8)
    return res.status(400).json({ message: 'invalid data '});
  
  res.status(201).json({ message: 'user created'});
});

module.exports = router;