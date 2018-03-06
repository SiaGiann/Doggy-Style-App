'use strict';
module.exports = (sequelize, DataTypes) => {
  var Points = sequelize.define('Points', {
    userid: DataTypes.INTEGER,
    dogid: DataTypes.INTEGER,
    points: DataTypes.INTEGER
  }, {});
  Points.associate = function(models) {
    // associations can be defined here
  };
  return Points;
};
