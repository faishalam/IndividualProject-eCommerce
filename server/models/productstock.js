'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductStock.belongsTo(models.Product, { foreignKey: 'productId' })}
  }
  ProductStock.init({
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Product Id is required"
        },
        notEmpty: {
          msg: "Product Id is required"
        }
      }
    },
    S: {
      type: DataTypes.INTEGER,
      defaultValue : 0,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Product Id is required"
        },
        notEmpty: {
          msg: "Product Id is required"
        }
      }
    },
    M: {
      type: DataTypes.INTEGER,
      defaultValue : 0,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Product Id is required"
        },
        notEmpty: {
          msg: "Product Id is required"
        }
      }
    },
    L: {
      type: DataTypes.INTEGER,
      defaultValue : 0,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Product Id is required"
        },
        notEmpty: {
          msg: "Product Id is required"
        }
      }
    },
    XL: {
      type: DataTypes.INTEGER,
      defaultValue : 0,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Product Id is required"
        },
        notEmpty: {
          msg: "Product Id is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'ProductStock',
  });
  return ProductStock;
};