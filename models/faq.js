'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faq = sequelize.define('Faq', {
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Faq.associate = function(models) {
  };
  return Faq;
};
