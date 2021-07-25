'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      logo_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      company_email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      codigo_postal: {
        allowNull: false,
        type: Sequelize.STRING
      },
      facebook_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      instagram_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      twitter_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      us_title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      us_description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      us_image: {
        allowNull: false,
        type: Sequelize.STRING
      },
      main_title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      main_subtitle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      wp_message: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Settings');
  }
};
