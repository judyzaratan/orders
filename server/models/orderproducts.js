'use strict';
module.exports = (sequelize, DataTypes) => {
  var OrderProducts = sequelize.define('OrderProducts', {
    quantity: DataTypes.INTEGER,
    number_purchased: DataTypes.INTEGER
  }, {underscored:true});
  OrderProducts.associate = function(models) {
    // associations can be defined here
    OrderProducts.belongsToMany(models.Order, {
      foreignKey: 'orderId',
      onDelete: 'CASCADE'
    });
    OrderProducts.belongsToMany(models.Product, {
      foreignKey: 'productId',
      onDelete: 'CASCADE'
    });
  };
  return OrderProducts;
};
