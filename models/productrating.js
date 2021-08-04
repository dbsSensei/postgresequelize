"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductRating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductRating.belongsTo(models.Product, {
        foreignKey: "id",
      });
    }
  }
  ProductRating.init(
    {
      product_id: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "ProductRating",
    }
  );
  return ProductRating;
};
