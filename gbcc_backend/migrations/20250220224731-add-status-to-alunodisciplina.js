module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('AlunoDisciplina', 'status', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0, // 0 para "cursando", 1 para "completada"
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('AlunoDisciplina', 'status');
  }
};
