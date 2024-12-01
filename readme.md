# Gerenciamento de Campeonatos

Este projeto é um sistema para gerenciar campeonatos e suas edições. Ele permite realizar operações de CRUD (Create, Read, Update e Delete) em campeonatos e associar times como vencedores de edições específicas.

## Funcionalidades

- **Campeonatos:**
  - Criar, listar, editar e excluir campeonatos.
  - Gerenciar edições de campeonatos, incluindo o time vencedor e o ano.

- **Edições dos Campeonatos:**
  - Criar, listar, editar e excluir edições de um campeonato.
  - Associar times como vencedores de edições específicas.

- **Times:**
  - Gerenciar times disponíveis, que podem ser associados às edições.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/) (se aplicável ao projeto)
- Um gerenciador de pacotes como [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/).

## Configuração do Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
Instale as dependências:

bash
Copiar código
npm install
Configure o banco de dados:

Crie um banco de dados no PostgreSQL.
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
env
Copiar código
DB_HOST=localhost
DB_PORT=5432
DB_NAME=seu_banco
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
Execute as migrações para criar as tabelas no banco de dados:

bash
Copiar código
npm run migrate
(Opcional) Inicie o Redis (se necessário para o projeto):

Certifique-se de que o Redis está rodando localmente ou em um servidor remoto.
Executando o Projeto
Inicie o servidor em modo de desenvolvimento:

bash
Copiar código
npm run dev
Ou, para rodar em modo de produção:

bash
Copiar código
npm start
Acesse o sistema no navegador:

arduino
Copiar código
http://localhost:3000
Endpoints da API
Campeonatos
GET /championship - Lista todos os campeonatos.
POST /championship - Cria um novo campeonato.
PUT /championship/:id - Atualiza um campeonato existente.
DELETE /championship/:id - Remove um campeonato.
Edições dos Campeonatos
GET /team_championship/:championshipId - Lista edições de um campeonato específico.
POST /team_championship/:championshipId - Cria uma nova edição de um campeonato.
PUT /team_championship/:id - Atualiza uma edição.
DELETE /team_championship/:id - Remove uma edição.
Times
GET /teams - Lista todos os times disponíveis.