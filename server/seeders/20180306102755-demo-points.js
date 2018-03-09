'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Points', [{
        user_id: 1,
        dog_id: 2,
        points: 3,
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      }]);
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Points', null, {});
  }
  };
