"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.ProductRating, {
        foreignKey: "product_id",
        as: "rating",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      image: DataTypes.STRING,
      deleted: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
