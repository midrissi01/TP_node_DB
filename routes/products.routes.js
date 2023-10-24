const express = require("express");
const productController = require("../controllers/products.controllers");
const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.addProduct);
router.put("/:id", productController.modifyById);
router.delete("/:id", productController.deleteProductById);

module.exports = router;
