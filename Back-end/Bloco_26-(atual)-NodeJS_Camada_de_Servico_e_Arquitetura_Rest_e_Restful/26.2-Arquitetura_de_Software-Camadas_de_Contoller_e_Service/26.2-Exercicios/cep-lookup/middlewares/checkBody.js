const Joi = require('joi');

const checkBody = (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body
  const data = {cep, logradouro, bairro, localidade, uf};
  const schema = Joi.object().keys({
    cep: Joi.string().min(8).max(9).required(),
    logradouro: Joi.string().required(),
    bairro: Joi.string().required(),
    localidade: Joi.string().required(),
    uf: Joi.string().min(2).max(2).required()
  })
  const { error, result } = schema.validate(data);
  console.log(result)
  if(error) return res.status(400).json({ "error": { "code": "invalidData", "message": `${error.message}` } })

  next()
}

module.exports = { checkBody };