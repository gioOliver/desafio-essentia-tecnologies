# 🚀 TechX - Gerenciador de Tarefas

Aplicação web desenvolvida como desafio técnico para a Essentia Technologies.

O sistema permite o gerenciamento de tarefas (to-do list), com funcionalidades de criação, edição, exclusão e marcação como concluída, além de autenticação de usuários.

---

## 🔗 Repositório

GitHub: https://github.com/gioOliver/desafio-essentia-tecnologies/

---

## 🧠 Tecnologias Utilizadas

### Frontend

* Angular
* TypeScript
* CSS

### Backend

* Node.js
* TypeScript
* Prisma ORM

### Banco de Dados

* MySQL

### Infraestrutura

* Docker
* Docker Compose

---

## ⚙️ Funcionalidades

* Cadastro e login de usuários
* Criação de tarefas
* Edição de tarefas
* Exclusão com confirmação
* Marcar tarefa como concluída
* Separação entre tarefas pendentes e concluídas
* Validação de formulário
* Tratamento de erros do backend

---

## 📦 Requisitos para rodar o projeto

Antes de começar, você precisa ter instalado:

* Git
* Docker
* Docker Compose

### 🔗 Links para download:

* Git: https://git-scm.com/downloads
* Docker: https://www.docker.com/products/docker-desktop

---

## ▶️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/gioOliver/desafio-essentia-tecnologies.git
cd desafio-essentia-tecnologies
```

---

### 2. Acessar a branch do projeto

```bash
git checkout giovanni-oliveira
```

---

### 3. Subir o ambiente com Docker

```bash
docker compose up -d --build
```

---

### 4. Acessar a aplicação

* Frontend: http://localhost:4200
* Backend: http://localhost:3000

---

## 🗄️ Banco de Dados

O banco de dados é criado automaticamente ao subir o container.

As migrations do Prisma são executadas automaticamente na inicialização do backend, garantindo que a estrutura do banco esteja sempre atualizada.

---

## 🔐 Autenticação

O sistema utiliza autenticação baseada em JWT.

O acesso às rotas é controlado no frontend para garantir que:

* usuários não autenticados não acessem o dashboard
* usuários autenticados não retornem à tela de login

---

## ⚠️ Observações Importantes

Para facilitar a execução do projeto durante a avaliação:

* O arquivo `.env` já está incluído no repositório com configurações prontas
* O Docker já está configurado para rodar automaticamente todo o ambiente
* As migrations são executadas automaticamente ao iniciar o backend

🚨 **Importante:**
Essas configurações foram feitas apenas para facilitar a execução do projeto em ambiente de teste.

Em um ambiente de produção, o ideal é:

* não versionar o `.env`
* utilizar variáveis de ambiente seguras
* configurar corretamente credenciais e secrets

---

## 🧩 Estrutura do Projeto

```
/backend
/frontend
/docker-compose.yml
```

---

## 📌 Considerações Finais

O projeto foi desenvolvido com foco em:

* simplicidade
* organização de código
* boa experiência do usuário
* facilidade de execução

---

## 👨‍💻 Autor

Desenvolvido por Giovanni Oliveira
