'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const dataStock = require('../stock.json')
    dataStock.forEach((item) => {
      delete item.id
      item.createdAt = new Date()
      item.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('ProductStocks', dataStock, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ProductStocks', null, {})
  }
};
