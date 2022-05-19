const express = require('express');
const middlewares = require('./middlewares/index.js')

const app = express();
app.use(express.json());

app.use(middlewares.validadeLength);
app.post('/sales', (req, res) => (
    res.status(201).json({ message: 'Tudo certo!'})
));

app.use(middlewares.errorHandler);

app.listen(3001);

