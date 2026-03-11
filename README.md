🩺 API Cadastro de Médicos e Dentistas Voluntários
<p align="center"> <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f2027,100:2c5364&height=180&section=header&text=API%20Voluntários%20da%20Saúde&fontSize=35&fontColor=ffffff&animation=fadeIn"/> </p> <p align="center">










</p>
📖 Sobre o Projeto

Esta aplicação consiste em uma API REST desenvolvida com Node.js e Express para registrar Médicos e Dentistas voluntários interessados em participar de ações sociais de saúde.

O sistema simula um pequeno banco de dados utilizando armazenamento em memória, permitindo cadastrar e listar profissionais voluntários.

Projeto desenvolvido como desafio do curso VNW (Vai Na Web) com orientação dos mentores Jeferson Santos e Vinicius Bispo.

🎯 Objetivo do Projeto

Criar uma API funcional consolidando conceitos importantes de backend.

Ao concluir este projeto é possível:

✔ Criar APIs com Node.js e Express
✔ Trabalhar com rotas HTTP
✔ Utilizar GET e POST
✔ Criar middlewares de validação
✔ Validar dados enviados pelo cliente
✔ Entender o fluxo cliente → servidor → resposta
✔ Testar endpoints com Postman

Simulando o trabalho de um desenvolvedor backend.

📌 Requisitos do Desafio
Rotas

Criar rotas organizadas para:

listar profissionais voluntários

cadastrar novos profissionais

Verbos HTTP
Método	Função
GET	listar profissionais cadastrados
POST	cadastrar novo profissional
Middleware

Utilização do middleware:

express.json()

Para permitir o envio de dados em JSON.

Validação de Dados
Campo	Regra
Nome	mínimo 3 caracteres
Email	formato válido
Telefone	10 ou 11 números
Mensagem	máximo 500 caracteres
Armazenamento

Utilização de um array em memória para simular banco de dados.

Testes

Todos os endpoints foram testados utilizando o Postman.

🎥 Demonstração
<div align="center"> <img src="https://media.giphy.com/media/3zSF3Gnr7cxMbi6WoP/giphy.gif" height="50"/> <img height="420px" src="./assets/img/apicadastros.gif"/> </div>
🧰 Tecnologias Utilizadas
Tecnologia	Função
Node.js	Ambiente de execução JavaScript
Express.js	Framework para criação da API
Postman	Testes de endpoints
Vercel	Deploy serverless
Nodemon	Reload automático no desenvolvimento
Dotenv	Gerenciamento de variáveis de ambiente
🏗️ Arquitetura da API
Cliente (Postman / Frontend)
        │
                ▼
                Servidor Express (server.js)
                        │
                                ▼
                                Middleware de Validação
                                        │
                                                ▼
                                                Rotas (/cadastros)
                                                        │
                                                                ▼
                                                                Array em memória (cadastros[])
                                                                🚀 Endpoints da API
                                                                Listar profissionais
                                                                GET /cadastros

                                                                Exemplo:

                                                                https://desafio-medicos-dentistas-solidario.vercel.app/cadastros
                                                                Criar cadastro
                                                                POST /cadastros

                                                                Body JSON:

                                                                {
                                                                 "nome": "Rafael Raizer",
                                                                  "email": "rafa@email.com",
                                                                   "telefone": "47999999999",
                                                                    "mensagem": "Quero ajudar em ações sociais"
                                                                    }
                                                                    📌 Exemplo de Resposta
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
                                                                                      ☁️ Deploy da API

                                                                                      A API foi publicada utilizando Serverless Functions da Vercel.

                                                                                      Testar endpoint:

                                                                                      👉
                                                                                      https://desafio-medicos-dentistas-solidario.vercel.app/cadastros

                                                                                      📚 Documentação da API

                                                                                      Documentação completa no Postman:

                                                                                      https://documenter.getpostman.com/view/19569624/2sBXcLec9Y

                                                                                      📂 Estrutura do Projeto
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
                                                                                      ⚙️ Como Executar o Projeto
                                                                                      Clonar repositório
                                                                                      git clone https://github.com/seu-usuario/seu-repositorio.git
                                                                                      Instalar dependências
                                                                                      npm install
                                                                                      Criar arquivo .env
                                                                                      PORT=3000
                                                                                      Rodar servidor

                                                                                      Modo desenvolvimento:

                                                                                      npm run dev

                                                                                      ou

                                                                                      node server.js

                                                                                      Servidor rodando em:

                                                                                      http://localhost:3000
                                                                                      👨‍💻 Autor
                                                                                      <table> <tr> <td align="center"> <img src="https://avatars.githubusercontent.com/u/87991807?v=4" width="80"/> </td> <td>
                                                                                      RafaRaizer-Dev

                                                                                      📱 https://api.whatsapp.com/send/?phone=47999327137

                                                                                      💼 https://www.linkedin.com/in/raizer-rafael/

                                                                                      🐱 https://github.com/RaizerTechDev

                                                                                      🌐 https://raizertechdev-portfolio.netlify.app/

                                                                                      </td> </tr> </table>