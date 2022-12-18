'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product', [      
      {
        jenis_penerbangan: 'Domestik',
        bentuk_penerbangan: 'one-way',
        kota_asal: "batam", //setup with bcrypt encrypt
        bandara_asal:"hang nadim",
        kota_tujuan: "jakarta",
        bandara_tujuan: "hasanudin",
        depature_date: "20 nov",
        depature_time: "20.WIB",
        kode_negara_asal:"ID",
        kode_negara_tujuan: null,
        price: "30.000",
        total_price:"30.000",
        image_product:"https://res.cloudinary.com/duwoisvla/image/upload/v1669719046/photo1669719020_jtqxri.jpg",
        desctiption: "lorem",
        createdAt: Date.now()
      },{
        jenis_penerbangan: 'internasional',
        bentuk_penerbangan: 'round-trip',
        kota_asal: "batam", 
        bandara_asal:"hang nadim",
        kota_tujuan: "kuala lumpur",
        bandara_tujuan: "ga punya",
        depature_date: "20 nov",
        depature_time: "20.WIB",
        kode_negara_asal:"ID",
        kode_negara_tujuan: "my",
        price: "30.000",
        //tiket pulang
        kota_asal_: "kuala lumpur", 
        bandara_asal_:"ga punya",
        kota_tujuan_: "batam",
        bandara_tujuan_: "hang nadim",
        depature_date_: "50 nov",
        depature_time_: "20.WIB",
        kode_negara_asal_:"my",
        kode_negara_tujuan_: "id",
        price_: "30.000",
        total_price:"60.000",
        image_product:"https://res.cloudinary.com/duwoisvla/image/upload/v1669719046/photo1669719020_jtqxri.jpg",
        desctiption: "lorem",
        createdAt: Date.now()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('product', null, {});
  }
};
