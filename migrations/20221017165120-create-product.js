'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jenis_penerbangan: Sequelize.STRING,
      bentuk_penerbangan: Sequelize.STRING,
      kota_asal: Sequelize.STRING,
      bandara_asal: Sequelize.STRING,
      kota_tujuan: Sequelize.STRING,
      bandara_tujuan: Sequelize.STRING,
      depature_date: Sequelize.STRING,
      depature_time: Sequelize.STRING,
      kode_negara_asal: Sequelize.STRING,
      kode_negara_tujuan: Sequelize.STRING,
      price: Sequelize.INTEGER,
      kota_asal_: Sequelize.STRING,
      bandara_asal_: Sequelize.STRING,
      kota_tujuan_: Sequelize.STRING,
      bandara_tujuan_: Sequelize.STRING,
      depature_date_: Sequelize.STRING,
      depature_time_: Sequelize.STRING,
      kode_negara_asal_: Sequelize.STRING,
      kode_negara_tujuan_: Sequelize.STRING,
      price_: Sequelize.INTEGER,
      total_price: Sequelize.INTEGER,
      image_product: Sequelize.STRING,
      desctiption: Sequelize.TEXT,
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product');
  }
};