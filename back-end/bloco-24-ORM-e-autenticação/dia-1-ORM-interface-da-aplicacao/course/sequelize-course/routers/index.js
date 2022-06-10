const express = require('express');
const bookRouters = require('./bookRouters');

const routers = express.Router();

routers.use('/book', bookRouters);

module.exports = routers;