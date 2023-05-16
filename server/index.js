const express = require('express')
const app = express();
const port = 8000

// localhost:8000

app.get('/', (req, res) => {
  res.send('Sejam todos bem vindos ao servidor!')
})

app.listen(port, () => (
  console.log('Servidor iniciado com Sucesso!')
))