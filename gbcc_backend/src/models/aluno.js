const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Disciplina = require('./disciplina');

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
});

// Relação entre Aluno e Disciplina
Aluno.belongsToMany(Disciplina, { through: 'AlunoDisciplina' });
Disciplina.belongsToMany(Aluno, { through: 'AlunoDisciplina' });

module.exports = Aluno;
