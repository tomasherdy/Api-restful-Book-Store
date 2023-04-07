# Api-restful-Book-Store

Este é um exemplo de uma API Restful para uma loja de livros. Ele permite que os usuários gerenciem as informações de seus livros, como título, autor, descrição e preço.

## Como Usar

1. Clone este repositório no seu computador:
git clone https://github.com/tomasherdy/Api-restful-Book-Store.git

2. Certifique-se de ter o Python instalado no seu sistema.

3. Instale as dependências do projeto:
pip install -r requirements.txt

4. Inicie o servidor da API com o comando:
python app.py

5. Agora, você pode fazer solicitações HTTP para a API usando ferramentas como cURL ou Postman. Aqui está um exemplo de como criar um novo livro:

curl -X POST
http://localhost:5000/books
-H 'Content-Type: application/json'
-d '{
"title": "Livro de Teste",
"author": "Autor de Teste",
"description": "Este é um livro de teste.",
"price": 9.99
}'


6. Você também pode consultar, atualizar e excluir informações de livros usando solicitações HTTP GET, PUT e DELETE. Veja a documentação da API para mais detalhes.

## Contribuindo

Sinta-se livre para contribuir com este projeto. Você pode abrir uma issue relatando um bug ou sugerindo uma nova funcionalidade. Também aceitamos pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.
