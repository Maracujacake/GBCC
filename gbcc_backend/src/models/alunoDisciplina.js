// models/AlunoDisciplina.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const AlunoDisciplina = sequelize.define('AlunoDisciplina', {
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0, //0 para nao cursada, 1 para cursada
  }
});

module.exports = AlunoDisciplina;
