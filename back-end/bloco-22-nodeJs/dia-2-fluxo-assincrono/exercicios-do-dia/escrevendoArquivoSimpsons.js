const axios = require('axios');

axios.get('https://assets.app.betrybe.com/back-end/nodejs/async-flow/simpsons-94f8eb570f2ea830462ee2375ded177b.json')
  .then(({ data }) => console.log(data));