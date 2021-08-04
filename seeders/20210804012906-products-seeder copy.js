"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Product 1",
          description: "Product Description 1",
          price: 99,
          weight: 9,
          image: "product1.jpg",
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Product 2",
          description: "Product Description 2",
          price: 99,
          weight: 9,
          image: "product2.jpg",
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Product 3",
          description: "Product Description 3",
          price: 99,
          weight: 9,
          image: "product3.jpg",
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Product 4",
          description: "Product Description 4",
          price: 99,
          weight: 9,
          image: "product4.jpg",
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Product 5",
          description: "Product Description 5",
          price: 99,
          weight: 9,
          image: "product5.jpg",
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
