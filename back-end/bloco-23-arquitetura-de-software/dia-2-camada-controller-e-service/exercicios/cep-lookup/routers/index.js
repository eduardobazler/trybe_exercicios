const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.use('/ping', controllers.ping);

router.use('/cep', controllers.controllerCep);


module.exports = router;