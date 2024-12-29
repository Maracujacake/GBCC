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
});

module.exports = Disciplina;
