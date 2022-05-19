const express = require('express');
const routes = express.Router();
const simpsons = require('../simpsons');

routes.get("/users", (req, res) => {
  res.status(200).json(simpsons);
});

module.exports = routes;