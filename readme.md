## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [MySql](https://www.mysql.com/)
- Um gerenciador de pacotes como [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/).

## Configuração do Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/KauamScalzer/football-backend.git
   cd football-backend

2. Instale as dependências:
    ```bash
    npm install

3. Configure o banco de dados:
Crie um banco de dados no MySQL.
Edite o arquvio .env na raiz do projeto com as seguintes variáveis:
    ```bash
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=seu_banco
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha

4. Inicie o projeto:
    ```bash
    npm run start

5. Acesse a aplicação:
    ```bash
    http://localhost:3000