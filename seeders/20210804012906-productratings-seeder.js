"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ProductRatings",
      [
        {
          product_id: 1,
          rating: 4,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 2,
          rating: 2,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 3,
          rating: 5,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 6,
          rating: 2,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ProductRatings", null, {});
  },
};
