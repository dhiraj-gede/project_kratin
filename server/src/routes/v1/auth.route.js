const router = require('express').Router();
const validate = require("../../middlewares/validate");
const authValidation = require("../../validation/auth.validation");
const userController = require('../../controllers/auth.controller');

router.post('/register',validate(authValidation.register), userController.register);

router.post('/login', validate(authValidation.login) ,userController.login);
module.exports = router; 