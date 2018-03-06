'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Dogs', [
        {
          breed: 'Bulldog',
          createdAt: 'NOW()',
          updatedAt: 'NOW()'
        },
        {
          breed: 'Akita',
          createdAt: 'NOW()',
          updatedAt: 'NOW()'
        }
    ]);
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Dogs', null, {});
  }
}
