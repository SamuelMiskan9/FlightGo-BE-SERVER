'use strict';
const bcrypt = require("bcrypt")

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [      
        {
          name: 'admin',
          email: 'admin@gmail.com',
          password: await bcrypt.hash("123456", 10), //setup with bcrypt encrypt
          role:"admin",
          createdAt: Date.now()
        },{
          name: 'member',
          email: 'member@gmail.com',
          password: await bcrypt.hash("123456", 10), //setup with bcrypt encrypt
          role:"member",
          createdAt: Date.now()
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};