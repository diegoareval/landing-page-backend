'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    image_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Project);
  };
  return Image;
};
