'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transaction', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bukti_Pembayaran: Sequelize.STRING,
      userId: {
        type:Sequelize.INTEGER,
      },
      productId: {
        type: Sequelize.INTEGER,
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transaction');
  }
};