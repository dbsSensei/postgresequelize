// Main router entry point, sets up all route modules

const express = require("express");
const router = express.Router();

const productRatingController = require("../../controllers/productRatingController");

// router.get("/list", productRatingController.getAllProduct);
// router.get("/details/:id", productRatingController.getProductById);
router.post("/create/:product_id", productRatingController.createProductRating);
// router.post("/update/:product_id", productRatingController.createProduct);
// router.delete("/delete/:product_id", productRatingController.deleteProduct);

module.exports = router;
