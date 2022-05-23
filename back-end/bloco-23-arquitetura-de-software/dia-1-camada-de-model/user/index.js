const express = require('express');
const routes = require('./app/Routes');

const app = express();

app.use(express.json());

app.use('/users', routes.userRoute);

const PORT = 3000;
app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });