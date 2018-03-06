'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dogs = sequelize.define('Dogs', {
    breed: DataTypes.STRING
  }, {});
  Dogs.associate = function(models) {
    // associations can be defined here
  };
  return Dogs;
};
