'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Dogs', [
        {
          breed: 'bulldog',
          createdAt: 'NOW()',
          updatedAt: 'NOW()'
        },
        {
          breed: 'akita',
          createdAt: 'NOW()',
          updatedAt: 'NOW()'
        }
    ]);
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Dogs', null, {});
  }
}
