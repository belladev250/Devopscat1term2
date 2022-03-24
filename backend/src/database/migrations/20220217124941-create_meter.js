'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('meters', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      meter: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique:true
      },
      status:{
          type: Sequelize.ENUM,
          values: ['active','inactive'],
          defaultValue: 'active'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('meters');
  }
};
