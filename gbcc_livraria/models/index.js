// api_livraria/models/index.js

const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Livros = require("./livros.js")(sequelize, Sequelize);
db.Aluno = require("./aluno.js")(sequelize, Sequelize);
db.Aluguel = require("./aluguel.js")(sequelize, Sequelize);

db.Aluno.hasMany(db.Aluguel, { foreignKey: 'aluno_id' });
db.Livros.hasMany(db.Aluguel, { foreignKey: 'livro_id' });
db.Aluguel.belongsTo(db.Aluno, { foreignKey: 'aluno_id' });
db.Aluguel.belongsTo(db.Livros, { foreignKey: 'livro_id' });

module.exports = db;
