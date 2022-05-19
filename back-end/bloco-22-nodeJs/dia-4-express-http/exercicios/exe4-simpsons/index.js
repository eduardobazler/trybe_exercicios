const express = require('express');

const app = express();

app.use(express.json());

app.use('/', require('./routes'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Subiu na porta ${PORT}`)
});
