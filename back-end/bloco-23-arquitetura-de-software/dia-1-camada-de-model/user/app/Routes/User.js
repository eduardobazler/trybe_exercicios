const express = require('express');
const userModel = require('../models/User');

const userRoute = express.Router();

userRoute.get('/', async (req, res)  => {
  const dataUsers = await userModel.getAll();
  res.status(200).json(dataUsers);
});

userRoute.post('/', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userInserted = await userModel.setUser({ firstName, lastName, email, password });

  res.status(200).json(userInserted);

})

module.exports = userRoute;
