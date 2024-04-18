'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Order.init({
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Order Id is required"
        },
        notEmpty: {
          msg: "Order Id is required"
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "User Id is required"
        },
        notEmpty: {
          msg: "User Id is required"
        }
      }
    },
    cart : {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    name : DataTypes.STRING,
    status: DataTypes.STRING,
    price: DataTypes.INTEGER,
    paidDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};