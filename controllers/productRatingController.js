const models = require("../models");
const { Product, ProductRating } = models;

const {
  createData,
  getAllData,
  getSpecificData,
  deleteData,
} = require("../services");

exports.createProductRating = async (req, res) => {
  try {
    const productId = +req.params.product_id;
    const rating = +req.body.rating;

    const product = await getSpecificData(Product, {
      id: productId,
      deleted: false,
    });

    if (product.length < 1)
      throw new Error(`Product with id ${productId} does not exist`);

    if (rating > 5 || rating < 1)
      throw new Error("Rating is a range of 1 to 5.");

    await ProductRating.destroy({
      where: {
        product_id: productId,
      },
    });

    await createData(ProductRating, {
      product_id: productId,
      rating: rating,
    });
    res.status(201).send({ status: "success" });
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
          as: "ratings",
        },
      ]
    );

    res.send({ status: "success", length: products.length, data: products });
  } catch (err) {
    res.status(400).send({
      status: "error",
      message: err.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await getSpecificData(Product, {
      id: +req.params.id,
      deleted: false,
    });
    if (product.length < 1)
      return res.status(404).send({
        status: "error",
        message: "There is no product with that ID",
      });

    res.send({ status: "success", data: product });
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
