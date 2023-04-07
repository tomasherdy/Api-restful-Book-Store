const mongoose = require('mongoose'),
Book = mongoose.model('Books');

// list_all_books
exports.list_all_books = (req, res) => {
  // Procura todos os livros no banco de dados
  Book.find({})
    .exec() // executa a consulta
    .then(books => {
      // retorna os livros em formato JSON
      res.json(books);
    })
    .catch(err => {
      // retorna o erro caso ocorra algum problema com a consulta
      res.status(500).send(err);
    });
};

// create_a_book
exports.create_a_book = (req, res) => {
  // cria um novo objeto livro com os dados enviados pelo usuário
  let new_book = new Book(req.body);
  // salva o livro no banco de dados
  new_book.save()
    .then(book => {
      // retorna o livro criado em formato JSON
      res.json(book);
    })
    .catch(err => {
      // retorna o erro caso ocorra algum problema ao salvar o livro
      res.status(500).send(err);
    });
};

// read_a_book
exports.read_a_book = (req, res) => {
  // procura um livro pelo seu ID no banco de dados
  Book.findById(req.params.bookId)
    .exec() // executa a consulta
    .then(book => {
      // retorna o livro em formato JSON, caso seja encontrado
      if (!book) {
        return res.status(404).send({ message: 'Book not found' });
      }
      res.json(book);
    })
    .catch(err => {
      // retorna o erro caso ocorra algum problema com a consulta
      res.status(500).send(err);
    });
};

// update_a_book
exports.update_a_book = (req, res) => {
  // atualiza um livro pelo seu ID no banco de dados
  Book.findOneAndUpdate(
    { _id: req.params.bookId }, // procura pelo ID do livro
    req.body, // atualiza os dados do livro com os dados enviados pelo usuário
    { new: true } // retorna o livro atualizado
  )
    .exec() // executa a consulta
    .then(book => {
      // retorna o livro atualizado em formato JSON, caso seja encontrado
      if (!book) {
        return res.status(404).send({ message: 'Book not found' });
      }
      res.json(book);
    })
    .catch(err => {
      // retorna o erro caso ocorra algum problema com a consulta
      res.status(500).send(err);
    });
};

// delete_a_book
exports.delete_a_book = (req, res) => {
  // deleta um livro pelo seu ID no banco de dados
  Book.findOneAndDelete(
    { _id: req.params.bookId } // procura pelo ID do livro
  )
    .exec() // executa a consulta
    .then(book => {
      // retorna uma mensagem de sucesso em formato JSON, caso o livro seja encontrado e deletado
      if (!book) {
        return res.status(404).send({ message: 'Book not found' });
      }
      res.json({ message: 'Book successfully deleted' });
    })
    .catch(err => {
      // retorna o erro caso ocorra algum problema com a consulta
      res.status(500).send(err);
    });
};
