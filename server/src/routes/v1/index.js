const router = require('express').Router();
const authRouter = require('./auth.route');
const patientRouter = require('./patient.route');

router.use('/auth', authRouter);
router.use('/patient', patientRouter);
module.exports = router;