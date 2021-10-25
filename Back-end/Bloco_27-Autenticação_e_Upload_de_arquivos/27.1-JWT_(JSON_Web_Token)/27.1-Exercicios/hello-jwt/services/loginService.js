const Joi = require('joi');

const isValidBody = (username, password) => {
  const data = {username, password}
  const schema = Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().alphanum().min(5).required(),
  });

  const { error } = schema.validate(data);
  if (error) return { code: 422, message: error.message };
  return;
}

const createUser = (username, password) => {
  const validate = isValidBody(username, password);
  if (validate.code === 422) return validate;
}