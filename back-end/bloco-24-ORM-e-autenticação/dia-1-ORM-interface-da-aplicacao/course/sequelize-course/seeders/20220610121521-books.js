'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Christine',
        author: 'Stephen King',
        pageQuantity: 616,
      },
      {
        title: 'Apanhador de Sonhos',
        author: 'Stephen King',
        pageQuantity: 656,
      },
      {
        title: 'A Dança da Morte',
        author: 'Stephen King',
        pageQuantity: '1248',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
