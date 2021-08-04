// Main router entry point, sets up all route modules

const express = require("express");
const router = express.Router();

const productController = require("../../controllers/productController");

router.get("/list", productController.getAllProduct);
router.get("/details/:id", productController.getProductById);
router.post("/create", productController.createProduct);
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
