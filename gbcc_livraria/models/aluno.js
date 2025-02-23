// models/aluno.js
module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define('Aluno', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
  
    return Aluno;
  };
  