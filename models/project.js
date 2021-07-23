'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    thumbnailSrc: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    main_image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    totalPrice: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      monthlyPrice: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: true,
      }
  }, {});
  Project.associate = function(models) {
   Project.hasMany(models.Image);
   Project.hasMany(models.Contact);
  };
  return Project;
};
