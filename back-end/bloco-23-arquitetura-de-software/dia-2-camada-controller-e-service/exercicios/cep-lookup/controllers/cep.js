const express = require('express');
const validateCep = require('../middlewares/validateCep');
const router = express.Router();

router.get('/:cep', validateCep, (req, res) => {
  res.status(200).json({ message: "tudo certo!" })
});

module.exports = router;