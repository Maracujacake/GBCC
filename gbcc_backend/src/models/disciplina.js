const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Definindo o modelo Disciplina
const Disciplina = sequelize.define('Disciplina', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    creditos: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    obrigatoria: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,  // Pode ser 'true' para indicar obrigatória ou 'false' para eletiva
    },
    preRequisitos: {
        type: DataTypes.JSON, // Armazena um array de nomes das disciplinas pré-requisito
        allowNull: true,
        defaultValue: [],
    },
});

module.exports = Disciplina;
