'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('tokens', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue:Sequelize.UUIDV4
      },
      token: {
        type:Sequelize.INTEGER,
        unique:true,
        defaultValue:Math.floor(1000000 + Math.random() * 9000000),
      },
      meter_id: {
        type:Sequelize.STRING,
        allowNull:false
      },
      amount: {
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      status: {
          type:Sequelize.STRING,
          defaultValue:'active'
      },
      expired_at: {
        type: Sequelize.DATE,
        allowNull:false
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
    return queryInterface.dropTable('tokens');
  }
};
