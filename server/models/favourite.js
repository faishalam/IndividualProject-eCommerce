'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favourite.belongsTo(models.User, { foreignKey: 'userId' })
      Favourite.belongsTo(models.Product, { foreignKey: 'productId' })
    }
  }
  Favourite.init({
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
  }, {
    sequelize,
    modelName: 'Favourite',
  });
  return Favourite;
};