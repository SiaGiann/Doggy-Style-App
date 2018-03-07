'use strict';
module.exports = (sequelize, DataTypes) => {
  var Points = sequelize.define('Points', {
    user_id: DataTypes.INTEGER,
    dog_id: DataTypes.INTEGER,
    points: DataTypes.INTEGER
  }, {});
  Points.associate = function(models) {
    // associations can be defined here
  };
  return Points;
};
