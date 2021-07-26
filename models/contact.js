'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      type: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      bookDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      seen: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
  }, {});
  Contact.associate = function(models) {
    Contact.belongsTo(models.Project);
  };
  return Contact;
};
