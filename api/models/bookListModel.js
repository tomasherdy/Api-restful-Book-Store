// Importando a biblioteca mongoose
const mongoose = require('mongoose');

// Definindo um esquema para o modelo de livros utilizando a biblioteca mongoose
const Schema = mongoose.Schema;
const BookSchema = new Schema({

// Definindo o campo nome do livro
name: {
type: String,
required: 'Enter book name' // campo obrigatório
},

// Definindo o campo data de criação do livro
Created_date: {
type: Date,
default: Date.now // data atual como padrão
},

// Definindo o campo status do livro
status: {
type: [{
type: String,
enum: ['pending', 'ongoing', 'completed'] // permitindo somente os valores do array
}],
default: ['pending'] // valor padrão é "pending"
}
});

// Exportando o modelo de livros criado
module.exports = mongoose.model('Books', BookSchema);
