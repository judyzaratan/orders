'use strict';
module.exports = (sequelize, DataTypes) => {
  var productCategory = sequelize.define('ProductCategory', {
    categoryId:DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  productCategory.associate = function(models) {
    // associations can be defined here
    productCategory.belongsTo(models.Category {
      foreignKey: 'categoryId'
    });
    productCategory.belongsTo(models.Product {
      foreignKey: 'productId'
    });
  };
  return Product;
};
