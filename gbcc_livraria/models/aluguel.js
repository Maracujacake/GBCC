// models/aluguel.js
module.exports = (sequelize, DataTypes) => {
    const Aluguel = sequelize.define('Aluguel', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      data_devolucao: {
        type: DataTypes.DATE,
        allowNull: false
      },
      livro_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      aluno_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  
    return Aluguel;
  };
  