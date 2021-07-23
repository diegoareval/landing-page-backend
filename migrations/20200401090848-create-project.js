'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      thumbnailSrc: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      main_image: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      title: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    subtitle: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    totalPrice: {
        allowNull: false,
        type: Sequelize.STRING
      },
      monthlyPrice: {
        allowNull: false,
        type: Sequelize.STRING
      },
      area: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type: {
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
    return queryInterface.dropTable('Projects');
  }
};
