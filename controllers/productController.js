const models = require("../models");
const product = require("../models/product");
const { Product, ProductRating } = models;

const {
  createData,
  getAllData,
  getSpecificData,
  deleteData,
} = require("../services");
const { requiredKeyChecker } = require("../services/utils");

exports.createProduct = async (req, res) => {
  try {
    requiredKeyChecker(req.body, [
      "name",
      "description",
      "price",
      "weight",
      "image",
    ]);

    const product = await createData(Product, req.body);
    res.status(201).send({ status: "success", data: product });
  } catch (err) {
    res.status(400).send({
      status: "error",
      message: err.message,
    });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const products = await getAllData(
      Product,
      ["description", "deleted"],
      [
        {
          model: ProductRating,
          as: "rating",
          attributes: ["rating", "createdAt", "updatedAt"],
        },
      ]
    );

    const data = products.map((product) => {
      return {
        ...product.dataValues,
        rating:
          product.dataValues.rating.length > 0
            ? product.dataValues.rating[0].dataValues.rating
            : null,
      };
    });

    res.send({ status: "success", length: products.length, data });
  } catch (err) {
    res.status(400).send({
      status: "error",
      message: err.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await getSpecificData(
      Product,
      {
        id: +req.params.id,
        deleted: false,
      },
      [
        {
          model: ProductRating,
          as: "rating",
          attributes: ["rating", "createdAt", "updatedAt"],
        },
      ]
    );

    if (product.length < 1)
      return res.status(404).send({
        status: "error",
        message: "There is no product with that ID",
      });

    const data = product.map((prod) => {
      return {
        ...prod.dataValues,
        rating:
          prod.dataValues.rating.length > 0
            ? prod.dataValues.rating[0].dataValues.rating
            : null,
      };
    });

    res.send({ status: "success", data });
  } catch (err) {
    res.status(400).send({
      status: "error",
      message: err.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await deleteData(Product, { id: req.params.id });
    res.status(200).send({ status: "success" });
  } catch (err) {
    res.status(400).send({
      status: "error",
      message: err.message,
    });
  }
};
