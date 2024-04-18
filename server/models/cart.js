'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, { foreignKey: 'userId' })
      Cart.belongsTo(models.Product, { foreignKey: 'productId' })
    }
  }
  Cart.init({
    userId: {
      type : DataTypes.STRING,
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
    productId: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "productId is required"
        },
        notEmpty: {
          msg: "productId is required"
        }
      }
    },
    jumlah: {
      type : DataTypes.INTEGER,
      defaultValue : 0,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Jumlah is required"
        },
        notEmpty: {
          msg: "Jumlah is required"
        }
      }
    },
    size : {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Size is required"
        },
        notEmpty: {
          msg: "Size is required"
        }
      }
    },
    payment : {
      type : DataTypes.BOOLEAN,
      defaultValue : false,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Payment is required"
        },
        notEmpty: {
          msg: "Payment is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};