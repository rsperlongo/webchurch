const express = require('express');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/churchmanagament')
.then(() => console.log('connection successfull'))
.catch((err) => console.log(err));


const app = express();

app.get('/', (req, res) => {
  res.send('Está funcionando! :)')
})

app.listen(3000, () => {
  console.log('rodando na porta 3000');
})
