'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      message: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      bookDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      bookDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      seen: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ProjectId: {
        references: {
          model: 'Projects',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Contacts');
  }
};
