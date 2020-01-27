![dafne-logo](https://user-images.githubusercontent.com/47486908/73130952-16be8e80-3fe1-11ea-992e-037efbe70422.png)

# Dafne Back-end

Dafne é uma aplicação web que permite que donos de pequenos mercados controlem o fluxo de caixa de forma simples e intuitiva. Inicialmente esta aplicação será testada em uma padaria, para que possam vir novas ideias no decorrer do uso e insights de parte do usuário. Este back-end será de grande importancia para aplicação, pois ele que ira fazer a comunicação do front-end com o banco de dados.

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-Pré-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-rotas">Rotas</a>
</p>

## :rocket: Tecnologias
-  [Node.js](https://nodejs.org)
-  [Express](https://expressjs.com/)
-  [express-async-errors](https://github.com/davidbanham/express-async-errors)
-  [Cors](https://github.com/expressjs/cors)
-  [Dotenv](https://github.com/motdotla/dotenv/)
-  [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
-  [Youch](https://github.com/poppinss/youch)
-  [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
-  [Nodemon](https://nodemon.io/)
-  [Prettier](https://prettier.io/)
-  [Sucrase](https://github.com/alangpierce/sucrase)
-  [MongoDB](https://mongodb.com)
-  [Mongoose](https://mongoosejs.com/)
-  [Axios](https://github.com/axios/axios)


## :warning: Pré-requisitos
Para instalar essa aplicação é preciso ter o [Yarn](https://yarnpkg.com), o [Node na versão LTS](https://nodejs.org/en/) e o [git](https://git-scm.com) instalados na sua máquina.

## :information_source: Instalação
```bash
# Clone esse repositorio
$ git clone https://github.com/fabriciodanioj/dafne-backend

# Entre na pasta do projeto
$ cd dafne-backend

# Instale as dependencias
$ yarn install

# Inicie o servidor que irá rodar na porta 3333
$ yarn dev
```

## :memo: Rotas

### base_url -> `http://localhost:3333`

Rotas que não necessita estar autenticado
- [x] Criação de usuarios
- POST `/admin/user/create` -> Cria um novo usuário
- DELETE `/admin/user/delete` -> Deleta um usuário
- GET `/admin/user/list` -> Lista os usuarios criados

- [x] Autenticação
- POST `/session` -> Faz o login e recebe o token jwt para as rotas autenticadas

---

Rotas que necessita estar autenticado

- [x] Produtos
- POST `/user/product/create` -> Cria um novo produto
- UPDATE `/user/product/update` -> Atualiza um produto
- DELETE `/user/product/delete` -> Deleta um produto
- GET `/user/product/list` -> Lista os produtos criados
- GET `/user/product/search` -> Procura por um produto

- [x] Dias
- POST `/user/day/create` -> Cria um novo dia
- GET `/user/day/show` -> Mostra um dia especifico
- GET `/user/day/show/all` -> Mostra todos os dias
- GET `/user/day/show/range` -> Mostra os dias dentro de um intervalo

- [x] Vendas
- POST `/user/order/create` -> Cria uma nova compra
- GET `/user/order/show` -> Mostra uma compra especifica
- GET `/user/order/show/perday` -> Mostra todas as compras de um dia especifico
- DELETE `/user/order/delete` -> Deleta uma venda

---
## Meta
Feito com ♥ por Fabricio Dani :wave: [LinkedIn!](https://www.linkedin.com/in/fabricio-dani-373469176/)

Distribuido sobre licensa do MIT. Veja [LICENSE](https://github.com/fabriciodanioj/dafne-backend/blob/master/LICENSE) para mais informações.

[https://github.com/fabriciodanioj](https://github.com/fabriciodanioj)
