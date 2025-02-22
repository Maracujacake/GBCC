const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Disciplina = require('./disciplina');
const AlunoDisciplina = require('./alunoDisciplina'); // Modelo de AlunoDisciplina


// Definindo o modelo Aluno
const Aluno = sequelize.define('Aluno', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apelido: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    atividades_extracurriculares: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    creditos_restantes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 220, // Valor inicial
    },
});

// Relação entre Aluno e Disciplina
Aluno.belongsToMany(Disciplina, { through: AlunoDisciplina });
Disciplina.belongsToMany(Aluno, { through: AlunoDisciplina });

module.exports = Aluno;
