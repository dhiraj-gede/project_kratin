const router = require('express').Router();
const {submitData, getUser} = require('../../controllers/patient.controller');
const auth = require('../../middlewares/auth');
const userValidation = require('../../validation/user.validation');
const validate = require('../../middlewares/validate');

router.get('/:userId', auth,validate(userValidation.getUser),getUser);

router.put('/:userId', auth, validate(userValidation.setData), submitData);
module.exports = router; 