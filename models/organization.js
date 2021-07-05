'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    domain: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    employeesNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {});
  Organization.associate = function(models) {
    Organization.hasMany(models.User);
  };
  return Organization;
};
