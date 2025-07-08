# Projeto Node-Auth

Sistema simples de autenticação com cadastro e login de usuários, utilizando:

- Backend Node.js + Express  
- Banco de dados PostgreSQL rodando via Docker  
- Frontend simples em HTML, CSS e JavaScript puro  
- Organização modular de rotas  

---

## 🚀 Funcionalidades

- Cadastro de usuários (`/api/register`)  
- Login de usuários (`/api/login`)  
- Listagem de usuários (`/api/users`)  
- Frontend para login, registro e dashboard  
- Backend e frontend integrados no mesmo projeto  
- Banco PostgreSQL isolado via Docker  

---

## 📁 Estrutura do projeto

```
node-auth/
├── docker-compose.yml
├── .env
├── package.json
├── src/
│   ├── db.js
│   ├── index.js
│   └── routes/
│       ├── auth/
│       │   ├── login.js
│       │   └── register.js
│       ├── auth.js
│       ├── users/
│       │   └── list.js
│       └── users.js
├── public/
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── auth.js
│       └── main.js
├── .gitignore
└── README.md
```

---

## 🔧 Tecnologias utilizadas

- Node.js 22.x  
- Express.js  
- PostgreSQL (via Docker)  
- bcrypt para hash de senhas  
- JavaScript, HTML, CSS para frontend simples  

---

## 💻 Como rodar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/node-auth.git
cd node-auth
```

### 2. Criar o arquivo `.env` (baseado no `.env.example`)

```env
DB_USER=user
DB_PASS=password
DB_NAME=authdb
DB_HOST=localhost
DB_PORT=5432
```

### 3. Rodar o PostgreSQL com Docker

```bash
docker-compose up -d
```

### 4. Instalar dependências do Node.js

```bash
npm install
```

### 5. Rodar o backend

```bash
npx nodemon src/index.js
```

### 6. Acessar o frontend no navegador

- http://localhost:3000/login.html  
- http://localhost:3000/register.html  
- http://localhost:3000/dashboard.html (após login)  

---

## 📝 API Endpoints

| Método | Endpoint      | Descrição                |
|--------|---------------|--------------------------|
| POST   | /api/register | Registrar novo usuário   |
| POST   | /api/login    | Login de usuário         |
| GET    | /api/users    | Listar todos os usuários |

---

## ⚙️ Configuração do banco

O banco é configurado automaticamente no container Docker.  
Se quiser criar a tabela manualmente, use o SQL:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

---

## 📌 Observações

- Senhas são armazenadas com hash usando bcrypt  
- A autenticação não usa JWT (pode ser implementado como evolução)  
- Frontend é simples, sem frameworks, ideal para aprendizado  

---

## 📚 Próximos passos

- Adicionar autenticação com JWT  
- Proteger rotas com middleware  
- Melhorar UI com Bootstrap ou React  
- Testes automatizados com Jest  
- Dockerizar o backend para deploy completo  

---

## 🤝 Contribuição

Pull requests são bem-vindos!  
Para grandes mudanças, abra uma issue primeiro para discutir.  

---

## 📄 Licença

[MIT](LICENSE)
