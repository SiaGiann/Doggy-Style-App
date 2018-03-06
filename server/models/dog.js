'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dog = sequelize.define('Dog', {
    breed: DataTypes.STRING
  }, {});
  Dog.associate = function(models) {
    // associations can be defined here
  };
  return Dog;
};
