// api_livraria/server.js
const express = require("express");
const cors = require("cors");
const db = require("./models");
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require("swagger-jsdoc");
const app = express();



app.use(cors());
app.use(express.json());


const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "API de Biblioteca",
        version: "1.0.0",
        description: "API para gerenciamento de alunos e livros",
      },
      servers: [
        {
          url: "http://localhost:5000",
        },
      ],
    },
    apis: ["./swaggerDoc.js"], 
  };

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Usando Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const AlunoRoutes = require('./routes/AlunoRoutes');
app.use('/api/aluno', AlunoRoutes);

// Conectar ao banco de dados e iniciar o servidor
db.sequelize.sync().then(() => {
  console.log("Banco de dados conectado com sucesso.");
  app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000.");
  });
});

// Rotas
require("./routes/LivrosRoutes.js")(app);

