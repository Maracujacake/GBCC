// api_livraria/models/livros.model.js

module.exports = (sequelize, Sequelize) => {
    const Livro = sequelize.define("livros", {
      titulo: {
        type: Sequelize.STRING,
      },
      autor: {
        type: Sequelize.STRING,
      },
      ano_publicacao: {
        type: Sequelize.INTEGER,
      },
      quantidade: {
        type: Sequelize.INTEGER,
      },
    });
  
    return Livro;
  };