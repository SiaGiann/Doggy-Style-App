const Sequelize = require('sequelize')
const sequelize = require('../models').sequelize

const Points = sequelize.define('points', {
  user_id: {
    type: Sequelize.INTEGER,
  },
  dog_id: {
    type: Sequelize.INTEGER,
  },
  points: {
    type: Sequelize.INTEGER,
  }
}, {
  tableName: 'Points'
})

module.exports = Points
