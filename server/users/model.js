const Sequelize = require('sequelize')
const sequelize = require('../models').sequelize

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  photo: {
    type: Sequelize.STRING,
  },
  bio: {
    type: Sequelize.TEXT,
  }
}, {
  tableName: 'Users'
})

module.exports = User
