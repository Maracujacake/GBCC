const express = require('express');
const app = express();
const cors = require('cors'); // Importar CORS
require('dotenv').config(); // por enquanto não tem


const alunoRoutes = require('./routes/alunosRoutes');
const disciplinaRoutes = require('./routes/disciplinasRoutes');
const sequelize = require('./database');

// Middleware
app.use(cors());
app.use(express.json());

app.use('gbcc_api/alunos', alunoRoutes);
app.use('gbcc_api/disciplinas', disciplinaRoutes);


sequelize.sync({ force: false }).then(() => {
    console.log('Banco de dados sincronizado');
});


// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
