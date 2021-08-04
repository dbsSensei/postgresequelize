// Main router entry point, sets up all route modules

const express = require("express");
const router = express.Router();

const productRouter = require("./productRouter");
const productRatingRouter = require("./productRatingRouter");

router.use("/product", productRouter);
router.use("/productRating", productRatingRouter);

module.exports = router;
