'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.User, { foreignKey: 'userId' })
      History.belongsTo(models.Cart, { foreignKey: 'chartId' })
    }
  }
  History.init({
    userId: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate: {
        notNull: {
          msg: "User Id is required"
        },
        notEmpty: {
          msg: "User Id is required"
        }
      }
    },
    chartId: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate: {
        notNull: {
          msg: "Chart Id is required"
        },
        notEmpty: {
          msg: "Chart Id is required"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};