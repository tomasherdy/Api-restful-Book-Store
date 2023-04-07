const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const uri = 'mongodb://localhost/Bookdb';

// Carrega o modelo de dados do livro
const Book = require('./api/models/bookListModel');

// Conexão com o banco de dados
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('DB Connected!');
  })
  .catch((err) => {
    console.log(err.message);
  });

// Configuração do middleware para parsear requisições em JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importa as rotas da API
const routes = require('./api/routes/bookListRoutes');
// Registra as rotas no aplicativo
routes(app);

// Middleware para lidar com rotas não encontradas
app.get('*', (req, res) => {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

// Inicia o servidor
app.listen(port);
console.log('Book list RESTful API server started on: ' + port);
