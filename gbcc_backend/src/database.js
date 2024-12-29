const { Sequelize } = require('sequelize');

// Conectando ao MySQL
const sequelize = new Sequelize('bcc_api', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,  // Desativa logs de SQL no console (pode ser útil para produção)
});

module.exports = sequelize;
