const express = require("express");
const productController = require("../../controller/products.controller");
const viewCount = require("../../middleware/viewCount");
const router = express.Router();

router
  .route("/")
  .get(productController.getAllProduct)
  .post((req, res) => {
    res.send("New Product Added");
  });

router
  .route("/:id")
  .get(viewCount, productController.getSingleProduct)
  .patch((req, res) => {
    res.send("product updated");
  })
  .delete((req, res) => {
    res.send("Product Deleted");
  });

module.exports = router;
