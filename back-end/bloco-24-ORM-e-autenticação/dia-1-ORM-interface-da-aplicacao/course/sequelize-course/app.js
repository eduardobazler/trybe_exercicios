const express = require('express');
const routers = require('./routers');


const app = express();

app.use(express.json());

app.use(routers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Runing at port ', PORT));