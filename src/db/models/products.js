'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init({
    title: DataTypes.STRING(512),
    qty: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    short_description: DataTypes.STRING,
    description: DataTypes.TEXT,
    is_active: DataTypes.BOOLEAN,
    discount_type: DataTypes.INTEGER,
    discount_amount: DataTypes.FLOAT,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'products',
    underscored: true,
  });
  return products;
};