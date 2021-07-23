'use strict';
module.exports = (sequelize, DataTypes) => {
  const Setting = sequelize.define('Setting', {
    company_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      codigo_postal: {
        type: DataTypes.STRING,
        allowNull: false
      },
      facebook_url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      instagram_url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      twitter_url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      us_title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      us_description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      us_image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      main_title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      main_subtitle: {
        type: DataTypes.STRING,
        allowNull: false
      },
      wp_message: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {});
  Setting.associate = function(models) {
  };
  return Setting;
};
