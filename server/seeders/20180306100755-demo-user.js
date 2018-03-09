'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        email: 'siayian@hotmail.com',
        password: bcrypt.hashSync('a12345', 10),
        photo: 'http://static1.squarespace.com/static/57d05107893fc0df0e6c8c33/t/5a0916cd652deab98d73b4c7/1510545102090/sia.jpg?format=1000w',
        bio: 'I am a singer....',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      }]);
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
