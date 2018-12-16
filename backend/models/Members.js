const mongoose = require('mongoose');

const MembersSchema = new mongoose.Schema({

  id: String,
  nome: String,
  telefone: String,
  email: String,
  endereco: String,
  bairro: String,
  cidade: String,
  nascimento: String,
})

module.exports = mongoose.model('Members', MembersSchema);
