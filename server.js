require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

let cadastros = [];
let proximoId = 1;

app.use(express.json());

// ============================
// Funções de Validação
// ============================

function emailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
    }

    function telefoneValido(telefone) {
      const regex = /^[0-9]{10,11}$/;
        return regex.test(telefone);
        }

        // ============================
        // Middleware
        // ============================

        function validarCadastro(req, res, next) {
          const { nome, email, telefone, mensagem } = req.body;

            if (!nome || nome.length < 3) {
                return res.status(400).json({
                      erro: "Nome deve ter no mínimo 3 caracteres"
                          });
                            }

                              if (!email || !emailValido(email)) {
                                  return res.status(400).json({
                                        erro: "Email inválido"
                                            });
                                              }

                                                if (!telefone || !telefoneValido(telefone)) {
                                                    return res.status(400).json({
                                                          erro: "Telefone inválido"
                                                              });
                                                                }

                                                                  if (mensagem && mensagem.length > 500) {
                                                                      return res.status(400).json({
                                                                            erro: "Mensagem deve ter no máximo 500 caracteres"
                                                                                });
                                                                                  }

                                                                                    next();
                                                                                    }

                                                                                    // ============================
                                                                                    // Rotas
                                                                                    // ============================

                                                                                    app.get("/", (req, res) => {
                                                                                      res.send("API Rodando!");
                                                                                      });

                                                                                      app.get("/cadastros", (req, res) => {
                                                                                        res.json(cadastros);
                                                                                        });

app.get("/cadastros/:id", (req, res) => {

  const id = Number(req.params.id);

  const cadastro = cadastros.find(p => p.id === id);

  if (!cadastro) {
    return res.status(404).json({
      erro: "Cadastro não encontrado"
    });
  }

  res.status(200).json(cadastro);

});



                                                                                            app.post("/cadastros", validarCadastro, (req, res) => {
                                                                                                 const { nome, email, telefone, mensagem } = req.body;

                                                                                            const novoCadastro = {
                                                                                                id: proximoId++,
                                                                                                    nome,
                                                                                                        email,
                                                                                                            telefone,
                                                                                                                mensagem: mensagem || null
                                                                                                                  };

                                                                                                                    cadastros.push(novoCadastro);

                                                                                                                      res.status(201).json({
                                                                                                                          mensagem: "Cadastro enviado com sucesso!",
                                                                                                                              cadastro: novoCadastro
                                                                                                                                });
                                                                                                                                });

                                                                                                                                // Rodar localmente
                                                                                                                                if (process.env.NODE_ENV !== "production") {
                                                                                                                                  app.listen(PORT, () => {
                                                                                                                                      console.log(`Servidor rodando em http://localhost:${PORT}`);
                                                                                                                                        });}
                                                                                                                            

                                                                                                                                        // export para Vercel
                                                                                                                                        module.exports = app;
