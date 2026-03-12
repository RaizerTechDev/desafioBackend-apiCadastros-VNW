8![Banner](https://capsule-render.vercel.app/api?type=waving&color=0:0f2027,100:2c5364&height=180&section=header&text=API%20Voluntários%20da%20Saúde&fontSize=35&fontColor=ffffff&animation=fadeIn)


# 🩺 API de Cadastro de Médicos e Dentistas Voluntários

![Node](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Framework-000000?logo=express)
![Postman](https://img.shields.io/badge/Postman-API%20Testing-FF6C37?logo=postman)
![Vercel](https://img.shields.io/badge/Vercel-Serverless-000000?logo=vercel)


☁️ Deploy da API

**🔗 [Clique aqui e conheça a API-Cadastro Voluntários!!](https://desafio-medicos-dentistas-solidario-api.vercel.app/cadastros)**

API Backend desenvolvida com **Node.js** e **Express** para demonstrar a criação de um sistema de **cadastro de profissionais da saúde voluntários**, como **Médicos e Dentistas**, interessados em participar de **ações sociais**.

Projeto desenvolvido como desafio do curso **VNW (Vai Na Web)** com orientação dos mestres **Jeferson Santos** e **Vinicius Bispo**.

<br>

---

<!--
# 🎥 Demonstração

![Demo da API](./assets/img/apicadastros.gif)

<br>


---

-->


## **📖 Sobre o Projeto**

Esta aplicação consiste em uma **API REST** responsável por registrar profissionais voluntários que desejam colaborar em projetos sociais de saúde**.

A API permite:

- cadastrar profissionais voluntários
- listar profissionais cadastrados

Os dados são armazenados em **memória utilizando um array**, simulando um banco de dados simples.

Cada cadastro possui os seguintes atributos:

| Campo | Descrição |
|------|------|
| id | identificador único |
| nome | nome do profissional |
| email | email de contato |
| telefone | telefone com 10 ou 11 números |
| mensagem | mensagem opcional |

<br>

---

## **🎯 Objetivo do Projeto**

Criar uma API funcional utilizando **Node.js e Express** para consolidar conceitos de backend.

Ao concluir o projeto é possível:

- Criar APIs com **Node.js**
- Organizar rotas com **Express**
- Utilizar **GET e POST**
- Criar **middlewares de validação**
- Validar dados enviados pelo cliente
- Entender o fluxo **cliente → servidor → resposta**
- Testar endpoints com **Postman**

<br>

---

## **📌 Requisitos do Desafio**

### Rotas

- Listar profissionais e por ***id***
- Cadastrar profissionais voluntários

### Verbos HTTP

| Método | Função |
|------|------|
| GET | listar profissionais.    cadastrados |
| GET{id}| listar profissionais cadastrados por ***id*** |
| POST | cadastrar novo profissional |

### Middleware

```javascript
express.json()
```

<br>

## **🧰 Tecnologias Utilizadas**

| Tecnologias| Descrição |
|------|------|
| Node.js | execução JS |
| Express.js | framework para APIs |
| Postman | testes de endpoints |
| Vercel | deploy serverless |
| Nodemon | reload automático no                  desenvolvimento |  

<br>


<!--

## **📚 Documentação da API**

**🔗 [Clique aqui para Documentação no Postman!!]("/")*


<br>
-->

## **🚀 Endpoints da API**

### - **GET /cadastros: Listar profissionais**

🔗 Testar API:

GET https://desafio-medicos-dentistas-solidario-api.vercel.app/cadastros

<br>

### - **GET /cadastros/{id} — Buscar profissional por ID específico**

⚠️ Observação  
Esta API utiliza **armazenamento em memória**, portanto os dados não são persistidos.
Após reiniciar a função ou realizar novo deploy, os cadastros podem ser resetados.

🔗 Exemplo de requisição

GET https://desafio-medicos-dentistas-solidario-api.vercel.app/cadastros/1

<br>

### - **POST /cadastros: Criar cadastro**


```bash

Body JSON:

{
  "nome": "Rafael Raizer",
  "email": "rafa@email.com",
  "telefone": "47999999999",
  "mensagem": "Quero ajudar em ações sociais"
}
```

<br>

```bash
📌 Exemplo de Resposta da API
{
  "mensagem": "Cadastro enviado com sucesso!",
  "cadastro": {
    "id": 1,
    "nome": "Rafael Raizer",
    "email": "rafa@email.com",
    "telefone": "47999999999",
    "mensagem": "Quero ajudar em ações sociais"
  }
}
```

<br>

# **📌 Status HTTP Utilizados**

* **200** → Sucesso
* **201** → Recurso criado
* **404** → Recurso não encontrado

<br>

## **🧠 Lógica Utilizada na API**

Alguns métodos de JavaScript foram utilizados para manipular os dados do array que simula o banco de dados.

| Código | O que faz |
|------|------|
| `push()` | adicionar item |
| `find()` | busca um item |
| `p.id == id` | mantém apenas o item correspondente ao ID |

### Esses métodos permitem buscar, atualizar e remover produtos dentro da aplicação.


## **🏗️ Arquitetura da API**

```bash
Cliente (Postman / Frontend)
        │
        ▼
Express Server (server.js)
        │
        ▼
Middleware de Validação
        │
        ▼
Rotas (/cadastros)
        │
        ▼
Array em memória (cadastros[])
```

<br>

## **📂 Estrutura do Projeto**

```
api-cadastro-voluntarios
│
├── api
│   └── index.js
│
├── assets
│   └── img
│       └── apicadastros.gif
│
├── server.js
├── package.json
├── vercel.json
├── .env
├── .gitignore
│
└── README.md
```

<br>

## **⚙️ Como Executar o Projeto**

### ***1️⃣ Clonar o repositório***

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```
ou 

### ***📂 Criar pasta***

```bash
npm init -y
```
---

### ***2️⃣ Instalar dependências***

```bash
npm install express
npm install nodemon --save-dev
npm install dotenv   
```

---

### ***3️⃣ Executar o servidor na porta (localhost:3000)***

```bash
npm run dev
```

ou

```bash
node server.js
```

---


<br>

## **👨‍💻 Autor**

Projeto desenvolvido para prática de **CRUD com API REST usando Express e Vercel**.

<table>
<tr>
  <td align="center">
    <img src="https://avatars.githubusercontent.com/u/87991807?v=4" width="80" />
  </td>
  <td>
    **RafaRaizer-Dev** <br>
    <a href="https://api.whatsapp.com/send/?phone=47999327137">📱 WhatsApp</a> | 
    <a href="https://www.linkedin.com/in/raizer-rafael/">💼 LinkedIn</a> | 
    <a href="https://github.com/RaizerTechDev">🐱 GitHub</a> | 
    <a href="https://raizertechdev-portfolio.netlify.app/">🌐 Portfólio</a>
