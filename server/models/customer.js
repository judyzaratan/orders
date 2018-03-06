'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    first_name: {
      type: DataTypes.STRING,
      required: true
    },
    last_name: {
      type: DataTypes.STRING,
      required: true
    }
  },{
    underscored: true
  });
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};
