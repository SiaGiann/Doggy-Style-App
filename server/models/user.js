'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    Name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    photo: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};