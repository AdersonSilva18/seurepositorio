const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/rota', (req, res) => {
  // res.send('Minha primiera rota!')

  axios.get('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    .then(function (response) {
      res.send(response.data)
    })
    .catch(function (error) {
      console.error(error);
    })
    .finally(function () {
    });
})

app.get('/consulta-cep/:cep', (req, res) => {

  const regex = /^[0-9]{5}-[0-9]{3}$/
  const cep = req.params.cep
  if (regex.test(cep)) {
    axios.get(`https://viacep.com.br/ws/${cep}/j\son/`)
      .then(function (response) {
        res.send(response.data)
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(function () {
      });
  } else {
    res.send('Cep invalido').status(400)
  }


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})