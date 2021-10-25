
const saveUser = async (req, res) => {
  const { username, password } = req.body;
  const result = await LoginService.createUser(username, password);
  console.log(result)
}