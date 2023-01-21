const Joi = require("joi");
const { password } = require("./custom.validation");


const register = {
    body: Joi.object().keys({
      email: Joi.string().required().regex(/^.+@[a-z]+\.[a-z]{2,3}$/),
      password: Joi.string().required().custom(password),
      name: Joi.string().required(),
      userType: Joi.string().valid("admin", "patient", "doctor")
    })
  };

  const login = {
    body: Joi.object().keys({
      email: Joi.string().required().regex(/^.+@[a-z]+\.[a-z]{2,3}$/),
      password: Joi.string().required().custom(password)
    })
  };

  module.exports = {
    register,
    login,
  };