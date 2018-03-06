'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    order_date: DataTypes.DATEONLY,
    status: {
      type: DataTypes.ENUM,
      values:['waiting_delivery', 'on_the_way', 'delivered']
    }
  }, {underscored:true});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.Customer {
      foreignKey: 'customerId'
    });
  };
  return Order;
};
